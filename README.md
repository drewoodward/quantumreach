# Quantum Reach Marketing Website

A modern, responsive marketing site for Quantum Reach built with Next.js and Tailwind CSS.

## 🚀 Features

* **Responsive Design**: Mobile-first layouts and smooth breakpoints.
* **Dynamic Content**: Loads account data from `/_data/db.json`.
* **Optimized Images**: Built-in `next/image` for fast, responsive media.
* **Custom Components**: Reusable UI elements (Navbar, Cards, Avatars, Contact Form).
* **SEO & Performance**: Meta tags, code-splitting, and Vercel edge deployment.

## 🛠️ Tech Stack

* **Framework**: Next.js (React)
* **Styling**: Tailwind CSS
* **Deployment**: Vercel
* **Data**: Local JSON (`/_data/db.json`)

## 📥 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v16 or higher
* npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-org>/quantumreach.git
cd quantumreach

# Install dependencies
npm install   # or `yarn install`
```

### Development

```bash
npm run dev     # or `yarn dev`
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build   # or `yarn build`
npm start       # or `yarn start`
```

## 📁 Structure

```
/ (root)
├─ /components      # UI components (Navbar, Card, Avatar, ContactForm)
├─ /pages           # Next.js pages (index.tsx, _app.tsx)
├─ /public          # Static assets (images, fonts)
└─ /_data/db.json   # Accounts data
```

## 🚢 Deployment

Push to `main` branch triggers automatic Vercel deployment. Configure any env vars in your Vercel dashboard if needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add feature..."`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is not licensed but feel free to use and modify.

---
