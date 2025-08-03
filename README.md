## TravellAIng

This project consists of an admin dashboard where users can see stats about their trips, total number of users and create trip itineraries using GeminiAPI following a series of selections.

When on the project feel free to log in with Google and access the dashboard to start creating trips using AI, there is no public-user view, it's just an Admin Dashboard

<img width="1661" height="825" alt="Screenshot 2025-08-03 at 12 52 07" src="https://github.com/user-attachments/assets/93906ae9-2b72-498d-9140-01dae52e9c71" />

<img width="1661" height="825" alt="Screenshot 2025-08-03 at 12 34 19" src="https://github.com/user-attachments/assets/40a5a692-c54e-472f-963e-0c00b64f6118" />

<img width="1661" height="825" alt="Screenshot 2025-08-03 at 12 34 33" src="https://github.com/user-attachments/assets/1b6afeab-a9ad-4301-b0d8-365f37ab4be9" />


# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
