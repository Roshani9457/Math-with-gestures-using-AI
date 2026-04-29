# 🧠✋ Maths With Gesture Using AI

An AI-powered gesture-based calculator that allows users to solve mathematical problems by drawing in the air using hand gestures.

---

## 🚀 Features

- ✋ Gesture-based drawing using webcam  
- 🧮 AI-powered math solving  
- ⚡ Real-time communication using WebSocket  
- 📜 Session-based history  
- ❓ Help panel with gesture guide  
- 🎨 Modern responsive UI  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS

### Backend
- Python
- FastAPI
- WebSocket

### AI & Computer Vision
- OpenCV
- MediaPipe
- Gemini API

---

## 📂 Project Structure
project/
│
├── frontend/ # React UI
│ ├── src/
│ └── components/
│
├── backend/ # FastAPI server
│ ├── main.py
│ └── utils/
│
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone <your-repo-link>
cd project

Backend Setup
cd backend
pip install -r requirements.txt

Run server:
uvicorn main:app --port 8900 --reload

Frontend Setup
cd frontend
npm install
npm run dev

▶️ How It Works
Webcam captures hand gestures
MediaPipe detects hand landmarks
Gestures are converted into drawing
Expression is sent to backend
AI processes and solves it
Result is displayed on screen

📜 History Feature
Stores previous answers in UI
Implemented using React useState
Temporary (cleared on refresh)
❓ Help Feature
Displays gesture instructions
Helps users understand controls

⚠️ Limitations
Requires proper lighting
Gesture accuracy may vary
Internet required for AI
No permanent history storage
🔮 Future Improvements
💾 Database storage for history
👤 User authentication
📱 Mobile app version
🎤 Voice input
📊 Step-by-step solutions
🎯 Use Cases
Students learning math
Teachers for demonstrations
Interactive classrooms
Contactless systems

📄 License

This project is for educational purposes.

🙏 Acknowledgement

Special thanks to our project guide for guidance and support.


---

If you want to make it **look more professional on GitHub**, I can also:
- Add **badges (build, tech stack, license)**  
- Add **screenshots section (very important for projects)**  
- Add **demo video preview (top-level GitHub impact)**
