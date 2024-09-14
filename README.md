# Web & Api - Leonardo.AI

This project is a responsive web application developed using Next.js and TypeScript, designed to provide a user information entry system and display data retrieved from a public GraphQL API. It incorporates Chakra UI as its component library, ensuring a sleek, responsive design. Key features of the application include a form for capturing user details, paginated data display from the GraphQL API, and support for direct links to specific data pages. Additionally, users can interact with the data list to open detailed views in modals. This document covers the setup and operational details of the project.

# Overview

* `User Information Entry`: A modal page prompts users to enter their username and job title before accessing the rest of the application. This information is stored persistently and can be reviewed or edited after submission.

* `Data Display`: Leverages Apollo Client to fetch and present data from a public GraphQL API, with a focus on datasets that include images.

* `Pagination`: Provides a paginated view of the GraphQL data on an "Information Page," allowing users to access specific pages via URL directly.

* `Detail Viewing`: Selecting an item from the data list opens a modal that displays detailed information about the chosen item.

* `Responsive Design`: Utilizes Chakra UI to ensure a smooth user experience across mobile and desktop devices.
  
# Instructions

1. Clone this repository running the following command:
```bash
git clone leonardoAI-schedules-challenge.git
# or
gh repo clone danielwerner-dev/leonardoAI-schedules-challenge
```
2. Acces repository
```bash
cd leonardoAI-schedules-challenge
```
3. Run the app with following command:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
  - You can access the app through [http://localhost:3000](http://localhost:3000) on your default browser.
  - Alternatively, this repository can be accessed via Vercel by clicking on this link: [leonardoai-country-list.vercel.app](leonardoai-country-list.vercel.app)


4. Generate types based on Graphql schema, run one of the commands below:

```bash
npm run codegen
# or
yarn codegen
# or
pnpm codegen
# or
bun codegen
```
This project fetch data from [https://countries.trevorblades.com](https://countries.trevorblades.com)

# Optimisations
   * Implement logout button/function
   * Use a better tool than Apollo, such as [Gatsby](https://www.gatsbyjs.com/), for improved SEO handling, as Gatsby is a site generator that pre-renders pages for better performance and also offers plugins for content optimization.
   * Chakra UI is a powerful tool for quickly creating accessible and responsive interfaces. However, it's worth considering using [Tailwind CSS](https://tailwindcss.com/)), as it works better with RSC, is optimized for performance, and offers a highly customizable and flexible approach to styling, allowing you to build custom designs without relying on pre-built components.
