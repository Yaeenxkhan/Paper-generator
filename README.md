# 📝 Smart Question Paper Generator

A modern, feature-rich web application for teachers to create, format, and print professional question papers with support for both English and Urdu languages.

![Smart Question Paper Generator](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)

---

## 🌟 Features

### ✅ Question Types Supported
| Section | Type | Description |
|---------|------|-------------|
| Section A | **MCQs** | Multiple Choice Questions with 4 options |
| Section B | **Fill in the Blanks** | Questions with blank spaces to fill |
| Section C | **True/False** | Statements to mark as True or False |
| Section D | **Short Questions** | Brief answer questions |
| Section E | **Long Questions** | Detailed/essay questions |

### ✅ Settings & Configuration
- 🏫 School Name & Logo Upload
- 📚 Class Name & Subject
- 📝 Examination Type (Midterm, Final, Monthly, etc.)
- ⏱️ Time Duration & Total Marks
- 👨‍🏫 Teacher Name & Date
- 🌐 **English/Urdu Language Toggle**

### ✅ Paper Generation
- Clean, professional A4 format
- Proper margins and spacing
- Centered school header with logo
- Bold section titles
- Numbered questions
- **No answer spaces** (clean exam format)
- Page break support for long papers

### ✅ Language Support
- **English** (LTR - Left to Right)
- **Urdu** (RTL - Right to Left)
- Automatic layout adjustment
- Noto Nastaliq Urdu font support

### ✅ PDF & Print
- 📥 Download as PDF
- 🖨️ Direct Print
- Preserves all formatting
- Maintains RTL for Urdu
- Includes logo in output

### ✅ Extra Features
- 💾 Auto-save to Local Storage
- 📂 Save multiple papers with names
- 📋 Load previous papers
- 🔄 Duplicate paper option
- 🗑️ Reset paper button
- 👁️ Live preview panel
- 🖱️ Drag & drop question reordering
- 📊 Real-time marks calculation

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **PDF Generation:** html2pdf.js
- **Icons:** Lucide React
- **Drag & Drop:** @hello-pangea/dnd

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your computer:

### 1. Node.js (Required)
- **Download:** https://nodejs.org/
- **Recommended Version:** 18.x or higher (LTS)
- **How to check:** Open terminal/command prompt and type:
  ```bash
  node --version
  ```
  You should see something like `v18.17.0`

### 2. npm (Comes with Node.js)
- **How to check:** 
  ```bash
  npm --version
  ```
  You should see something like `9.6.7`

### 3. VS Code (Recommended Editor)
- **Download:** https://code.visualstudio.com/
- **Install** the following extensions (optional but helpful):
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter

---

## 🚀 Step-by-Step Setup Guide for VS Code

### Step 1: Download/Clone the Project

#### Option A: If you have the project files as a ZIP
1. Extract the ZIP file to a folder (e.g., `C:\Projects\question-paper-generator`)

#### Option B: Create a new folder and copy files
1. Create a new folder on your computer:
   ```
   C:\Projects\question-paper-generator
   ```
2. Copy all the project files into this folder

### Step 2: Open Project in VS Code

1. **Open VS Code**
2. Click on **File** → **Open Folder**
3. Navigate to your project folder (e.g., `C:\Projects\question-paper-generator`)
4. Click **Select Folder**

Your VS Code should now show the project structure in the left sidebar:
```
question-paper-generator/
├── src/
│   ├── components/
│   │   ├── FillBlanksPanel.tsx
│   │   ├── LongQuestionsPanel.tsx
│   │   ├── MCQPanel.tsx
│   │   ├── PreviewPanel.tsx
│   │   ├── SavedPapersPanel.tsx
│   │   ├── SettingsPanel.tsx
│   │   ├── ShortQuestionsPanel.tsx
│   │   ├── Sidebar.tsx
│   │   └── TrueFalsePanel.tsx
│   ├── context/
│   │   └── PaperContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

### Step 3: Open Terminal in VS Code

1. In VS Code, go to **Terminal** → **New Terminal**
   - Or press `` Ctrl + ` `` (backtick key)
2. A terminal panel will open at the bottom of VS Code

### Step 4: Install Dependencies

In the terminal, type the following command and press Enter:

```bash
npm install
```

**What this does:** Downloads all required packages (React, Tailwind, etc.)

**Wait for it to complete.** You'll see a progress bar and then a success message.
This may take 1-3 minutes depending on your internet speed.

You should see output like:
```
added 250 packages in 45s
```

### Step 5: Start the Development Server

In the terminal, type:

```bash
npm run dev
```

**What this does:** Starts a local development server

You should see output like:
```
  VITE v5.0.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 6: Open in Browser

1. **Hold Ctrl** and **click** on the link `http://localhost:5173/`
   - Or manually open your browser and go to: `http://localhost:5173/`

