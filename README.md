# Nexcent - React TypeScript Application

A modern, responsive community portal built with React and TypeScript, converted from the original HTML/CSS implementation.

## 🚀 Features

- **Modern React Architecture**: Component-based structure with TypeScript for type safety
- **Responsive Design**: Mobile-first approach with fully responsive layouts
- **Custom Email Input**: Beautifully styled email subscription form matching Figma design
- **Interactive Navigation**: Mobile hamburger menu with smooth animations
- **Reusable Components**: Modular component structure for easy maintenance

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\ROG STRIX\OneDrive\ドキュメント\GitHub\codebreakers-sample-web"
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Running the Application

### Development Mode

Start the development server with hot reload:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Production Build

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
codebreakers-sample-web/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── OurClients.tsx
│   │   ├── ManageCommunity.tsx
│   │   ├── Experience.tsx
│   │   ├── HelpingBusiness.tsx
│   │   ├── Design.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Marketing.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── style.css
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Components

- **Header**: Fixed navigation with responsive hamburger menu
- **HeroBanner**: Hero section with call-to-action
- **OurClients**: Client logos showcase
- **ManageCommunity**: Feature cards section
- **Experience**: About section with image
- **HelpingBusiness**: Statistics display
- **Design**: Content section with image
- **Testimonial**: Customer testimonials
- **Marketing**: Blog cards section
- **Footer**: Footer with newsletter subscription and links

## 🎭 Key Features

### Responsive Email Input
The footer includes a beautifully styled email input that matches the Figma design:
- Dark slate background (#5B6B79)
- Rounded corners (8px)
- White text with transparent background
- Integrated send icon
- Smooth hover animations

### Mobile Navigation
- Hamburger menu for mobile devices
- Smooth animations
- Responsive breakpoints at 991px and 575px

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with CSS variables
- **Inter Font**: Google Fonts integration

## 📱 Responsive Breakpoints

- Desktop: > 991px
- Tablet: 576px - 991px
- Mobile: < 575px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Copyright © 2020 Nexcent ltd. All rights reserved

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@nexcent.com or visit our website.

---

Made with ❤️ using React + TypeScript + Vite
