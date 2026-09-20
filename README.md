# Hossam Eldin Hosny Shehata - Personal Cybersecurity Portfolio

A modern, professional, and responsive personal portfolio website designed specifically for **Hossam Eldin Hosny Shehata**, a first-year **Cybersecurity** student at **Assiut University** (Faculty of Computers and Information), expected graduation **2029**.

---

## 🛡️ Project Overview

This portfolio communicates an authentic, credible, and technically grounded presentation of a dedicated first-year undergraduate student. It adheres strictly to the rule of **zero invented claims**: all academic and training details reflect real accomplishments, while future repositories and contacts are clearly marked with placeholders.

### Key Sections Included
1. **Hero Section**: Cyber-inspired headline, academic tags, CTA buttons (`View My Projects` & `Contact Me`), and an interactive terminal & dynamic network particle mesh.
2. **About Me**: Authentic narrative highlighting foundational studies in programming, networking, Linux, and problem solving.
3. **Education**: Assiut University, Faculty of Computers and Information, Cybersecurity specialization, Class of 2029.
4. **Technical Skills**: Filterable categories for Programming (C, C++, Java, Python), Web (HTML, CSS), Cybersecurity (Fundamentals, Basic Attacks, Kali Linux, Networking), and Tools (VS Code, Code::Blocks, Flowgorithm, MS Word, MS Excel).
5. **Skills Progress**: Transparent progress cards indicating current learning focus areas without inflating beginner skills to senior claims.
6. **Certificates & Training**: Showcasing verified credentials (C++ Level 1 Certificate, English Training, Soft Skills Training, Kali Linux / Cybersecurity Training).
7. **Projects Section**: Professionally formatted student project placeholders with tech stacks, developer roles, and links ready to be updated upon repository publishing.
8. **Career Goals**: 4-phase structured roadmap from first-year fundamentals to graduation (2029) and professional cybersecurity practice.
9. **Contact Section**: One-click copy buttons for contact placeholders (Email, Phone, LinkedIn, GitHub, Location) plus an interactive inquiry form.
10. **Footer**: Navigation links, university attribution, and back-to-top button.

---

## 📁 File Structure

```
D:\codeing\portfolio\
├── index.html        # Semantic HTML5 with comprehensive SEO & Open Graph meta tags
├── styles.css        # Modern cybersecurity-inspired dark theme, responsive design, glassmorphism
├── script.js         # Interactive network canvas, terminal simulator, filters, copy-to-clipboard
└── README.md         # Project documentation & hosting guide
```

---

## 🚀 How to Run Locally

You do not need to install any frameworks, dependencies, or build tools.

### Option 1: Direct Browser Launch
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Firefox, or any modern web browser.

### Option 2: Local HTTP Server (Python)
If you have Python installed, open PowerShell or Command Prompt in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## ✏️ How to Update Placeholders with Your Real Information

When you are ready to replace the placeholders with your actual personal links and project repositories:

### 1. Contact Information
In `index.html`, search for `email.placeholder@example.com` and update:
- **Email**: Replace with your real university or personal email.
- **Phone**: Replace `+20 1XX XXX XXXX (Placeholder)` with your phone number.
- **LinkedIn**: Replace `linkedin.com/in/placeholder` and `data-copy="https://linkedin.com/in/placeholder"` with your LinkedIn URL.
- **GitHub**: Replace `github.com/placeholder` and `data-copy="https://github.com/placeholder"` with your GitHub profile URL.
- In `script.js`, update the `contact` command dictionary in `commands` object if you want the interactive terminal to output your real info.

### 2. Project Repositories
In `index.html` under `<section id="projects">`, replace:
- `https://github.com/username/cpp-problem-solving-labs` with your actual repo link.
- `https://demo.example.com/cpp-labs` with your live demo or screenshots link.

---

## 🌐 Free Deployment Options

### Deploy to GitHub Pages (Recommended)
1. Create a free GitHub repository (e.g. `cybersecurity-portfolio` or `username.github.io`).
2. Push `index.html`, `styles.css`, and `script.js` to the `main` branch.
3. In your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder, then click **Save**.
4. Your website will be live at `https://<username>.github.io/<repository-name>/` within minutes!

---

## 🛡️ Design Specifications & Compliance
- **Responsive**: Fully tested across mobile (< 480px), tablet (< 768px), laptop, and 4K desktop screens.
- **Performance**: Zero external render-blocking scripts; native SVG icons and lightweight canvas animation.
- **SEO & Social**: Includes Open Graph cards for preview snippets when shared on LinkedIn, Twitter, or WhatsApp.
