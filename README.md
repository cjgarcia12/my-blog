# Christian Garcia's Blog 🚀

![Blog Banner](public/astropaper-og.jpg)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Astro](https://img.shields.io/badge/Astro-FF5A03?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Welcome to my personal blog! This is where I share insights about software engineering, web development, data engineering, and lessons learned from building scalable technology solutions.

Built with the [AstroPaper](https://github.com/satnaing/astro-paper) theme and customized for my personal brand and content focus.

🌐 **Live Site**: [blog.cjgarcia.uno](https://blog.cjgarcia.uno)  
💼 **Portfolio**: [cjgarcia.uno](https://cjgarcia.uno)

## 🔥 Features

- ✅ **Fast Performance**: Static site generation with Astro
- ✅ **SEO-friendly**: Optimized for search engines
- ✅ **Responsive Design**: Works great on all devices
- ✅ **Accessible**: Built with accessibility best practices
- ✅ **Dark/Light Mode**: Theme switching support
- ✅ **Search Functionality**: Find content easily
- ✅ **RSS Feed**: Subscribe to get updates
- ✅ **Tag System**: Content categorization
- ✅ **Type-safe**: Full TypeScript support

## 🚀 Project Structure

```bash
/
├── public/
│   ├── assets/
│   ├── pagefind/              # Auto-generated search index
│   ├── favicon.svg
│   ├── astropaper-og.jpg
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── icons/             # Custom and social icons
│   ├── components/            # Reusable UI components
│   ├── data/
│   │   └── blog/              # Blog posts in Markdown
│   ├── layouts/               # Page layouts
│   ├── pages/                 # File-based routing
│   ├── styles/                # Global styles
│   ├── utils/                 # Utility functions
│   ├── config.ts              # Site configuration
│   ├── constants.ts           # Social links and constants
│   └── content.config.ts      # Content validation schema
└── astro.config.ts            # Astro configuration
```

## 📝 Content Focus

This blog covers:

### 🚀 **Web Development**
- Modern frameworks (React, Next.js, TypeScript)
- Backend architecture (Node.js, Spring Boot, .NET)
- Full-stack application design
- Performance optimization

### 📊 **Data Engineering**
- Big data processing (PySpark, Databricks)
- ETL/ELT pipeline design
- Database optimization
- Data architecture patterns

### 🏗️ **Infrastructure & DevOps**
- Infrastructure as Code (Terraform)
- Containerization (Docker, Kubernetes)
- CI/CD pipelines
- Cloud platforms (AWS)

### 💡 **Project Insights**
- Real-world project breakdowns
- Architecture decisions
- Lessons learned
- Best practices

## 💻 Tech Stack

**Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**Search** - [Pagefind](https://pagefind.app/)  
**Icons** - [Tabler Icons](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Linting** - [ESLint](https://eslint.org)  
**Deployment** - VPS with Nginx

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or yarn

### Running Locally

```bash
# Clone the repository
git clone https://github.com/cjgarcia12/my-blog.git
cd my-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3001`

### Available Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Starts local dev server at `localhost:3001` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Lint with ESLint |

## 📝 Adding Content

### Creating a New Blog Post

1. Create a new `.md` file in `src/data/blog/`
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
pubDatetime: 2025-01-18T15:30:00Z
featured: false
draft: false
tags:
  - web-development
  - data-engineering
description: "Brief description for SEO"
---

Your content here...
```

3. The post will automatically appear in the blog feed

### Customizing

- **Site info**: Update `src/config.ts`
- **Social links**: Modify `src/constants.ts`
- **About page**: Edit `src/pages/about.md`
- **Styling**: Customize TailwindCSS classes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the complete static site ready for deployment.

### Deploy to VPS
```bash
# Example deployment to nginx
scp -r dist/* user@your-vps:/var/www/html/
```

## 📬 Contact

**Christian Garcia**  
Software Engineer

- 🌐 **Portfolio**: [cjgarcia.uno](https://cjgarcia.uno)
- 💼 **LinkedIn**: [linkedin.com/in/cjgarca](https://linkedin.com/in/cjgarca/)
- 💻 **GitHub**: [github.com/cjgarcia12](https://github.com/cjgarcia12)
- 📧 **Email**: [christian.jgarcia03@gmail.com](mailto:christian.jgarcia03@gmail.com)

## 📜 License

Licensed under the MIT License, Copyright © 2025

---

Built with ❤️ using [AstroPaper](https://github.com/satnaing/astro-paper) theme  
Made by [Christian Garcia](https://cjgarcia.uno) 👨🏻‍💻
