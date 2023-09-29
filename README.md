This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


code itself works but there is an issue with @antv/g2 lib dep:
  d3-array,
  d3-interpolate 

which I wasn't able to fix at the moment and 
I don't want to burn more time on it.

```Error: require() of ES Module```

here are some links:

https://github.com/antvis/G2/issues/4493
https://nextjs.org/docs/messages/import-esm-externals
https://github.com/vercel/next.js/discussions/27876
