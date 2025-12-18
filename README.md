# 🚀 Spandan's Portfolio

A clean, modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Sticky Navigation** with active section highlighting using IntersectionObserver
- **Responsive Design** optimized for mobile and desktop
- **Smooth Scrolling** with accessibility support for reduced motion
- **Five Main Sections**:
  - 🏠 Home with animation placeholder
  - 💻 Skills grouped by technology stack
  - 📁 Projects across 5 key domains (FinTech, E-commerce, Healthcare, Data, Platform)
  - 🎓 Education
  - 📧 Contact with form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/spandan-builds.git

# Navigate to project directory
cd spandan-builds

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
spandan-builds/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles with smooth scrolling
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   └── components/
│       ├── Navbar.tsx       # Sticky navbar with active highlighting
│       ├── Section.tsx      # Reusable section wrapper
│       ├── Footer.tsx       # Footer component
│       └── sections/
│           ├── HomeSection.tsx
│           ├── SkillsSection.tsx
│           ├── ProjectsSection.tsx
│           ├── EducationSection.tsx
│           └── ContactSection.tsx
```

## 🎨 Customization

### Update Social Links

Edit `src/components/sections/ContactSection.tsx` to add your social media profiles:

```tsx
// Update these URLs with your profiles
href="https://linkedin.com/in/yourprofile"
href="https://github.com/yourusername"
href="https://instagram.com/yourusername"
href="https://twitter.com/yourusername"
```

### Update Email

Replace `youremail@example.com` in `ContactSection.tsx` with your actual email.

### Update Projects

Modify the projects array in `src/components/sections/ProjectsSection.tsx` to showcase your work.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/spandan-builds)

### Manual Deployment

```bash
npm run build
npm run start
```

## 🗺️ Roadmap

- [ ] Add Rive/Lottie animation to Home section
- [ ] Implement backend for contact form
- [ ] Add project detail pages/modals
- [ ] Connect GitHub repository links
- [ ] Add blog section
- [ ] Implement dark mode toggle

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to open an issue.

---

**Built with ❤️ using Next.js**
