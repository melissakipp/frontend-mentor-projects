# Frontend Mentor - Officelite coming soon site solution

This is a solution to the [Officelite coming soon site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form

### Screenshot

![Officelite Desktop View](/public/images/officelite/officelite-preview.png)
![Officelite Mobile View](/public/images/officelite/officelite-mobile.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/melissakipp/frontend-mentor-projects/tree/main/app/officelite)
- Live Site URL: [Live Demo](https://frontend-mentor-projects-rho.vercel.app/officelite)

## My process

This project was particularly challenging as I integrated it into my existing portfolio site rather than building it standalone. This approach provided valuable real-world experience with component integration and responsive design systems, though it added significant complexity to the development process.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Modules for scoped styling
- Flexbox and CSS Grid
- Mobile-first workflow
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [React Hook Form](https://react-hook-form.com/) - Form handling and validation
- [Jest](https://jestjs.io/) - Testing framework

### What I learned

This project taught me valuable lessons about component architecture, testing workflows, and complex CSS layouts. Here are some key areas where I grew:

**Advanced CSS Techniques - Two-Tone Background:**
```css
.backgroundContainer::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-color: var(--color-primary);
  z-index: -1;
}

.backgroundContainer::after {
  content: '';
  position: fixed;
  top: 50vh;
  left: 0;
  width: 100%;
  height: 50vh;
  background-color: var(--color-secondary);
  z-index: -1;
}
```

**Button Hover Effects Without Layout Shift:**
```css
.button {
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.button:hover {
  border-color: var(--accent-color);
  /* No layout shift because border space was already allocated */
}
```

**Form:**
```typescript
  const onSubmit = (data: SignupFormData) => {
    console.log('Form submitted:', data);
    alert('Thank you for signing up! We will be in touch soon.');
    reset({
      name: '',
      email: '',
      plan: 'free', // Set default plan
      phone: '',
      company: ''
    });
    // Scroll to top of form or page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
```

**Key Technical Challenges Overcome:**

1. **Testing Environment Setup**: Resolved conflicts between Jest and Next.js SWC compiler by creating separate Babel configuration for tests while maintaining Next.js native compilation for production.

2. **Component Integration**: Successfully integrated Officelite components into existing portfolio architecture while maintaining responsive design and proper data flow.

3. **Complex Layout Issues**: Solved card centering problems on various viewport sizes and implemented responsive height handling that prevents scroll issues.

4. **Form State Management**: Implemented proper form validation, error handling, and state reset functionality for optimal user experience.

### Continued development

Areas I want to focus on in future projects:

- **Advanced Testing Patterns**: Explore more sophisticated Jest mocking strategies and integration testing approaches for complex component interactions
- **CSS Architecture**: Develop more robust systems for managing responsive layouts in large-scale applications
- **Component Library Development**: Build reusable component systems with better flexibility for theme variations
- **Performance Optimization**: Focus on Core Web Vitals and loading performance, especially for countdown timers and form interactions

### Useful resources

- [Next.js Testing Documentation](https://nextjs.org/docs/app/building-your-application/testing/jest) - Essential for setting up Jest with Next.js 15 and resolving build tool conflicts
- [React Hook Form Documentation](https://react-hook-form.com/) - Excellent patterns for form validation and submission handling
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Invaluable reference for implementing complex responsive layouts
- [CSS Modules Documentation](https://github.com/css-modules/css-modules) - Helped establish proper scoped styling architecture
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Great source for alternative approaches and debugging help

## Author

- Website - [Melissa Kipp](https://www.melissajkipp.com/)
- Frontend Mentor - [@melissakipp](https://frontend-mentor-projects-rho.vercel.app/)
- GitHub - [@melissakipp](https://github.com/melissakipp)

---

## Development Notes

This project represents a significant step in my frontend development journey, particularly in areas of:

- **Real-world Integration**: Working with existing codebases rather than isolated projects
- **Systematic Problem Solving**: Developing debugging workflows for complex CSS and testing issues  
- **Component Architecture**: Building truly reusable components with flexible prop interfaces
- **Testing Methodology**: Establishing robust testing workflows that work alongside modern Next.js features

The challenges encountered—from Jest/Next.js conflicts to complex responsive layouts—provided valuable learning experiences that will inform better architectural decisions in future projects.