# ⚡ Salik Suwal - Computer Engineering Portfolio

An interactive, high-tech cyber-themed portfolio web application built for **Salik Suwal** (Bachelor of Computer Engineering - BE Computer).

![Cyber Portfolio](https://img.shields.io/badge/Degree-BE%20Computer-00f0ff?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20Tailwind%20%7C%20JS%20%7C%20WebAudio-a855f7?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live%20Ready-10b981?style=for-the-badge)

---

## 🌟 Key Features

1. **Cyber-Futuristic Visual Canvas**:
   - Dynamic 2D/3D Particle Cosmos responding to cursor gravity and touch.
   - Matrix Digital Rain visualizer.
   - Ambient neon glow & glassmorphism UI.

2. **Interactive Cyber Terminal (CLI Drawer)**:
   - Functional Unix-like terminal emulator.
   - Commands: `help`, `about`, `skills`, `projects`, `roadmap`, `education`, `contact`, `theme <name>`, `matrix`, `sfx`, `sudo hire-me`, `clear`, `exit`.
   - Keyboard shortcut: **Ctrl + K** or **`** to toggle anytime.

3. **Synthesized Web Audio Engine**:
   - Zero external audio files required! Built with Web Audio API.
   - Custom synthesized sci-fi sound effects on hover, click, terminal execution, and laser pulses.
   - Toggle button to enable/mute sound effects.

4. **Multi-Theme Engine**:
   - ⚡ **Cyber Neon** (Cyan & Purple default)
   - 🌌 **Deep Space Cosmos** (Violet & Fuchsia)
   - 🟢 **Hacker Matrix** (Terminal Emerald Green)
   - 💎 **Obsidian Minimal** (Ice Blue & Slate)

5. **BE Computer Engineering Roadmap**:
   - Semester-by-semester 4-year engineering timeline with curriculum targets, milestones, and topics.

6. **Interactive Project Showcase & Lab**:
   - Filterable projects by category (Systems, Web, C++, IoT).
   - Rich architecture details modal.
   - Interactive Lab with particle attraction & digital rain.

7. **Contact & Social Hub**:
   - Instant copy-to-clipboard for email.
   - Interactive transmission form with validation and mail client support.

---

## 🚀 How to Run Locally

Because this portfolio uses clean, zero-dependency static web standards, you can open and run it instantly:

### Option 1: Direct Browser Launch
Simply double click `index.html` in your file explorer to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: VS Code Live Server
1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension if not already installed.
3. Right click `index.html` and select **Open with Live Server**.

### Option 3: Python Local HTTP Server
Run in PowerShell:
```powershell
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

---

## 🛠️ How to Customize Your Info

All personal information, skills, roadmap goals, and projects are centralized in [`data.js`](file:///c:/Users/del/OneDrive/Desktop/portfolio/data.js):

- **Personal Details**: Update `name`, `email`, `github`, `linkedin`, `twitter`, `discord` in `PORTFOLIO_DATA.personal`.
- **Skills**: Add or adjust proficiency percentages in `PORTFOLIO_DATA.skills`.
- **Projects**: Add your own GitHub repositories and screenshots in `PORTFOLIO_DATA.projects`.
- **Roadmap**: Customize your university subjects in `PORTFOLIO_DATA.roadmap`.

---

## 🌐 Free 1-Click Deployment

### Deploy to GitHub Pages (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on GitHub named `salik-portfolio` or `<your-username>.github.io`.
3. Push your repository:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages**, set **Source** to `Deploy from a branch (main / root)` and click **Save**.
5. Your portfolio is live globally!

### Deploy to Vercel or Netlify
- Drag and drop the `portfolio` folder into [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) for instant SSL-secured hosting.

---

Designed with ⚡ for **Salik Suwal** • BE Computer Engineering.
