import express from "express"
import cors from "cors"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"
import path from "path"
import fs from "fs"
import { exec } from "child_process" // watch out

const app = express()

// Multer middleware
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads")
    }, 
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + uuidv4() + path.extname(file.originalname))
    }
})

// Multer configuration
const upload = multer({ storage: storage })

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))

app.get("/", (req, res) => {
    res.json({ message: "Hi there" }) // Fixed response
})

app.post("/upload", upload.any(), (req, res) => {
  
    const lessonId = uuidv4();
    const vedioPath = req.file.path;
    const outputPath = `./uploads/courses/${lessonId}`
    const hlsPath = `${outputPath}/index.m3u8`
    console.log("hlsPath" , hlsPath)
    
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath , {recursive : true})
    }

    //ffmpeg command 

    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath} `;
 // no queue can't upload to the production 
    exec(ffmpegCommand, (error, stdout, stderr) => {
        if (error) {
          console.log(`exec error: ${error}`)
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
        const videoUrl = `http://localhost:8000/uploads/courses/${lessonId}/index.m3u8`;
    
        res.json({
          message: "Video converted to HLS format",
          videoUrl: videoUrl,
          lessonId: lessonId
        })
      })
    
});

app.listen(8000, function() {
    console.log("App is running on port 8000")
})
