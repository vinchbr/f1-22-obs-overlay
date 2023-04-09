# Things to do

## Completed

## Incomplete

### Header.tsx
* Based on `PacketParticipantsData` use the m_driverId, if 255 m_name, m_teamId, m_raceNumber
* Make the tyre compound dynamic based on `PacketCarStatusData`

### PersonalBest
* If time trial, use data available, no sector info will be available if that's the case.
* Create a rival time TSX with same information
* Save to a json the personal best time and sector to load up based on trackId from `PacketSessionData`

### Lap.tsx
* ~~Decouple all the calculations into functions that are easier to test and make the code cleaner.~~
* ~~Fix Sector 3 being wonky~~
* Change when the widget updates based on time? until sector 2 starts? or we can only update the CURRENT sector!
* Add coloring to the Gaps
* Add a colored bar under the section



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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


