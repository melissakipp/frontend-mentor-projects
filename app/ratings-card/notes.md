# Rating Card Project Notes

## Project Overview

This mini-project is an implementation of Frontend Mentor's Interactive Rating Component challenge. It's a simple component that allows users to select a rating from 1-5 and submit their feedback.

## Implementation Decisions

### TypeScript Integration

- Used TypeScript for better type safety and developer experience
- Created custom types for ratings (1-5 or null)
- Added proper typing for event handlers and props

### CSS Approach

- Used CSS Modules to scope styles to components
- Set up global CSS variables in globals.css for theming
- Used BEM naming convention for CSS classes
- Implemented hover and focus states for better UX

### Component Structure

- Split the component into manageable pieces
- Used React hooks for state management
- Implemented conditional rendering for different states

### Accessibility Considerations

- Added proper ARIA roles and labels
- Ensured keyboard navigation works correctly
- Used semantic HTML elements

## Challenges Faced

1. **CSS Module Issue**: Initially tried to use `:root` in CSS Modules, which caused errors. Moved global variables to globals.css.

2. **TypeScript JSX Namespace**: Encountered "Cannot find namespace 'JSX'" error. Fixed by properly importing React and using React.ReactElement as return type.

3. **Button Styling**: Getting the hover states and active states to match the design was tricky, especially with the color contrast requirements.

## Future Improvements

- Add unit tests with Jest and React Testing Library
- Add more animations for smoother transitions
- Implement a more sophisticated form validation
- Make the component more reusable with additional customization options

## Resources Used

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)

## Learning Outcomes

This project helped me better understand:

- TypeScript integration with React and Next.js
- CSS Modules and scoped styling
- State management in functional components
- Accessibility best practices
- Next.js App Router project structure
