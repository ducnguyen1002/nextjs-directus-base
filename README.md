# Next.js Starter with Directus, ESLint, Prettier, and Custom Image Blur Effects

A starter project to quickly set up a Next.js application with essential features, including Directus integration, code quality tools (ESLint & Prettier), and a custom image component with built-in blurry placeholders.

---

## ✨ Features

- **Next.js**: Modern React framework for building web applications.
- **Directus Client**: Seamless integration with Directus for managing content.
- **ESLint**: Linting tool to enforce consistent code style.
- **Prettier**: Code formatter to ensure uniformity.
- **Custom Image Component**: Extends Next.js `<Image>` with default blurry placeholders.

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/ducnguyen1002/nextjs-directus-base.git
cd nextjs-directus-starter
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Set Up Environment Variables**
```bash
NEXT_PUBLIC_DIRECTUS_URL=https://your-directus-instance.com
NEXT_PUBLIC_API_URL=https://your-api-url.com
DIRECTUS_ACCESS_TOKEN=your-directus-access-token
```

### 4. **Run the Development Server**
```bash
npm run dev
```
## 🛠 Configuration

### **Directus Client**
```bash
import { createDirectus, graphql } from '@directus/sdk';

export const client = createDirectus('http://directus.example.com').with(graphql());
```

## 📂 Project Structure
```bash
.
├── app/                # Application routing with the App Router
│   ├── api/            # API routes
│   ├── layout.js       # Global layout
│   └── page.js         # Home page
├── components/         # Reusable components (e.g., CustomImage)
├── lib/                # Utilities and API clients (e.g., Directus client)
├── public/             # Static assets
├── styles/             # Global and component styles
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```