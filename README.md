# Portfolio Website - Chaitanya Gayakwad

A modern, interactive React portfolio website showcasing your skills, projects, and experience as a software developer. Built with React, Framer Motion, and modern web technologies.

## ✨ Features

- 🚀 **Modern React Architecture** - Built with React 18 and modern hooks
- 🎨 **Beautiful Animations** - Smooth animations using Framer Motion
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Interactive Elements** - Hover effects, scroll animations, and more
- 🎯 **Typewriter Effect** - Dynamic text animation in hero section
- 📊 **Animated Counters** - Statistics with count-up animations
- ✨ **Particle Background** - Interactive particle effects
- 🎭 **Scroll Animations** - Elements animate as you scroll
- 🔝 **Scroll to Top** - Smooth scroll button
- 💼 **Project Showcase** - Beautiful project cards with hover effects
- 🎓 **Timeline Experience** - Visual timeline for work experience

## 🛠️ Tech Stack

- **React 18** - UI library
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Typed** - Typewriter effect
- **React CountUp** - Animated counters
- **TSParticles** - Particle effects
- **CSS3** - Modern styling with CSS variables

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
Portfolio Site/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Education.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── ScrollToTop.js
│   │   └── ParticleBackground.js
│   ├── styles/             # Global styles
│   │   ├── index.css
│   │   └── App.css
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── images/                 # Your photos
│   ├── profile-hero.jpg
│   └── profile-about.jpg
├── package.json
└── README.md
```

## 🎨 Customization

### Update GitHub Project Links

In `src/components/Projects.js`, update the `github` property for each project:

```javascript
{
  title: 'TimelyPay – Loan & EMI Tracker App',
  github: 'https://github.com/learnboi/timelypay', // Update this
  // ...
}
```

### Add Your Photos

1. Save your photos in the `images` folder:
   - `images/profile-hero.jpg` - For hero section (square, 800x800px recommended)
   - `images/profile-about.jpg` - For about section (portrait, 600x800px recommended)

2. The images will automatically display. If images are missing, a placeholder will show.

### Change Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --secondary-color: #8b5cf6;  /* Secondary color */
  /* ... */
}
```

### Modify Animations

All animations use Framer Motion. Edit animation properties in component files:

```javascript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
3. Your site will be live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-site",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🎯 Key Features Explained

### Dark Mode
- Toggle button in navbar
- Preference saved in localStorage
- Smooth theme transitions

### Animations
- Scroll-triggered animations using Intersection Observer
- Hover effects on all interactive elements
- Smooth page transitions

### Particle Background
- Interactive particles that respond to mouse hover
- Subtle background effect
- Performance optimized

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Optimized layouts for all screen sizes

## 📝 Notes

- All contact information is pre-populated from your resume
- GitHub links need to be updated with actual repository URLs
- Images should be optimized before adding (use tools like TinyPNG)
- The site is SEO-friendly and accessible

## 🔧 Troubleshooting

**Port 3000 already in use?**
- Change port: `PORT=3001 npm start`

**Build errors?**
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Images not showing?**
- Check file names match exactly
- Ensure images are in the `images` folder
- Check browser console for errors

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ for Chaitanya Gayakwad and Haven Rawat**

*Showcasing modern React development skills to impress recruiters!*
