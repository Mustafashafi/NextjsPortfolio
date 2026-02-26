# Muhammad Mustafa - Portfolio Website

A stunning, highly animated portfolio website for Muhammad Mustafa, a Frontend Developer and Computer Science graduate from UET Mardan.

## Tech Stack
- Frontend: Next.js 14+ (App Router), React, JavaScript, HTML5, CSS3
- Styling: Tailwind CSS 4, CSS variables
- Animations: Framer Motion
- Icons: Lucide React
- Theme: next-themes (Dark/Light mode)

## How to Set Up & Run Locally

1. **Clone the repository:**
   If you have Git installed, clone this repo to your machine.

2. **Install Dependencies:**
   Run the following command in the root folder to install packages:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   Launch the app in development mode:
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization Instructions

To insert real links for your projects:
1. Navigate to `src/components/Projects.jsx`.
2. Find the `projects` array object.
3. Update the `live: "#"` and `github: "#"` fields with your actual respective URLs.

To update images (e.g., your avatar):
1. Navigate to `src/components/About.jsx`.
2. Locate the div with the "MM" text initial.
3. Add a Next.js `<img>` tag or standard HTML `img` covering the wrapper replacing the text nodes.

## Building for Production
This portfolio is pre-configured for static exports. Run the following command to generate a `/out` directory containing all your HTML/CSS/JS files ready to deploy on any static hosting environment (GitHub Pages, Netlify, Vercel, etc.):
```bash
npm run build
```

Enjoy your incredible modern web presence!
