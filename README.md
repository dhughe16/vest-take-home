This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# [Click here for live demo](https://vest-take-home.vercel.app/)

## Getting Started

First, install the packages with `npm i`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

In order to test, we will need to use Babel. Rename the file `.babel.config.js` to `babel.config.js`, removing the `.`. 

Run `npm run test`.

I have not included testing beyond making sure data displays as I am not performing any transformations on the data received in the json. Once a backend is connected, I would like to add more tests to ensure that data is received and displayed as expected.

## UX Principles/Tufte's Laws Used

- Law of Proximity - group items with a similar use together
  - Group text into categories of similar topics
- Tesler's Law - hide complexity where possible, but don't eliminate detail
  - Used accordion to hide some holdings information
- Miller's Law - people can only hold 7±2 items in working memory, so chunk data into digestible groups
  - I used cards and grouped text to prevent overload.
- Von Restorff Effect - unique items are more likely to be remembered
  - Call to Action buttons are the only orange items on the page
- Chartjunk - don't overload charts with gradients, effects or irrelevant icons

## Next Steps

1. First and foremost I'd like to continue work on the Holdings Summary page. I like the format of using a dropdown to switch between different holdings, but I feel that graphics and charts would make the page much more engaging. Some ideas:

  - Separate different pieces of data into their own cards
  - A chart to replace the current values and shares details accordion.
  - Add icons to match different pieces of data.

2. Add a dummy backend to better represent the way data will be passed to the application.

3. Test the connection and assumptions made around a dummy backend.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
