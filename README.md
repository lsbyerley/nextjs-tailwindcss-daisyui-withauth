## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

If running locally and you want to leverage authentication with Google and/or Github you will need to generate a `clientId` and `secretKey`.

- [Google Credentials](https://console.developers.google.com/apis/credentials)
- [Github OAuth App](https://github.com/settings/developers)

Once generated, add the `clientId` and `secretKey` to the `env.local` env config file.

Template bootstrapped with:

- [NextJS](https://nextjs.org/)
- [NextAuth](https://next-auth.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Deployed on Vercel

- https://nextjs-tailwindcss-daisyui-withauth.vercel.app
