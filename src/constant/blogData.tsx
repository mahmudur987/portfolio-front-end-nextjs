// src/data/blogs.ts

import type { Blog } from "@/types";

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Mastering Tailwind CSS for Modern UI",
    slug: "mastering-tailwind-css-modern-ui",
    excerpt:
      "Learn how to design fast, responsive, and modern interfaces using Tailwind CSS.",
    coverImage:
      "https://www.searchenginejournal.com/wp-content/uploads/2020/08/9-ways-you-can-make-your-website-more-accessible-5f3f5d3bd7a34.png",
    author: "Mahmud Hasan",
    publishedAt: "2025-08-20",
    readingTime: "5 min",
    content: `
      <div class="prose prose-blue max-w-none">
        <h2>Introduction</h2>
        <p>Tailwind CSS has become the go-to utility-first CSS framework for building fast and responsive UIs.</p>

        <h2>Why Tailwind?</h2>
        <ul>
          <li>⚡ Rapid development with utility classes</li>
          <li>🎨 Easy customization and theming</li>
          <li>💻 Great developer experience</li>
        </ul>

        <h2>Conclusion</h2>
        <p><strong>Tailwind</strong> shines when combined with React and shadcn/ui to build modern apps quickly.</p>
      </div>
    `,
  },
  {
    id: "2",
    title: "Understanding React 19 New Features",
    slug: "understanding-react-19-new-features",
    excerpt:
      "React 19 introduces exciting features like React Server Components and useActionState.",
    coverImage:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feibm96k9y07irdwu0wlj.png",
    author: "Mahmud Hasan",
    publishedAt: "2025-07-18",
    readingTime: "6 min",
    content: `
      <div class="prose prose-indigo max-w-none">
        <h2>What's New in React 19?</h2>
        <p>React 19 brings new features that improve performance and developer experience:</p>
        <ul>
          <li>React Server Components</li>
          <li>useActionState hook</li>
          <li>Partial Hydration</li>
        </ul>

        <h2>Why Upgrade?</h2>
        <p>Better performance, cleaner DX, and future-ready features.</p>

        <h2>Conclusion</h2>
        <p>Upgrade carefully and test libraries for compatibility before going all-in.</p>
      </div>
    `,
  },
  {
    id: "3",
    title: "Building REST APIs with Express.js",
    slug: "building-rest-apis-expressjs",
    excerpt:
      "Step-by-step guide to building scalable REST APIs with Express.js and MongoDB.",
    coverImage:
      "https://play-lh.googleusercontent.com/FhAciEsMniKdyJgiwBBR2P9wcB3vxcbdQpqk4SiC2wRA7xC8dUGlGtaB1Gf4T955t17W",
    author: "Mahmud Hasan",
    publishedAt: "2025-06-05",
    readingTime: "7 min",
    content: `
      <div class="prose prose-green max-w-none">
        <h2>Introduction</h2>
        <p>Express.js is a minimal yet powerful framework for building backend APIs.</p>

        <h2>Core Features</h2>
        <ul>
          <li>Middleware support</li>
          <li>Powerful routing system</li>
          <li>Integration with databases like MongoDB</li>
        </ul>

        <h2>Example Code</h2>
        <pre><code class="language-js">
        app.get('/books', (req, res) => {
          res.json({ books: [] });
        });
        </code></pre>
      </div>
    `,
  },
  {
    id: "4",
    title: "Next.js vs Vite: Which to Choose?",
    slug: "nextjs-vs-vite-which-to-choose",
    excerpt:
      "Comparing Next.js and Vite for modern web development — SSR vs speed.",
    coverImage:
      "https://miro.medium.com/v2/resize:fit:572/0*KgNXU3tz-AOj2k4b.png",
    author: "Mahmud Hasan",
    publishedAt: "2025-05-12",
    readingTime: "8 min",
    content: `
      <div class="prose prose-purple max-w-none">
        <h2>Next.js Strengths</h2>
        <ul>
          <li>Server-side rendering (SSR) & static site generation (SSG)</li>
          <li>API routes out of the box</li>
          <li>Great ecosystem support</li>
        </ul>

        <h2>Vite Strengths</h2>
        <ul>
          <li>Lightning-fast dev server ⚡</li>
          <li>Simple and flexible setup</li>
          <li>Perfect for SPAs</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Choose <strong>Next.js</strong> if you need SSR/SSG, or <strong>Vite</strong> for blazing-fast SPAs.</p>
      </div>
    `,
  },
  {
    id: "5",
    title: "Improving Web Accessibility with ARIA",
    slug: "improving-web-accessibility-aria",
    excerpt:
      "Best practices for building accessible web apps using ARIA roles and attributes.",
    coverImage:
      "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi5vke8fu8g8659hjvv22.jpeg",
    author: "Mahmud Hasan",
    publishedAt: "2025-04-01",
    readingTime: "6 min",
    content: `
      <div class="prose prose-pink max-w-none">
        <h2>Why Accessibility?</h2>
        <p>Accessibility improves usability for everyone, not just people with disabilities.</p>

        <h2>Using ARIA</h2>
        <ul>
          <li><code>role</code> attributes for semantic meaning</li>
          <li><code>aria-label</code> for better descriptions</li>
          <li><code>aria-hidden</code> for screen reader handling</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Accessibility should never be an afterthought. Build inclusive apps from the start. 💡</p>
      </div>
    `,
  },
];

export default blogs;
