# 🎬 Video Streaming Backend

This is a **Node.js-based backend** for a video streaming application. It allows users to **upload videos**, convert them into **HLS format** using **FFmpeg**, and serve them for smooth playback.

---

## 🚀 Features

- **Upload videos** using Multer
- **Convert videos to HLS format** (HTTP Live Streaming)
- **Serve video files** from an `/uploads` directory
- **CORS enabled** for frontend integration
- **Unique IDs for each uploaded video**

---

## 🛠️ Tech Stack

- **Node.js** (Express.js)
- **Multer** (File uploads)
- **FFmpeg** (Video processing)
- **UUID** (Unique identifiers)
- **Cors** (Cross-Origin Resource Sharing)
- **File System (fs)** (Handling file storage)

---

## 🔧 Installation & Setup

### 📌 1. Clone the repository  
```sh
 git clone https://github.com/RamanKurai/video-streaming-backend.git
cd video-streaming-backend


## 2. Install dependencies
sh
Copy
Edit
npm install

## 3. Install FFmpeg
Make sure FFmpeg is installed on your system. Check by running:

sh
Copy
Edit
ffmpeg -version
If not installed, download it from FFmpeg.org and set it up in your system environment variables.

📌 4. Run the server
sh
Copy
Edit
npm start
The backend will run on http://localhost:8000.

📂 API Endpoints
1️⃣ Upload Video
Endpoint: POST /upload
Request: multipart/form-data (Key: file)
Response Example:
json
Copy
Edit
{
  "message": "Video converted to HLS format",
  "videoUrl": "http://localhost:8000/uploads/courses/lessonId/index.m3u8",
  "lessonId": "12345-uuid"
}
2️⃣ Serve Video
The HLS video playlist (.m3u8) can be accessed at:
bash
Copy
Edit
http://localhost:8000/uploads/courses/{lessonId}/index.m3u8
📝 Project Structure
bash
Copy
Edit
📂 video-streaming-backend
 ┣ 📂 uploads              # Stores uploaded video files
 ┣ 📜 server.js            # Main backend file (Express.js)
 ┣ 📜 package.json         # Dependencies & scripts
 ┣ 📜 README.md            # Project documentation

🛠️ Troubleshooting
1️⃣ FFmpeg not found error?
Ensure that FFmpeg is installed and added to the system's PATH.
Run ffmpeg -version in the terminal to verify installation.
2️⃣ "No file uploaded" error?
Make sure the file input field is named "file" in the frontend.
Try changing upload.single("file") to upload.any() in server.js.
3️⃣ Cannot access the video?
Ensure the /uploads directory is publicly accessible.
Check if FFmpeg successfully created .m3u8 and .ts files in /uploads/courses/{lessonId}.
📜 License
This project is open-source and available under the MIT License.

💡 Contributing & Issues
Feel free to submit issues or pull requests if you find any bugs or want to improve the project! 🚀
For major changes, please open an issue first to discuss the improvements.

⭐ Don't forget to star the repository if you found this useful! ⭐
markdown
Copy
Edit

---

### **How to Use This?**
1. Create a new `README.md` file in your project.
2. Copy and paste the content above.
3. Replace `"yourusername"` with your actual GitHub username.
4. Commit and push it to GitHub.

This **README.md** provides a **clean, structured, and detailed** overview of your backend project, making it easier for others to understand and contribute. 🚀🔥  

Let me know if you need any changes! 😊






