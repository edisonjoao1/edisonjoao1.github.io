# Foxie - Social Activities Network

**Live Site**: [foxie.cool](https://foxie.cool)
**GitHub**: [github.com/edisonjoao1/edisonjoao1.github.io](https://github.com/edisonjoao1/edisonjoao1.github.io)

## Overview

Foxie is a social network that connects you to the world around you through activities, events, and experiences with people nearby. Create activities, discover what others are doing, and make new friends through shared interests.

## Product Metrics

- **500K+ Users**: Active user base worldwide
- **4.9 Rating**: Average App Store rating
- **1M+ Activities**: Created and shared on the platform
- **iOS**: Available on the App Store

## Website Redesign (January 2026)

### What We Did

**Complete Modernization**: Rebuilt the Foxie marketing website from a static 2019 HTML/CSS site to a modern React application with professional animations and design.

#### Technical Transformation

**Before:**
- Static HTML/CSS (2019 era)
- Basic styling with inline styles
- No animations or interactivity
- Dated visual design
- Minimal responsiveness

**After:**
- **Framework**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth scroll-based animations
- **Build**: Optimized production build (84KB gzipped JS, 3.4KB CSS)
- **Deployment**: GitHub Pages with automated builds

#### Design Updates

1. **Hero Section**
   - Modern gradient backgrounds (emerald → cyan → blue)
   - Animated phone mockup showcasing activities feed
   - Stats section displaying 500K users, 4.9 rating, 1M+ activities
   - Clean typography using Inter font
   - App Store download button with hover effects

2. **Features Section**
   - **"Add what you want to do"**: Video walkthrough in phone mockup frame
   - **"See all the details"**: Side-by-side activity screenshots
   - **"Discover new friends"**: Grid layout of discover and world chat screens
   - Scroll-based animations revealing content progressively

3. **Content Preservation**
   - Kept all original screenshots and images
   - Maintained video demo of activity creation flow
   - Preserved all messaging and copy
   - Retained brand colors (pink: #ff145f, green: #71ffae, blue: #3c6cde)

4. **Footer Updates**
   - Removed outdated social media links
   - Added "Made by Edison" link to personal portfolio
   - Maintained App Store and contact links
   - Clean, minimal design

#### Visual Improvements

- **Gradient Backgrounds**: Soft emerald/cyan/blue gradients throughout
- **Phone Mockups**: Removed white backgrounds, showing clean screenshots
- **Animations**: Framer Motion for entrance and scroll animations
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Typography**: Professional Inter font family
- **Shadows & Depth**: Subtle shadows for visual hierarchy
- **Loading States**: Smooth transitions and progressive enhancement

#### Technical Features

```typescript
// Key Technologies
- React 18.3.1
- TypeScript 5.4.5
- Vite 5.2.11 (build tool)
- Tailwind CSS 3.4.3 (styling)
- Framer Motion 11.0.0 (animations)
- PostCSS + Autoprefixer
```

### Project Structure

```
foxie-website/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # React entry point
│   └── index.css         # Tailwind base styles
├── dist/                 # Production build
│   ├── index.html
│   └── assets/           # Bundled CSS/JS
├── index.html            # HTML template (deployed to root)
├── assets/               # Copied from dist for GitHub Pages
├── index-old.html        # Original 2019 website (backup)
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind customization
└── tsconfig.json         # TypeScript configuration
```

### Deployment

The site is deployed via GitHub Pages:

1. **Build Process**: `npm run build` creates optimized production bundle
2. **Deployment**: Files copied to root directory for GitHub Pages
3. **Assets**: JavaScript and CSS bundled and minified
4. **GitHub Pages**: Serves from master branch root directory

```bash
# Build for production
npm run build

# Deploy (automated)
git push origin master
```

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server runs at `http://localhost:5173/` with hot module reloading.

## Key Features

### User Features
1. **Create Activities**: Add what you want to do with time and place
2. **Activity Details**: See who's going, comments, time, and location
3. **Discover**: Browse activities from people nearby
4. **World Chat**: Connect with the global Foxie community
5. **Direct Messaging**: Chat with activity participants

### Website Features
- Smooth scroll animations
- Video demonstration of app workflow
- Stats showcase
- Responsive design (mobile, tablet, desktop)
- App Store integration
- Contact form

## Brand Guidelines

### Colors
- **Primary Pink**: #ff145f (Foxie brand color)
- **Secondary Green**: #71ffae (activity highlights)
- **Accent Blue**: #3c6cde (interactive elements)
- **Cyan**: #00ffff (gradient accents)

### Typography
- **Font Family**: Inter (weights: 400, 500, 600, 700, 800, 900)
- **Display**: Bold, black weights for headings
- **Body**: Regular and medium weights for content

### Tone & Voice
- Friendly and approachable
- Action-oriented ("Add what you want to do")
- Community-focused ("Make new friends")
- Simple and clear messaging

## Performance

- **First Load JS**: 264KB (84KB gzipped)
- **CSS**: 14KB (3.4KB gzipped)
- **Images**: Optimized external hosting (imgbb.com)
- **Animations**: 60fps with Framer Motion
- **Build Time**: ~700ms

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: 640px, 768px, 1024px, 1280px

## Future Enhancements

1. **Android Launch**: Add Android download link when available
2. **Testimonials**: User stories and success cases
3. **App Screenshots Carousel**: Interactive app tour
4. **Press Kit**: Media resources and brand assets
5. **Blog**: Activity ideas and community stories
6. **Metrics Dashboard**: Live user/activity counts
7. **Video Content**: User-generated activity highlights

## Links

- **App Store**: [Download Foxie](https://apps.apple.com/us/app/foxie/id1369279200)
- **Email**: info@foxie.cool
- **Android Waitlist**: [Sign up for updates](http://eepurl.com/dDspiH)
- **Creator**: [Edison Espinosa](https://edisonjoao.com)

## Changelog

### v2.0 - January 22, 2026
- Complete redesign with React + TypeScript
- Modern gradient backgrounds and animations
- Stats section (500K users, 4.9 rating, 1M+ activities)
- Video walkthrough in phone mockup
- Clean footer with personal website link
- Responsive design improvements
- Production build optimization

### v1.0 - 2019
- Original static HTML/CSS website
- Basic layout and styling
- Video demo integration
- App Store download links

---

**Last Updated**: January 22, 2026
**Version**: 2.0
**Status**: Live in Production
**Tech Stack**: React + TypeScript + Vite + Tailwind CSS
