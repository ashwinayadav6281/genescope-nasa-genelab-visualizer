
# 🚀 GeneScope: NASA GeneLab Dataset Visualizer

GeneScope is a full-stack web application that lets users explore, search, and visualize 150+ spaceflight biological experiment datasets from NASA's GeneLab. Built with React, Node.js, and Express, this project delivers dynamic filtering and interactive charts to enable biological research enthusiasts to investigate the effects of space on life.

![NASA Logo](https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg)

---

## 🛰 Features

- 🔍 **Search & Filter** datasets by organism, tissue type, and mission
- 📊 **Interactive Data Visualization** with Chart.js (gene expression values)
- 🖼️ **Thumbnail Previews** for each study
- 🧬 Explore 5000+ gene expression data points
- ⚡ Fast and responsive design with modern UI
- 🎨 NASA-inspired theme for an immersive experience

---

## 🔧 Tech Stack

### Frontend
- React.js
- Axios
- Chart.js
- CSS (custom dark theme)

### Backend
- Node.js
- Express.js
- Axios (server-side)
- NASA GeneLab API

---

## 📁 Folder Structure

```
genescope-nasa-genelab-visualizer/
├── frontend/          # React frontend app
│   ├── src/
│   │   ├── App.js     # Main app logic and UI
│   │   └── App.css    # NASA-inspired styling
├── backend/           # Express backend server
│   ├── index.js       # API handler to call NASA GeneLab API
├── README.md
└── .env               # Environment variables (if needed)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/genescope-nasa-genelab-visualizer.git
cd genescope-nasa-genelab-visualizer
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm start
```

### 3. Setup Backend (in a separate terminal)

```bash
cd backend
npm install
node index.js
```

> ⚠️ Make sure both the frontend and backend are running at the same time.

---

## 🌐 Screenshots

| Home View | Study Card |
|-----------|------------|
| ![Home](https://your-screenshot-link.com) | ![Study](https://your-screenshot-link.com) |

---

## 📦 API Reference

- 🔗 [NASA GeneLab API Docs](https://genelab-data.ndc.nasa.gov/genelab/data-access)

---

## 📄 License

MIT License  
© 2025 [Your Name](https://github.com/your-username)

---

## 🌟 Acknowledgments

- 🚀 NASA GeneLab for their incredible open data  
- 🧪 Researchers who contributed biological experiment data  
- 👨‍💻 Developed during my Software Engineering Internship (Summer 2025)
