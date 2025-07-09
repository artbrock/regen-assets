# Regenerative Assets Website

A modern, responsive website for Regenerative Assets - a software company building tools for regenerative land management, regenerative economics, and positive social impact.

## Features

- **Single Page Application**: Clean, modern design with smooth scrolling navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Tailwind CSS**: Modern utility-first CSS framework
- **11ty Static Site Generator**: Fast, flexible static site generation
- **Privacy-First**: No tracking, cookies, or user data collection
- **Cloudflare Pages Ready**: Optimized for deployment on Cloudflare Pages
- **R2 Storage Compatible**: Ready for Cloudflare R2 object storage integration

## Sections

1. **Overview**: Company mission and Holochain expertise
2. **Current Projects**: 
   - Real Assets Registry
   - Real Clear
   - Offline Remittance Transfers
3. **Team**: Arthur Brock, David Meister, Joel Ulahanna, Norbu Snow
4. **Contact**: Google Forms integration
5. **Privacy Policy**: Clear statement about data protection

## Tech Stack

- **Static Site Generator**: 11ty (Eleventy)
- **CSS Framework**: Tailwind CSS
- **Build Tool**: Node.js
- **Deployment**: Cloudflare Pages
- **Storage**: Cloudflare R2 (optional)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:artbrock/regen-assets.git
cd regen-assets
```

2. Install dependencies:
```bash
npm install
```

3. Build the site:
```bash
npm run build
```

4. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## Development

### Available Scripts

- `npm run build` - Build the complete site with Tailwind CSS
- `npm run build:css` - Build only Tailwind CSS
- `npm run build:site` - Build only the 11ty site
- `npm run dev` - Start development server with live reload
- `npm run watch` - Watch for changes and rebuild
- `npm run debug` - Run with debug logging

### Project Structure

```
regen-assets/
├── src/
│   ├── _includes/          # Reusable components
│   │   ├── header.njk     # Navigation header
│   │   └── footer.njk     # Footer with privacy policy
│   ├── _layouts/          # Page layouts
│   │   └── base.njk       # Base layout template
│   ├── assets/            # Static assets
│   │   └── images/        # Images and icons
│   ├── css/               # Stylesheets
│   │   └── styles.css     # Tailwind CSS source
│   ├── js/                # JavaScript files
│   └── index.njk          # Main page content
├── _site/                 # Built site (generated)
├── .eleventy.js           # 11ty configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── wrangler.toml          # Cloudflare Pages configuration
├── build.js               # Build script
└── package.json           # Dependencies and scripts
```

### Customization

#### Colors
The site uses a custom color palette defined in `tailwind.config.js`:
- `regen-green`: Primary brand colors
- `earth-brown`: Secondary accent colors  
- `sky-blue`: Tertiary accent colors

#### Content
- Update team information in `src/index.njk`
- Modify project descriptions in the projects section
- Edit company overview in the overview section

#### Contact Form
The contact form is configured to use Formspree. Update the form action URL in `src/index.njk`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `_site`
   - **Node.js version**: 18

3. Deploy automatically on git push to main branch

### Manual Deployment

1. Build the site:
```bash
npm run build
```

2. Upload the `_site` directory to your web server

### Environment Variables

For production deployment, consider setting:
- `NODE_VERSION`: 18 (for Cloudflare Pages)

## Privacy & Security

This website is designed with privacy in mind:
- No tracking cookies
- No analytics
- No user data collection
- No third-party scripts (except Google Fonts)
- Clear privacy policy in footer

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or support, please contact the Regenerative Assets team through the contact form on the website.

---

Built with ❤️ for regenerative technology and positive social impact.
