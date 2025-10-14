
# Luxury Wagyu - Premium Beef Website

A modern, responsive website for Luxury Wagyu featuring premium beef products, family recipes, and wholesale options. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Lazy loading, code splitting, and optimized builds
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Analytics Ready**: Google Analytics integration
- **Testing**: Unit tests with Vitest and React Testing Library

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI, Lucide Icons
- **Testing**: Vitest, React Testing Library
- **Deployment**: Optimized for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd luxury-wagyu-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

## 🚀 Development

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🏗️ Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist` directory, optimized for production deployment.

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables in Netlify dashboard

### Other Static Hosting
Upload the contents of the `dist` directory to your hosting provider.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_GA_TRACKING_ID` | Google Analytics tracking ID | No |
| `REACT_APP_API_URL` | API endpoint URL | No |
| `REACT_APP_CONTACT_EMAIL` | Contact email address | No |
| `REACT_APP_CONTACT_PHONE` | Contact phone number | No |
| `REACT_APP_BUSINESS_NAME` | Business name | No |
| `REACT_APP_BUSINESS_ADDRESS` | Business address | No |

## 📊 Performance Optimizations

- **Code Splitting**: Pages are lazy-loaded for faster initial load
- **Image Optimization**: Lazy loading and optimized formats
- **Bundle Optimization**: Manual chunks for better caching
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: Production builds are minified and compressed

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: Component testing with React Testing Library
- **Integration Tests**: User interaction testing
- **Error Boundary Tests**: Error handling verification
- **Coverage Reports**: Track test coverage

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🔍 SEO Features

- Meta tags and Open Graph data
- Structured data (JSON-LD)
- Semantic HTML
- Sitemap generation ready
- Canonical URLs
- Social media optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: info@luxurywagyu.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 🔄 Updates

- **v1.0.0**: Initial production release
- Performance optimizations
- SEO enhancements
- Accessibility improvements
- Testing framework setup
  