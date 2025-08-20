# Jacksonville House Cleaning Service Website

A professional, responsive website for a residential and commercial cleaning company based in Jacksonville, Florida. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏠 About

This website showcases the cleaning services offered by Jacksonville House Cleaning Service, featuring:

- **Professional Design**: Clean, modern interface that reflects the company's commitment to quality
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Comprehensive Services**: Detailed information about all cleaning offerings
- **Customer Testimonials**: Social proof from satisfied customers
- **Easy Booking**: Contact form for service inquiries and bookings
- **SEO Optimized**: Built with search engine optimization in mind

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #2daee1 (Sky blue for trust and cleanliness)
- **White**: #ffffff (Crisp white for purity)
- **Accent Aqua**: #6dd6c7 (Light teal for freshness)
- **Accent Coral**: #f77f00 (Warm coral for call-to-action)
- **Accent Green**: #7ac74f (Green for eco-friendly services)
- **Charcoal**: #333333 (Dark gray for readable text)

### Typography & Layout
- Clean, professional typography using Inter font family
- Generous white space for easy reading
- Subtle animations and hover effects
- Consistent spacing and alignment

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Ready for GitHub Pages or Vercel

## 📱 Pages & Components

### Core Pages
- **Home** (`/`) - Hero section, services overview, trust indicators
- **Services** (`/services`) - Detailed service descriptions and benefits
- **About** (`/about`) - Company story, team, values, certifications
- **Pricing** (`/pricing`) - Transparent pricing packages and guarantees
- **Gallery** (`/gallery`) - Before & after cleaning photos
- **Testimonials** (`/testimonials`) - Customer reviews and ratings
- **Contact** (`/contact`) - Booking form and contact information

### Reusable Components
- `Navbar` - Responsive navigation with mobile menu
- `Hero` - Compelling hero sections with CTAs
- `ServiceCard` - Service information display
- `Footer` - Comprehensive footer with links and newsletter
- `ServicesSection` - Services overview grid
- Additional page-specific components

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jacksonville_house_cleaning_service
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/            # About page
│   ├── contact/          # Contact & booking page
│   ├── gallery/          # Gallery page
│   ├── pricing/          # Pricing page
│   ├── services/         # Services page
│   ├── testimonials/     # Testimonials page
│   ├── globals.css       # Global styles and custom CSS variables
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   └── page.tsx          # Homepage
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section component
│   ├── ServiceCard.tsx   # Service card component
│   ├── ServicesSection.tsx # Services overview component
│   └── Footer.tsx        # Footer component
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

### Performance
- Optimized images and assets
- Lazy loading for gallery items
- Efficient component rendering
- Fast page load times

### SEO
- Meta tags and descriptions
- Open Graph support
- Structured data ready
- Clean URL structure

## 🔧 Customization

### Colors
Update the color palette in `src/app/globals.css`:

```css
:root {
  --primary-blue: #2daee1;
  --accent-aqua: #6dd6c7;
  --accent-coral: #f77f00;
  --accent-green: #7ac74f;
  --text-charcoal: #333333;
}
```

### Content
- Update company information in components
- Modify service descriptions and pricing
- Replace placeholder images with real photos
- Update contact information and service areas

### Styling
- Modify Tailwind classes for visual changes
- Update component layouts and spacing
- Customize animations and transitions

## 📱 Mobile Optimization

- Touch-friendly buttons and forms
- Optimized navigation for mobile devices
- Responsive image galleries
- Mobile-first form design

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub repository
3. Configure GitHub Pages in repository settings
4. Set source to GitHub Actions

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push
3. Custom domain configuration available

### Other Platforms
- Netlify
- AWS Amplify
- Any static hosting service

## 📞 Support

For questions about the website or cleaning services:
- **Phone**: (904) 555-0123
- **Email**: info@jaxcleaning.com
- **Hours**: Mon-Fri 8AM-6PM, Sat 9AM-4PM

## 📄 License

This project is proprietary software for Jacksonville House Cleaning Service.

## 🤝 Contributing

This is a private business website. For business inquiries, please use the contact information above.

---

**Jacksonville House Cleaning Service** - Professional cleaning services for homes and offices in Jacksonville, FL.
