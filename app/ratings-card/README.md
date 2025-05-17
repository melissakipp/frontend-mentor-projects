# Frontend Mentor - Interactive Rating Component Solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![Rating state](./screenshots/rating-state.png)
![Thank you state](./screenshots/thank-you-state.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/your-username/frontend-mentor-repo)
- Live Site URL: [Live Demo](https://your-live-site-url.com)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- CSS Modules - For component-scoped styling
- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Accessibility best practices

### What I learned

This project helped me practice TypeScript with React components, including proper type definitions for props and state. I also learned how to manage component state for multi-step interactions and provide proper accessibility attributes.

Some code snippets I'm proud of:

```tsx
// Type definition for rating values
export type Rating = 1 | 2 | 3 | 4 | 5 | null;

// Using CSS variables for theming
.card__wrapper {
  background: radial-gradient(circle at center, var(--color-card-gradient-start), var(--color-card-gradient-end));
}

// ARIA attributes for better accessibility

```

### Continued development

I want to continue focusing on:

- Animation and transitions for smoother state changes
- More advanced TypeScript patterns
- Improved accessibility features
- Testing components with Jest and React Testing Library

### Useful resources

- [Next.js Documentation](https://nextjs.org/docs) - Helpful for understanding Next.js app directory structure
- [TypeScript React Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Great resource for TypeScript with React
- [CSS Modules in Next.js](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) - Helpful for understanding CSS Modules in Next.js

## Author

- Website - [Your Name](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the FM community for their feedback and support.
