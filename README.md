# 🚀 Crypto Verse - Digital Assets Hub

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.9.0-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
</div>

<div align="center">
  <h3>🌟 Your Ultimate Destination for Cryptocurrency Insights, Market Data, and Latest News 🌟</h3>
  <p>A modern, responsive web application built with Next.js for tracking cryptocurrencies, exchanges, and staying updated with the latest crypto news.</p>
</div>

---

## ✨ Features

### 📊 **Real-time Cryptocurrency Data**
- Live prices and market capitalization
- Price change indicators (24h, 7d, 30d)
- Interactive charts and graphs
- Top cryptocurrencies ranking
- Detailed coin information pages

### 🏦 **Exchange Information**
- Popular cryptocurrency exchanges
- Trading volumes and statistics
- Exchange rankings and trust scores

### 📰 **Latest Crypto News**
- Real-time cryptocurrency news feed
- Category-based news filtering
- Bitcoin, Ethereum, DeFi, NFT news sections
- External news source links

### 🎨 **Modern UI/UX**
- Glassmorphism design elements
- Responsive mobile-first design
- Dark theme with gradient accents
- Smooth animations and transitions
- Professional navigation with hamburger menu

### 🔧 **Technical Features**
- Server-side rendering with Next.js 15
- Redux Toolkit for state management
- API integration with RapidAPI
- Optimized performance and SEO
- Type-safe development

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** Next.js 15.5.3 (App Router)
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 3.4
- **State Management:** Redux Toolkit 2.9.0
- **Charts:** Chart.js 4.5.0 & Recharts 3.2.1
- **Icons:** Radix UI Icons & Lucide React
- **Animations:** Framer Motion & CSS Transitions

### **UI Components**
- **Component Library:** Radix UI
- **Design System:** shadcn/ui
- **Navigation:** Radix Navigation Menu
- **Glass Effects:** Custom Tailwind utilities

### **APIs & Data**
- **Cryptocurrency Data:** CoinRanking API
- **News Feed:** News API via RapidAPI
- **HTTP Client:** Axios 1.12.2

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/sayanadhi03/Crypto-Verse.git
   cd Crypto-Verse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # CoinRanking API Configuration
   NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key_here
   NEXT_PUBLIC_RAPIDAPI_HOST=coinranking1.p.rapidapi.com

   # News API Configuration
   NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key_here
   NEXT_PUBLIC_NEWS_API_HOST=news-api14.p.rapidapi.com
   ```

4. **Get API Keys**
   - Sign up at [RapidAPI](https://rapidapi.com/)
   - Subscribe to [CoinRanking API](https://rapidapi.com/coinranking/api/coinranking1)
   - Subscribe to [News API](https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/news-api14/)

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
crypto-verse/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.js           # Root layout
│   │   ├── page.js             # Home page
│   │   ├── cryptocurrencies/   # Crypto listing page
│   │   ├── exchanges/          # Exchanges page
│   │   ├── news/               # News page
│   │   ├── crypto/[coinId]/    # Dynamic coin details
│   │   └── not-found.js        # 404 page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── NewsCard.jsx        # News article card
│   │   └── GlobalStats.jsx     # Market statistics
│   ├── services/               # API services
│   │   ├── cryptoApi.js        # Cryptocurrency API
│   │   └── newsApi.js          # News API
│   └── lib/                    # Utility functions
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
└── next.config.js              # Next.js configuration
```

---

## 🎨 UI Components & Design

### **Design Philosophy**
- **Glassmorphism:** Modern frosted glass effects
- **Dark Theme:** Professional cryptocurrency aesthetic
- **Responsive:** Mobile-first approach
- **Accessibility:** ARIA labels and keyboard navigation

### **Color Palette**
- **Primary:** Cyan to Blue gradients
- **Secondary:** Purple accents
- **Background:** Dark grays (900-800)
- **Text:** White with various opacities
- **Accents:** Green for positive, Red for negative

---

## 📱 Pages & Features

### **🏠 Home Page**
- Global cryptocurrency statistics
- Featured cryptocurrencies
- Market overview charts
- Latest news preview

### **💰 Cryptocurrencies Page**
- Comprehensive cryptocurrency list
- Real-time price updates
- Market cap and volume data
- Search and filter functionality

### **🏦 Exchanges Page**
- Top cryptocurrency exchanges
- Trading volume statistics
- Trust scores and rankings

### **📰 News Page**
- Latest cryptocurrency news
- Category-based filtering
- External news source links
- Responsive news cards

### **📊 Coin Details Page**
- Detailed cryptocurrency information
- Historical price charts
- Market statistics
- Price change indicators

---

## 🔧 API Integration

### **CoinRanking API**
- Real-time cryptocurrency data
- Market statistics
- Historical price data
- Exchange information

### **News API**
- Latest cryptocurrency news
- Category-based news filtering
- Multi-source news aggregation

---

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Tablet Support:** Responsive layout for tablets
- **Desktop Experience:** Full-featured desktop interface
- **Touch Friendly:** Large touch targets for mobile

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every commit

### **Other Platforms**
- Netlify
- Railway
- Heroku
- AWS Amplify

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Sayan Adhikary**

- 💼 LinkedIn: [sayan-adhikary03](https://www.linkedin.com/in/sayan-adhikary03/)
- 🐱 GitHub: [sayanadhi03](https://github.com/sayanadhi03)
- 📸 Instagram: [yoursayann](https://www.instagram.com/yoursayann/)

---

## 🙏 Acknowledgments

- [CoinRanking API](https://coinranking.com/api) for cryptocurrency data
- [RapidAPI](https://rapidapi.com/) for API management
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components

---

## 📊 Project Stats

<div align="center">
  <img src="https://img.shields.io/github/stars/sayanadhi03/Crypto-Verse?style=social" alt="GitHub Stars" />
  <img src="https://img.shields.io/github/forks/sayanadhi03/Crypto-Verse?style=social" alt="GitHub Forks" />
  <img src="https://img.shields.io/github/issues/sayanadhi03/Crypto-Verse" alt="GitHub Issues" />
  <img src="https://img.shields.io/github/license/sayanadhi03/Crypto-Verse" alt="License" />
</div>

---

<div align="center">
  <h3>⭐ If you found this project helpful, please give it a star! ⭐</h3>
  <p>Made with ❤️ and ☕ by Sayan Adhikary</p>
</div>
