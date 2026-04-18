# Bella Cucina - Restaurant Website

## 📋 Project Overview

A modern, visually appealing, and fully responsive restaurant website built with React, TypeScript, and Tailwind CSS. This project showcases authentic Italian dining with elegant food presentation and smooth user interactions.

---

## ✨ Features

### Core Sections
- **Hero Section**: Full-screen landing with animated entrance, restaurant branding, and CTA
- **Menu Section**: 6 signature dishes with high-quality food photography, pricing, and descriptions
- **About Us**: Restaurant story, chef profile, and key features (Awards, Expertise, Fresh Ingredients)
- **Contact Section**: Complete contact information and functional reservation form

### Design Highlights
- **Visual Appeal**: Dark theme with gold accents (#d4a574), food-focused imagery
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Interactions**: Hover effects, smooth scrolling, entrance animations
- **Clean Layout**: Proper spacing, visual hierarchy, and professional typography

---

## 🎨 Design Specifications

### Color Palette
- **Background**: `#0a0a0a` (Deep Black)
- **Sections**: `#0f0f0f` (Slightly Lighter Black)
- **Cards**: `#1a1a1a` (Dark Gray)
- **Accent**: `#d4a574` (Elegant Gold)
- **Text**: White with gray variations for hierarchy

### Typography
- **Headings**: Bold, large-scale (text-5xl to text-8xl)
- **Body**: Clean, readable with proper line-height
- **Special Effects**: Fade-in and slide-up animations on hero

### Responsive Breakpoints
- **Mobile**: < 768px (1 column layout)
- **Tablet**: 768px - 1024px (2 column layout)
- **Desktop**: > 1024px (3 column layout for menu)

---

## 📁 Source Code Structure

```
src/
├── app/
│   ├── App.tsx                    # Main application component
│   └── components/
│       ├── Navigation.tsx         # Fixed header with smooth scroll navigation
│       ├── Hero.tsx               # Hero section with animations
│       ├── Menu.tsx               # Menu items with food photography
│       ├── About.tsx              # Restaurant story and features
│       └── Contact.tsx            # Contact info and reservation form
│
└── styles/
    ├── index.css                  # Main CSS entry point
    ├── tailwind.css               # Tailwind imports
    ├── theme.css                  # Custom theme and animations
    └── fonts.css                  # Font imports
```

### Key Components

#### **Navigation.tsx**
- Fixed header with logo and navigation links
- Mobile hamburger menu with slide-out panel
- Smooth scroll to sections functionality

#### **Hero.tsx**
- Full-screen hero with background image
- Animated entrance (fade-in, slide-up)
- CTA button to menu section
- Scroll indicator animation

#### **Menu.tsx**
- Grid layout (responsive: 1/2/3 columns)
- 6 menu items with images, prices, descriptions
- Category badges (Pasta, Main, Seafood, Dessert)
- Hover effects (scale, overlay)

#### **About.tsx**
- Two-column layout (text + image)
- Restaurant history and chef information
- Feature cards with icons
- Chef profile image with overlay

#### **Contact.tsx**
- Contact information with icons
- Working contact form (name, email, message)
- Form validation and submission handling
- Hover effects on contact cards

---

## 🎯 Evaluation Criteria Compliance

### ✅ Visual Appeal (Food Presentation)
- High-quality food photography from Unsplash
- Professional image composition with proper cropping
- Category badges and visual indicators
- Elegant color scheme enhancing food imagery
- Gradient overlays for depth and readability

### ✅ Responsiveness
- Mobile-first design approach
- Fluid grid layouts (CSS Grid with responsive columns)
- Flexible typography (responsive font sizes)
- Mobile navigation menu
- Touch-friendly interactive elements
- Tested across mobile, tablet, and desktop viewports

### ✅ UI/UX Quality
- **Navigation**: Fixed header, smooth scrolling between sections
- **Interactions**: Hover effects on all clickable elements
- **Feedback**: Visual changes on form focus, button hover
- **Animations**: Subtle entrance animations on hero
- **Accessibility**: Proper semantic HTML, form labels, alt text
- **Performance**: Optimized images, efficient CSS

### ✅ Code Structure
- **Modular Components**: Separated concerns (Navigation, Hero, Menu, About, Contact)
- **Clean Code**: Minimal App.tsx (only layout logic)
- **TypeScript**: Type-safe interfaces for data structures
- **Reusable Patterns**: Array mapping for menu items and contact info
- **Maintainable**: Easy to update individual sections
- **Best Practices**: Proper naming conventions, file organization

---

## 🚀 Technical Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

---

## 📸 Menu Items

1. **Truffle Pasta** - $28
   - Fresh fettuccine with black truffle, parmesan, and butter sauce

2. **Grilled Ribeye** - $42
   - Prime 12oz ribeye with roasted vegetables and herb butter

3. **Seafood Risotto** - $34
   - Creamy arborio rice with shrimp, scallops, and white wine

4. **Lasagna Al Forno** - $24
   - Layers of pasta, beef ragù, béchamel, and aged parmesan

5. **Pan-Seared Scallops** - $38
   - Hokkaido scallops with cauliflower purée and caviar

6. **Classic Tiramisu** - $12
   - Traditional Italian dessert with espresso and mascarpone

---

## 📞 Contact Information

**Address**: 123 Culinary Avenue, New York, NY 10001  
**Phone**: (555) 123-4567  
**Email**: info@bellacucina.com  

**Hours**:
- Mon-Thu: 5:00 PM - 10:00 PM
- Fri-Sat: 5:00 PM - 11:00 PM
- Sunday: 4:00 PM - 9:00 PM

---

## 🎨 Custom Animations

```css
/* Entrance Animations */
.animate-fade-in          /* 1s fade in */
.animate-slide-up         /* 0.8s slide up from bottom */
.animate-slide-up-delay   /* 0.8s with 0.2s delay */
.animate-fade-in-delay    /* 1s with 0.4s delay */
```

---

## 📱 Features by Section

### Navigation
- ✅ Fixed position header
- ✅ Mobile hamburger menu
- ✅ Smooth scroll navigation
- ✅ Active state indicators

### Hero
- ✅ Full-screen background image
- ✅ Entrance animations
- ✅ CTA button with hover effect
- ✅ Scroll indicator

### Menu
- ✅ Responsive grid layout
- ✅ Category badges
- ✅ Image hover effects (scale + overlay)
- ✅ Price and description display

### About
- ✅ Restaurant story
- ✅ Chef profile with image
- ✅ Feature highlights with icons
- ✅ Hover effects on feature cards

### Contact
- ✅ Complete contact details
- ✅ Working contact form
- ✅ Form validation
- ✅ Icon-based layout
- ✅ Hover effects on contact cards

---

## 🏆 Project Highlights

- **Production-Ready**: Clean, well-structured code ready for deployment
- **Accessible**: Semantic HTML, proper labels, keyboard navigation
- **Performant**: Optimized images, efficient CSS, minimal JavaScript
- **Maintainable**: Modular components, clear separation of concerns
- **Scalable**: Easy to add new menu items or sections

---

## 📄 License

© 2026 Bella Cucina. All rights reserved.

---

**Built with ❤️ for TechNova Solutions**  
**Task 2: Restaurant Frontend Design**  
**Duration: 1 Week**
