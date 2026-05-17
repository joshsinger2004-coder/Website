# Josh Singer — Official Website

Personal website for Josh Singer, event musician and live performer based in London, UK.

## Stack

React 18 · Vite · Tailwind CSS · shadcn/ui · Framer Motion

## Development

```bash
npm install
npm run dev
```

## Contact Form

The contact form uses [Formspree](https://formspree.io). To activate it:

1. Create a free account at formspree.io
2. Create a new form pointed at your email address
3. Replace `YOUR_FORM_ID` in `src/components/home/ContactSection.jsx` with your form ID

## Deployment

Build output is in `./dist` after running `npm run build`. Deploy the `dist` folder to any static host (Netlify, Vercel, etc.).
