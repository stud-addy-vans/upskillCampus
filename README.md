# Content Management System (CMS) for a Blog

**Author:** Aditya Pratap Singh  
**Domain:** Full Stack Web Development  
**Institution:** UniConverge Technologies Pvt Ltd (UCT) & upskill Campus  

## 📖 About the Project
This project is a custom-built Content Management System (CMS) designed to replicate the core mechanics of platforms like WordPress and Drupal. It allows non-technical users to seamlessly design web page layouts and publish blog posts using a visual interface, eliminating the need to write raw HTML, CSS, or JavaScript. 

The system securely converts visual inputs and rich text into database-ready formats, demonstrating complex frontend state management and robust full-stack data routing.

## ✨ Features
* **Drag-and-Drop Page Builder:** Intuitive interface to drag text and media placeholders onto a responsive canvas.
* **Rich-Text Editor:** Captures user input and securely serializes it into raw, sanitized HTML.
* **RESTful API Integration:** Node.js/Express backend handles data routing via HTTP POST requests.
* **Dynamic Content Rendering:** Simulates fetching stored HTML payloads to safely render them.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (Native Drag and Drop API)
* **Backend:** Node.js, Express.js
* **Database Target:** MongoDB (via mongoose/JSON payloads)
* **Architecture:** 3-Tier Model (Client, Logic, Data)

## ⚙️ System Architecture
1. **Client Tier (Frontend):** A web browser rendering the HTML/CSS/JS interface containing the drag-and-drop tool palette and text editor.
2. **Logic Tier (Backend):** A Node.js/Express server listening for HTTP POST requests to process and route incoming HTML payloads.
3. **Data Tier (Database):** Secure storage layer designed to hold the finalized layout metadata and serialized blog content.

## 🚀 Installation & Setup
To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/upskillcampus.git](https://github.com/yourusername/upskillcampus.git)
   cd upskillcampus
2. **Install server dependencies:**
   ```bash
   npm install express
3. **Start the backend server:**
   ```bash
   node server.js
4. **Access the application:**
   ```bash
   Open your web browser and navigate to http://localhost:3000

## 🧪 Usage & Testing
1. **Build Layout:** A web browser rendering the HTML/CSS/JS interface containing the drag-and-drop tool palette and text editor.
2. **Draft Content:** A Node.js/Express server listening for HTTP POST requests to process and route incoming HTML payloads.
3. **Publish:** Secure storage layer designed to hold the finalized layout metadata and serialized blog content.
4. **Verify:** A success message will appear on the frontend. Check your terminal/command prompt to confirm the Node.js server successfully received and parsed the HTML payload.

## 🔮 Future Enhancements
1. **Authentication:** Implement JWT (JSON Web Tokens) for secure multi-author login and session management.
2. **Media Storage:** Integrate AWS S3 buckets to allow users to upload and host media files directly rather than relying on external image URLs.
3. **SEO Optimization:** Enhance the generated HTML templates to include dynamic meta tags for better Search Engine Optimization.

## 🏆 Acknowledgments
This project was developed during a 6-week Full Stack Web Development Industrial Internship provided by upskill Campus and The IoT Academy in collaboration with UniConverge Technologies Pvt Ltd (UCT).
