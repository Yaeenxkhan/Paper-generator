# 🚀 Quick Start Guide - Smart Question Paper Generator

## For Complete Beginners (Step-by-Step with Pictures Description)

---

## PART 1: Install Required Software

### Step 1: Install Node.js

1. **Open your web browser** (Chrome, Edge, Firefox)

2. **Go to:** https://nodejs.org/

3. **Click the green button** that says "LTS" (Long Term Support)
   - This downloads a file like `node-v18.17.0-x64.msi`

4. **Find the downloaded file** (usually in Downloads folder)

5. **Double-click to install:**
   - Click "Next" on all screens
   - Accept the license agreement
   - Keep default installation location
   - Click "Install"
   - Click "Finish" when done

6. **Verify installation:**
   - Press `Windows + R` on keyboard
   - Type `cmd` and press Enter
   - In the black window, type: `node --version`
   - You should see: `v18.17.0` (or similar)
   - Type: `npm --version`
   - You should see: `9.6.7` (or similar)

✅ **Node.js is now installed!**

---

### Step 2: Install VS Code

1. **Go to:** https://code.visualstudio.com/

2. **Click** "Download for Windows" (or Mac/Linux)

3. **Run the installer:**
   - Accept the agreement
   - Check "Add to PATH" option
   - Click Install
   - Click Finish

✅ **VS Code is now installed!**

---

## PART 2: Set Up the Project

### Step 3: Create Project Folder

1. **Open File Explorer** (Windows + E)

2. **Go to** a location like `C:\` or `D:\`

3. **Create a new folder:**
   - Right-click → New → Folder
   - Name it: `question-paper-generator`

---

### Step 4: Copy Project Files

**You need these files in your project folder:**

```
question-paper-generator/
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── postcss.config.js
│
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    │
    ├── components/
    │   ├── FillBlanksPanel.tsx
    │   ├── LongQuestionsPanel.tsx
    │   ├── MCQPanel.tsx
    │   ├── PreviewPanel.tsx
    │   ├── SavedPapersPanel.tsx
    │   ├── SettingsPanel.tsx
    │   ├── ShortQuestionsPanel.tsx
    │   ├── Sidebar.tsx
    │   └── TrueFalsePanel.tsx
    │
    ├── context/
    │   └── PaperContext.tsx
    │
    └── types/
        └── index.ts
```

**Copy all these files** to your `question-paper-generator` folder.

---

### Step 5: Open Project in VS Code

1. **Open VS Code**

2. **Click:** File → Open Folder

3. **Navigate to:** `C:\question-paper-generator` (or wherever you created it)

4. **Click:** Select Folder

5. **You should see** all your files in the left sidebar (Explorer)

---

## PART 3: Install & Run

### Step 6: Open Terminal in VS Code

1. **In VS Code menu:** Terminal → New Terminal
   - OR press: `` Ctrl + ` `` (the key below Esc)

2. **A terminal panel** opens at the bottom

---

### Step 7: Install Project Dependencies

1. **In the terminal, type:**
   ```
   npm install
   ```

2. **Press Enter**

3. **Wait** for 1-3 minutes (downloading packages)

4. **You'll see:**
   ```
   added 250 packages in 45s
   ```

✅ **Dependencies installed!**

---

### Step 8: Start the Application

1. **In the terminal, type:**
   ```
   npm run dev
   ```

2. **Press Enter**

3. **You'll see:**
   ```
   VITE v5.0.0  ready in 500 ms

   ➜  Local:   http://localhost:5173/
   ```

4. **Hold Ctrl and click** on `http://localhost:5173/`
   - OR open browser and go to: `http://localhost:5173/`

🎉 **The app is running!**

---

## PART 4: Using the Application

### How to Create a Question Paper

#### 1️⃣ Settings Tab (First Step)
- Click "Settings" in sidebar
- Enter School Name
- Upload School Logo (click the upload area)
- Enter Class, Subject, Exam Type
- Set Time and Total Marks
- Enter Date and Teacher Name
- Choose Language: English or Urdu (اردو)

#### 2️⃣ Add MCQs
- Click "MCQs" in sidebar
- Click "Add New MCQ" button
- Fill in:
  - Question text
  - Option A, B, C, D
  - Marks
- Click "Add MCQ"
- Repeat for more questions

#### 3️⃣ Add Fill in the Blanks
- Click "Fill in Blanks" in sidebar
- Click "Add New Question"
- Write question with blanks like: `The sun rises in the ______`
- Set marks
- Click "Add Question"

#### 4️⃣ Add True/False
- Click "True/False" in sidebar
- Click "Add New Statement"
- Write a statement
- Set marks
- Click "Add Statement"

#### 5️⃣ Add Short Questions
- Click "Short Questions" in sidebar
- Click "Add New Question"
- Write question
- Set marks
- Click "Add Question"

#### 6️⃣ Add Long Questions
- Click "Long Questions" in sidebar
- Click "Add New Question"
- Write question
- Set marks
- Click "Add Question"

#### 7️⃣ Preview & Download
- Click "Preview" in sidebar
- See your formatted paper
- Click "Download PDF" to save as PDF
- Click "Print" to print directly

#### 8️⃣ Save Your Paper
- Click "Save Paper" button (top right)
- Enter a name like "Class 10 Math Midterm"
- Click "Save"
- Access saved papers from "Saved Papers" in sidebar

---

## 🔄 Daily Usage

Once set up, you only need to:

1. **Open VS Code**
2. **Open Terminal** (Ctrl + `)
3. **Type:** `npm run dev`
4. **Open:** http://localhost:5173/
5. **Create your papers!**

---

## 🛑 Stopping the Application

1. **Go to VS Code terminal**
2. **Press:** `Ctrl + C`
3. **Type:** `Y` and press Enter

---

## ❓ Common Questions

### Q: Do I need internet to use this?
**A:** Only for first-time setup and Urdu fonts. After that, it works offline.

### Q: Where are my saved papers stored?
**A:** In your browser's local storage. They stay even after closing the browser.

### Q: Can I use this on another computer?
**A:** Yes! Copy the project folder and follow steps 5-8.

### Q: How do I update school details?
**A:** Go to Settings tab and change any field. It updates automatically.

---

## 🆘 Need Help?

### Terminal shows error?
1. Close terminal
2. Open new terminal
3. Run `npm install` again
4. Then run `npm run dev`

### Page not loading?
1. Check terminal for errors (red text)
2. Try refreshing browser (Ctrl + F5)
3. Try different browser (Chrome recommended)

### Lost your work?
Check "Saved Papers" tab - your auto-saved work might be there!

---

## 📝 Summary Commands

```bash
# Install (only once)
npm install

# Run the app
npm run dev

# Stop the app
Ctrl + C

# Build for production
npm run build
```

---

**Happy Teaching! 👨‍🏫📝**
