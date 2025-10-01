# Innoraze Website

A production-ready, modern, multi-page static website for Innoraze sports intelligence platform. Built with pure HTML, CSS, and vanilla JavaScript, optimized for GitHub Pages deployment.

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Upload all files** to your GitHub repository
3. **Enable GitHub Pages** in repository settings
4. **Configure custom domain** (innoraze.com)
5. **Update DNS settings** as described below

## 📁 Project Structure

```
/
├── index.html            # Home page
├── solutions.html        # Solutions overview
├── about.html           # Company information
├── contact.html         # Contact form
├── privacy.html         # Privacy policy
├── terms.html           # Terms of service
├── 404.html            # Custom 404 page
├── CNAME                # Custom domain configuration
├── .nojekyll            # GitHub Pages configuration
├── assets/
│   ├── style.css        # Custom CSS
│   ├── app.js           # JavaScript functionality
│   └── favicon.svg      # Site favicon
├── data/
│   └── scores.json      # Demo scores data
├── manifest.webmanifest # PWA configuration
├── robots.txt           # SEO configuration
├── sitemap.xml          # Site structure
└── README.md            # This file
```

## 🌐 GitHub Pages Deployment

### Step 1: Repository Setup
1. Create a new GitHub repository named `innoraze-website`
2. Upload all files from this project to the repository
3. Go to **Settings** → **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 2: Custom Domain Configuration
1. In the same **Pages** settings, scroll to **Custom domain**
2. Enter `innoraze.com`
3. Check **Enforce HTTPS**
4. The `CNAME` file is already included in the project

### Step 3: DNS Configuration
Configure your domain's DNS settings with these records:

#### A Records (IPv4)
```
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153
```

#### CNAME Record
```
www → yourusername.github.io
```

### Step 4: SSL Certificate
GitHub Pages automatically provides SSL certificates for custom domains. The certificate will be issued within 24 hours after DNS propagation.

## 🔧 Configuration

### Contact Form
The contact form uses Formspree for form handling:
- **Form endpoint**: `https://formspree.io/f/your-form-id` (update with your Formspree form ID)
- **Primary Email**: `contact@innoraze.com`
- **General Email**: `info@innoraze.com`

To update the form endpoint:
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Update the `action` attribute in `contact.html`

### Brand Colors
- **Primary Blue**: `#3B82F6`
- **Accent Emerald**: `#10B981`
- **Font**: Inter (Google Fonts)

### SEO Configuration
- **Meta tags**: Optimized for each page
- **Open Graph**: Social sharing support
- **Sitemap**: `sitemap.xml` included
- **Robots**: `robots.txt` configured

## 📱 Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation

### Performance
- Tailwind CSS via CDN
- Minimal custom CSS
- Optimized images and assets
- Lazy loading support

### Accessibility
- WCAG 2.1 compliant
- Keyboard navigation
- Screen reader friendly
- High contrast support

### SEO
- Semantic HTML structure
- Meta tags and Open Graph
- XML sitemap
- Robots.txt configuration

## 🛠️ Development

### Local Development
1. Open any HTML file in a web browser
2. Use a local server for full functionality:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

### Customization
- **Colors**: Update Tailwind config in HTML files
- **Content**: Edit HTML files directly
- **Styling**: Modify `assets/style.css`
- **Functionality**: Update `assets/app.js`

## 📊 Analytics & Monitoring

### Recommended Integrations
- **Google Analytics**: Add tracking code to `<head>`
- **Google Search Console**: Verify domain ownership
- **Uptime monitoring**: Services like UptimeRobot
- **Performance monitoring**: Lighthouse CI

### Form Analytics
- Formspree provides form submission analytics
- Monitor conversion rates and user feedback
- Set up email notifications for new submissions

## 🔒 Security

### HTTPS
- GitHub Pages enforces HTTPS
- Custom domain SSL certificate included
- Mixed content warnings resolved

### Content Security
- No external dependencies except CDN
- Form validation and sanitization
- XSS protection through proper escaping

## 📈 Performance Optimization

### Current Optimizations
- Tailwind CSS via CDN (no build step)
- Minimal JavaScript
- Optimized images and SVGs
- Efficient CSS delivery

### Further Optimizations
- Image compression and WebP format
- Service worker for caching
- CDN for global delivery
- Minification of assets

## 🐛 Troubleshooting

### Common Issues

#### Domain Not Working
- Check DNS propagation (24-48 hours)
- Verify A records point to GitHub Pages IPs
- Ensure CNAME record is correct

#### Form Not Submitting
- Verify Formspree endpoint is correct
- Check browser console for errors
- Test with different email addresses

#### Styling Issues
- Clear browser cache
- Check Tailwind CDN is loading
- Verify custom CSS is not conflicting

### Support
- **General**: info@innoraze.com
- **Contact**: contact@innoraze.com
- **Documentation**: This README file

## 📝 License

© 2024 Innoraze. All rights reserved.

## 🔄 Updates

To update the website:
1. Edit HTML/CSS/JS files
2. Commit changes to repository
3. GitHub Pages automatically rebuilds
4. Changes go live within minutes

---

**Built with ❤️ for Innoraze Sports Intelligence Platform**
