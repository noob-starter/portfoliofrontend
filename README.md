# Personal Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing professional projects, technical expertise, and creative solutions.

![Portfolio Banner](./src/assets/banner.png)

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Fully optimized for all device sizes
- **Progressive Web App (PWA)**: Installable on mobile and desktop devices
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **SEO Friendly**: Proper meta tags, sitemap, and robots.txt
- **Interactive Animations**: Using Framer Motion and GSAP
- **Dynamic Content**: Fetches data from backend API
- **Contact Form**: Inquiry submission functionality
- **Route Protection**: Security-focused routing with RouteGuard

## 🚀 Tech Stack

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **Routing**: React Router DOM 7.9.4
- **Animations**: 
  - Framer Motion 12.23.24
  - GSAP 3.13.0
- **HTTP Client**: Axios 1.13.2
- **Linting**: ESLint 9.36.0

## 📋 Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
```bash
# Configure API endpoints in src/config/api.js
```

## 🎯 Available Scripts

- **Development Server**:
  ```bash
  npm run dev
  ```
  Starts the development server at `http://localhost:5173`

- **Build for Production**:
  ```bash
  npm run build
  ```
  Creates an optimized production build in the `dist` folder

- **Production Build with Environment**:
  ```bash
  npm run build:prod
  ```
  Builds with production environment variables

- **Preview Production Build**:
  ```bash
  npm run preview
  ```
  or
  ```bash
  npm run serve
  ```
  Serves the production build locally on port 4173

- **Lint Code**:
  ```bash
  npm run lint
  ```
  Checks code for linting errors

- **Type Check**:
  ```bash
  npm run type-check
  ```
  Runs TypeScript type checking without emitting files

- **Clean Build Cache**:
  ```bash
  npm run clean
  ```
  Removes dist and Vite cache folders

## 📁 Project Structure

```
portfolio/
├── public/                   # Static assets
│   ├── fonts/               # Custom fonts
│   ├── icons/               # PWA icons (various sizes)
│   ├── browserconfig.xml    # Microsoft browser config
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt          # Search engine instructions
│   └── sitemap.xml         # Site structure for SEO
├── src/
│   ├── assets/             # Images, icons, and other media
│   │   ├── icons/          # UI icons
│   │   └── resumes/        # Resume PDFs
│   ├── components/         # Reusable React components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── HorizontalScroll.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   └── RouteGuard.jsx
│   ├── config/             # Configuration files
│   │   └── api.js          # API endpoint configuration
│   ├── fetches/            # API fetch functions
│   │   ├── fetchAchievements.js
│   │   ├── fetchAddresses.js
│   │   ├── fetchContacts.js
│   │   ├── fetchEducation.js
│   │   ├── fetchExperiences.js
│   │   ├── fetchFaqs.js
│   │   ├── fetchProfile.js
│   │   ├── fetchProjects.js
│   │   └── fetchTechnologies.js
│   ├── mappers/            # Data transformation utilities
│   ├── pages/              # Page components
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Inquire.jsx
│   │   ├── NotFound.jsx
│   │   └── Project.jsx
│   ├── posts/              # POST request handlers
│   │   └── submitInquiry.js
│   ├── styles/             # Additional CSS styles
│   ├── theme/              # Theme configuration
│   │   └── colors.js
│   ├── utils/              # Utility functions
│   │   ├── components/     # Utility components
│   │   ├── defaultData.js
│   │   ├── helper.js
│   │   ├── logger.js
│   │   └── security.js
│   ├── App.jsx             # Main App component
│   ├── App.css             # App-level styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── eslint.config.js        # ESLint configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config
└── package.json            # Project dependencies
```

## 🌐 Routes

- **`/`** - Home page with portfolio overview
- **`/project`** - Projects showcase
- **`/inquire`** - Inquiry/contact form
- **`/contact`** - Contact information
- **`*`** - 404 Not Found page

## 📱 Progressive Web App (PWA)

This portfolio is a fully functional PWA that can be installed on mobile and desktop devices. Features include:
- Offline support
- App-like experience
- Custom icons for various platforms
- Optimized for iOS and Android

## 🔒 Security Features

- Route protection with RouteGuard component
- Security utilities for safe data handling
- Input validation and sanitization
- Content Security Policy considerations

## 🎨 Customization

### Colors
Modify theme colors in:
- `src/theme/colors.js`
- `tailwind.config.js`

### Content
Update portfolio content by modifying:
- API endpoints in `src/config/api.js`
- Default data in `src/utils/defaultData.js`

## 📦 Deployment

This project is configured for deployment on Vercel. The `vercel.json` file contains necessary configuration.

To deploy:

1. Connect your repository to Vercel
2. Configure environment variables (if any)
3. Deploy automatically on push to main branch

**Live Demo**: [https://pyawalkar.vercel.app/](https://pyawalkar.vercel.app/)

## 🧪 Performance

- **Lighthouse Score**: Configured with `lighthouserc.js`
- **Code Splitting**: Lazy loading of route components
- **Image Optimization**: Optimized assets
- **Bundle Size**: Minimized with Vite

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use this as a template:

1. Fork the repository
2. Update personal information
3. Customize styles and content
4. Deploy to your own hosting

## 📄 License

See the [LICENSE](LICENSE) file for details.

## 👤 Author

**Pratik Yawalkar**

- Portfolio: [https://pyawalkar.vercel.app/](https://pyawalkar.vercel.app/)

## 🙏 Acknowledgments

- Icons and assets from various open-source resources
- Inspired by modern portfolio designs
- Built with love using React and Vite

---

**Note**: This project requires a backend API for full functionality. Ensure your API endpoints are properly configured in `src/config/api.js`.

