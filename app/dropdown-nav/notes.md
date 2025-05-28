# Project Notes: Intro Section with Dropdown Navigation

## 📄 Project Overview

This is a responsive landing page challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). The goal was to recreate a layout with a dropdown-based navigation system using React and TypeScript inside a modern Next.js 15 project structure.

## ⚙️ Implementation Decisions

- Built using **Next.js 15 App Router**
- Migrated from static HTML/CSS/JS to component-based JSX using **CSS Modules** for scoped styles
- Responsive image swapping handled via the native `<picture>` element with `next/image` for optimization
- Navigation dropdown behavior controlled with `useState` and `aria-expanded` for accessibility

## 🟦 TypeScript Integration

- TypeScript used for type safety across components
- Dropdown state (`activeDropdown`) is typed as `string | null`
- DOM events like `KeyboardEvent` are typed explicitly in `useEffect`

## 🎨 CSS Approach

- **CSS Modules** are used throughout (`*.module.css`) to scope styles and prevent global conflicts
- Class names converted to **camelCase** for compatibility with CSS Modules
- Utility classes (like `.btn`, `.heroImg`, etc.) modularized to align with component responsibilities

## 🧩 Component Structure

- `/dropdown-nav`
  - `Header.tsx` – Handles navigation and dropdown logic
  - `MainContent.tsx` – Includes the hero text and image
  - `Testmonials.tsx` – Renders client logo list
- Images loaded from `public/images/dropdown-nav`

## ♿ Accessibility Considerations

- Dropdowns use `aria-expanded` and `aria-controls` for screen reader awareness
- Keyboard interaction supports `Escape` key to close open dropdowns
- `sr-only` class applied to hidden headings for semantic structure

## 🧱 Challenges Faced

- Converting from global CSS to fully modular **CSS Modules**
- Aligning the hero image and testimonial logos using **CSS Grid**
- Debugging overflow and alignment issues on responsive breakpoints
- Hot reload issues from `mini-css-extract-plugin` when refactoring styles

## 🚀 Future Improvements

- Extract dropdown logic into a reusable component
- Add keyboard navigation to dropdown items (arrow keys, Tab behavior)
- Migrate CSS modules to **Tailwind CSS** or **Styled Components** for scalability
- Add unit or integration tests with Jest/React Testing Library

## 📚 Resources Used

- [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [ChatGPT](https://chat.openai.com/) for refactoring and debugging guidance

## 🎓 Learning Outcomes

- Gained confidence in converting HTML/CSS to Next.js App Router components
- Practiced structuring a responsive layout using **CSS Grid**
- Improved understanding of `next/image`, `useEffect`, and modular accessibility
- Learned to use **TypeScript with DOM events and JSX** effectively