2. 🎉 **The application should now be running!**

### Step 7: Using the Application

1. **Settings Tab:** Enter school details, upload logo, set exam info
2. **MCQs Tab:** Add multiple choice questions
3. **Fill in Blanks Tab:** Add fill-in-the-blank questions
4. **True/False Tab:** Add true/false statements
5. **Short Questions Tab:** Add short answer questions
6. **Long Questions Tab:** Add long/essay questions
7. **Preview Tab:** See the formatted paper, download PDF, or print

---

## 🛑 How to Stop the Server

In the VS Code terminal, press:
```
Ctrl + C
```
Then type `Y` and press Enter if prompted.

---

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This creates a `dist` folder with optimized files that can be deployed to any web server.

To preview the production build locally:
```bash
npm run preview
```

---

## 🗂️ Project Structure Explained

```
src/
├── components/           # React UI components
│   ├── FillBlanksPanel.tsx    # Fill in blanks question manager
│   ├── LongQuestionsPanel.tsx # Long questions manager
│   ├── MCQPanel.tsx           # MCQ question manager
│   ├── PreviewPanel.tsx       # Paper preview & PDF/Print
│   ├── SavedPapersPanel.tsx   # Saved papers manager
│   ├── SettingsPanel.tsx      # School/exam settings
│   ├── ShortQuestionsPanel.tsx# Short questions manager
│   ├── Sidebar.tsx            # Navigation sidebar
│   └── TrueFalsePanel.tsx     # True/False question manager
│
├── context/
│   └── PaperContext.tsx  # Global state management & localStorage
│
├── types/
│   └── index.ts          # TypeScript type definitions
│
├── App.tsx               # Main application component
├── index.css             # Global styles & Tailwind imports
└── main.tsx              # Application entry point
```

---

## 🔧 Key Functions Explained

### PaperContext.tsx (State Management)
- **`addMCQ()`** - Adds a new MCQ question
- **`updateMCQ()`** - Updates an existing MCQ
- **`deleteMCQ()`** - Removes an MCQ
- **`reorderMCQs()`** - Reorders MCQs after drag & drop
- Similar functions exist for all question types
- **`resetPaper()`** - Clears all data
- **Auto-save:** Uses `useEffect` to save to localStorage on every change

### PreviewPanel.tsx (Paper Generation)
- **`handleDownloadPDF()`** - Uses html2pdf.js to generate PDF
- **`handlePrint()`** - Opens browser print dialog
- **`getSectionLabel()`** - Dynamically assigns A, B, C, D, E to sections
- **RTL Support:** Applies `dir="rtl"` for Urdu language

### Drag & Drop (All Question Panels)
- Uses `@hello-pangea/dnd` library
- **`DragDropContext`** - Wraps the draggable area
- **`Droppable`** - Defines where items can be dropped
- **`Draggable`** - Makes individual items draggable
- **`onDragEnd()`** - Handles the reordering logic

---

## 💡 Tips for Teachers

### Creating Fill in the Blanks
Use underscores to create blanks:
```
The capital of Pakistan is ______.
Water boils at ______ degrees Celsius.
```

### Organizing Sections
- Questions are automatically organized by section
- Sections only appear if they have questions
- Section letters (A, B, C, etc.) adjust dynamically

### Best Practices
1. Fill in school details first in Settings
2. Upload a school logo for professional look
3. Add questions section by section
4. Use Preview to check formatting
5. Save your paper with a descriptive name
6. Download PDF for permanent copy

---

## 🐛 Troubleshooting

### Problem: `npm install` fails
**Solution:** 
1. Make sure Node.js is installed correctly
2. Try running as administrator
3. Delete `node_modules` folder and try again

### Problem: Page is blank
**Solution:**
1. Check terminal for errors
2. Make sure all files are saved
3. Try refreshing the browser (Ctrl + F5)

### Problem: Urdu text not displaying correctly
**Solution:**
1. Make sure you have internet connection (font loads from Google)
2. Try a different browser (Chrome recommended)

### Problem: PDF download not working
**Solution:**
1. Allow popups in your browser
2. Check if any ad-blocker is interfering
3. Try using Chrome browser

### Problem: Port 5173 already in use
**Solution:**
Run with a different port:
```bash
npm run dev -- --port 3000
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Support

If you encounter any issues or have suggestions:
1. Check the Troubleshooting section above
2. Make sure all dependencies are installed
3. Restart the development server

---

## 🎓 Quick Start Summary

```bash
# 1. Open project folder in VS Code
# 2. Open terminal (Ctrl + `)
# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open http://localhost:5173 in browser
# 6. Start creating question papers!
```

---

**Made with ❤️ for Teachers**
