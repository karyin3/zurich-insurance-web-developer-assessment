This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the application locally, set up Google OAuth 2.0 credentials on [`Google Cloud Console`](https://console.cloud.google.com), then add the following environment variables in the `.env` file:

```
GOOGLE_CLIENT_ID={google_oauth_client_id}
GOOGLE_CLIENT_SECRET={google_oauth_client_secret}
```

Alternatively, you may contact the developer to obtain temporary credentials.

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is also deployed on Vercel, click [here](https://zurich-insurance-web-developer-assessment.vercel.app) to view the production application.

## External packages used in this project

- [NextAuth.js](https://next-auth.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
