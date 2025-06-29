# Frontend Mentor - Officelite Coming Soon Site

## Table of Contents
- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Built With](#built-with)
- [Key Struggles & Solutions](#key-struggles--solutions)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)

## Overview

### The Challenge
This was a Frontend Mentor 2-page "Coming Soon" site challenge that I integrated into my projects for portfolio site. The challenge involved building a responsive landing page with a countdown timer and sign-up form, focusing on modern Next.js development practices.

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second
- Submit their email address using an HTML form
- See validation errors if the form is submitted without required information or with an invalid email address

### Built With
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **CSS Modules** - Scoped styling approach
- **Jest** - Unit testing framework
- **React Hook Form** - Form handling and validation

## Key Struggles & Solutions

### 1. Testing Environment Setup
**The Problem:** Initial Jest setup created conflicts between Babel configuration and Next.js's native SWC compiler, causing font loading issues and build conflicts.

**The Solution:** 
- Created a Jest-specific Babel configuration with `babel-jest.config.js`
- Allowed Next.js to continue using SWC for production builds
- Established separate transform settings for test environment

**Key Learning:** Modern Next.js applications can have complex build tool interactions. Separating concerns between test and production environments is crucial.

### 2. Component Testing Alignment
**The Problem:** Tests were failing due to mismatches between expected UI elements and actual component implementations, particularly around link text and form validation messages.

**The Solution:**
- Updated test assertions to match actual component output
- Adjusted expectations from generic text like "sign up" to actual UI copy like "Try for Free"  
- Implemented proper `act()` wrapping for React state updates in tests

**Key Learning:** Test-driven development requires constant alignment between expected behavior and actual implementation. Tests should reflect user experience, not developer assumptions.

### 3. Data Flow Architecture
**The Problem:** Card components weren't properly receiving data from imported `cardData`, causing empty or broken component states.

**The Solution:**
- Fixed import paths and ensured correct TypeScript type definitions
- Established clear data contracts between components and data sources
- Created proper prop interfaces for type safety

### 4. Complex CSS Layout Issues

#### Card Centering Problem
**The Problem:** Cards weren't centering properly on viewports below 1164px width.

**The Solution:**
```css
.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .cardContainer {
    flex-direction: row;
    justify-content: center;
  }
}
```

#### Two-Tone Background Implementation
**The Problem:** Creating a split-color background that spans full viewport height while maintaining responsive behavior.

**The Solution:**
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

### 5. Button Hover Effects
**The Problem:** Button hover effects were causing layout shifts, creating a jarring user experience.

**The Solution:**
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

### 6. Scrolling and Height Issues
**The Problem:** Fixed height constraints prevented proper scrolling on the sign-up page, especially on smaller screens.

**The Solution:**
- Changed from `height: 100vh` to `min-height: 100vh`
- Adjusted positioning to allow content overflow
- Implemented proper responsive height handling

### 7. Double Scrollbar Issue
**The Problem:** Integrating Officelite into the main project site caused vertical double scrollbars.

**The Investigation:** This required systematic debugging of CSS properties including `max-width`, `overflow-x`, and parent container interactions.

**Status:** Partially resolved through overflow property adjustments, but highlighted the complexity of integrating responsive components into existing layouts.

### 8. Form State Management
**The Problem:** Form state wasn't properly resetting after submission, leading to confusing UX.

**The Solution:**
```typescript
const handleSubmit = (data: FormData) => {
  // Process form submission
  console.log('Form submitted:', data);
  
  // Reset form using React Hook Form
  reset();
  
  // Show success feedback
  setSubmitSuccess(true);
};
```

## What I Learned

### Technical Skills
1. **Advanced CSS Techniques**: Mastered pseudo-elements for complex background effects and responsive layouts without JavaScript
2. **Component Architecture**: Built truly reusable components with flexible prop interfaces
3. **Testing Methodology**: Established robust testing workflows that work alongside modern Next.js features
4. **Form Handling**: Implemented professional-grade form validation and user feedback systems

### Development Practices
1. **Integration Complexity**: Learned the challenges of integrating new components into existing systems vs. building standalone projects
2. **Responsive Design Systems**: Gained experience with creating components that adapt to different design contexts
3. **Debugging Workflows**: Developed systematic approaches to CSS layout debugging and testing environment troubleshooting

### Problem-Solving Approach
This project reinforced the importance of:
- Breaking complex problems into smaller, testable pieces
- Systematic debugging using browser dev tools and console logging
- Maintaining clean separation between component logic and styling
- Documenting solutions for future reference

## Continued Development

Areas I want to focus on in future projects:

1. **Advanced Testing Patterns**: Explore more sophisticated Jest mocking strategies and integration testing approaches
2. **CSS Architecture**: Develop more robust systems for managing complex responsive layouts
3. **Component Libraries**: Build reusable component systems that can be easily integrated across projects
4. **Performance Optimization**: Focus on Core Web Vitals and loading performance for Next.js applications

## Useful Resources

- [Next.js Testing Documentation](https://nextjs.org/docs/app/building-your-application/testing/jest) - Comprehensive guide for Jest setup with Next.js
- [React Hook Form Documentation](https://react-hook-form.com/) - Excellent patterns for form validation and submission
- [CSS Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Reference for advanced layout techniques
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Valuable feedback and alternative solution approaches

## Reflections

The Officelite project served as an excellent bridge between tutorial-level projects and real-world development challenges. The decision to integrate it into my existing portfolio site, while more complex, provided invaluable experience with:

- Component integration strategies
- CSS architecture at scale  
- Testing in complex environments
- Responsive design system thinking

The struggles encountered—from testing environment conflicts to complex CSS layout issues—were all valuable learning experiences that improved my debugging skills and systematic problem-solving approach.

Most importantly, this project demonstrated the value of maintaining detailed notes and documentation throughout the development process. The challenges faced here will inform better architectural decisions in future projects.

---

**Project Status:** ✅ Complete with minor polish remaining
**Integration Status:** 🔄 Successfully integrated into portfolio site
**Testing Status:** ✅ Full test coverage achieved
**Responsive Status:** ✅ Mobile-first approach implemented


# Countdown Customize Component
by ChatGPT --> Claude.ai

```jsx
import Countdown from './Countdown';

// Example 1: Default countdown
export function DefaultCountdown() {
  return <Countdown />;
}

// Example 2: Custom target date and title
export function ProductLaunchCountdown() {
  return (
    <Countdown
      targetDate="2025-12-25T00:00:00"
      title="Product Launch"
      buttonText="Notify Me"
      buttonHref="/notify"
    />
  );
}

// Example 3: Dark theme with custom colors
export function DarkThemedCountdown() {
  return (
    <Countdown
      theme="dark"
      colorScheme={{
        primary: '#10B981',
        accent: '#10B981',
        blockBackground: '#374151',
      }}
      title="Event Starting"
      layout="horizontal"
      size="large"
    />
  );
}

// Example 4: Minimal compact design
export function CompactCountdown() {
  return (
    <Countdown
      layout="compact"
      size="small"
      showTitle={false}
      showButton={false}
      units={['hours', 'minutes', 'seconds']}
      colorScheme={{
        blockBackground: '#EF4444',
        blockText: '#FFFFFF',
      }}
    />
  );
}

// Example 5: Custom styling with CSS classes
export function CustomStyledCountdown() {
  return (
    <Countdown
      className="my-custom-countdown"
      titleClassName="fancy-title"
      blockClassName="glass-effect"
      title="Special Event"
      colorScheme={{
        primary: '#8B5CF6',
        secondary: '#FFFFFF',
        text: '#1F2937',
        blockBackground: 'rgba(139, 92, 246, 0.1)',
        blockText: '#8B5CF6',
      }}
      customStyles={{
        '--custom-shadow': '0 20px 40px rgba(139, 92, 246, 0.3)',
        '--custom-border': '1px solid rgba(139, 92, 246, 0.2)',
      }}
    />
  );
}

// Example 6: Horizontal layout for hero sections
export function HeroCountdown() {
  return (
    <Countdown
      layout="horizontal"
      size="large"
      title="Grand Opening"
      buttonText="Reserve Your Spot"
      buttonHref="/reserve"
      colorScheme={{
        primary: '#F59E0B',
        secondary: '#1F2937',
        text: '#FFFFFF',
        blockBackground: 'rgba(245, 158, 11, 0.1)',
        blockText: '#F59E0B',
      }}
      containerStyle={{
        background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
        borderRadius: '1rem',
        padding: '3rem',
      }}
    />
  );
}

// Example 7: Minimal inline countdown
export function InlineCountdown() {
  return (
    <Countdown
      layout="minimal"
      size="small"
      showTitle={false}
      showButton={false}
      units={['days', 'hours']}
      unitLabels={{ days: 'D', hours: 'H' }}
      colorScheme={{
        blockBackground: '#3B82F6',
        blockText: '#FFFFFF',
      }}
      containerStyle={{ padding: '1rem' }}
    />
  );
}

// Example 8: Custom units and labels
export function CustomUnitsCountdown() {
  return (
    <Countdown
      title="Conference 2025"
      units={['days', 'hours', 'minutes']}
      unitLabels={{
        days: 'Days Left',
        hours: 'Hours',
        minutes: 'Minutes',
      }}
      colorScheme={{
        primary: '#DC2626',
        blockBackground: '#FEE2E2',
        blockText: '#DC2626',
        text: '#1F2937',
      }}
    />
  );
}

// Example 9: Light theme with custom button styling
export function LightThemedCountdown() {
  return (
    <Countdown
      theme="light"
      title="Summer Sale Ends"
      buttonText="Shop Now"
      buttonStyle={{
        background: 'linear-gradient(45deg, #F59E0B, #EF4444)',
        borderRadius: '0.5rem',
        fontSize: '1.125rem',
        padding: '1rem 2rem',
      }}
      blockStyle={{
        borderRadius: '1rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
}

// Example 10: Full customization example
export function FullyCustomizedCountdown() {
  return (
    <Countdown
      targetDate="2025-07-04T12:00:00"
      title="Independence Day Celebration"
      buttonText="Join the Party"
      buttonHref="/celebration"
      layout="vertical"
      size="medium"
      theme="custom"
      colorScheme={{
        primary: '#EF4444',
        secondary: '#FFFFFF',
        background: '#1E3A8A',
        text: '#FFFFFF',
        accent: '#EF4444',
        blockBackground: 'rgba(239, 68, 68, 0.1)',
        blockText: '#EF4444',
      }}
      className="patriotic-countdown"
      titleStyle={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        fontSize: '1.5rem',
      }}
      containerStyle={{
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3730A3 100%)',
        borderRadius: '1rem',
        border: '2px solid #EF4444',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      }}
      customStyles={{
        '--fireworks-glow': '0 0 20px #EF4444',
      }}
    />
  );
}
```

# Countdown Component - Key Improvements

This document outlines the enhanced features and improvements made to the reusable countdown component to provide better design control and flexibility across different instances.

## 🎨 Layout Options

The component now supports multiple layout configurations:

| Layout | Description | Use Case |
|--------|-------------|----------|
| **Vertical** | Traditional stacked layout (default) | Standard countdown displays |
| **Horizontal** | Side-by-side arrangement | Hero sections, wide containers |
| **Compact** | Tighter spacing and smaller elements | Sidebar widgets, cards |
| **Minimal** | Ultra-compact for space-constrained areas | Inline countdowns, mobile |

```tsx
<Countdown layout="horizontal" />
<Countdown layout="compact" />
```

## 📏 Size Variants

Three size options to fit different contexts:

- **Small**: Reduced padding and font sizes for tight spaces
- **Medium**: Default balanced sizing
- **Large**: Increased scale for prominent displays

```tsx
<Countdown size="large" />
<Countdown size="small" />
```

## 🎯 Theme System

Built-in theme support with four options:

### Default Theme
Uses existing CSS variables from your design system.

### Dark Theme
Modern dark color scheme with improved contrast.

### Light Theme
Clean light theme for bright interfaces.

### Custom Theme
Complete control through the `colorScheme` prop.

```tsx
<Countdown theme="dark" />
<Countdown theme="custom" colorScheme={{
  primary: '#10B981',
  blockBackground: '#374151'
}} />
```

## 🌈 Color Customization

The `colorScheme` prop provides granular color control:

| Property | Controls | Default |
|----------|----------|---------|
| `primary` | Button background, accents | `var(--ol-colors-blue-500)` |
| `secondary` | Button text | `var(--ol-colors-neutral-0)` |
| `background` | Container background | `transparent` |
| `text` | Title and general text | `var(--ol-colors-neutral-0)` |
| `accent` | Highlight elements | `var(--ol-colors-blue-500)` |
| `blockBackground` | Countdown block backgrounds | `var(--ol-colors-neutral-800)` |
| `blockText` | Numbers and labels in blocks | `var(--ol-colors-neutral-0)` |

```tsx
<Countdown colorScheme={{
  primary: '#EF4444',
  blockBackground: '#FEE2E2',
  blockText: '#DC2626'
}} />
```

## 🔧 Flexible Content Control

### Target Date Customization
```tsx
<Countdown targetDate="2025-12-25T00:00:00" />
<Countdown targetDate={new Date('2025-07-04')} />
```

### Content Options
- Custom titles with `title` prop
- Show/hide title with `showTitle`
- Custom button text with `buttonText`
- Custom button destination with `buttonHref`
- Show/hide button with `showButton`

### Unit Customization
```tsx
// Show only specific units
<Countdown units={['days', 'hours', 'minutes']} />

// Custom labels
<Countdown unitLabels={{
  days: 'Days Left',
  hours: 'Hrs',
  minutes: 'Min'
}} />
```

## 🎭 Advanced Styling Control

### CSS Class Overrides
Target specific elements with custom CSS classes:

```tsx
<Countdown 
  className="my-countdown"
  titleClassName="fancy-title"
  countdownClassName="glass-effect"
  blockClassName="neon-blocks"
  buttonClassName="gradient-button"
/>
```

### Inline Style Props
Direct style control for each element:

```tsx
<Countdown 
  containerStyle={{ 
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '1rem'
  }}
  titleStyle={{ 
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
  }}
  blockStyle={{ 
    backdropFilter: 'blur(10px)' 
  }}
  buttonStyle={{ 
    transform: 'skew(-5deg)' 
  }}
/>
```

### Custom CSS Variables
Inject custom CSS properties:

```tsx
<Countdown customStyles={{
  '--custom-glow': '0 0 20px #00ff00',
  '--custom-border': '2px solid rgba(255,255,255,0.1)'
}} />
```

## ♿ Accessibility & UX Improvements

### Accessibility Features
- **ARIA Labels**: Proper labeling for screen readers
- **Live Updates**: `aria-live="polite"` for countdown updates
- **Semantic HTML**: Uses `<dl>`, `<dt>`, `<dd>` for proper structure
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast Support**: Respects `prefers-contrast: high`

### User Experience
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Transitions**: Subtle animations and hover effects
- **Loading States**: Prevents hydration issues with `hasMounted`

## 📱 Responsive Design

Built-in responsive behavior:

- **Desktop**: Full-size display with all features
- **Tablet** (≤768px): Adjusted spacing and sizes
- **Mobile** (≤480px): Compact layout with minimal spacing

```css
@media (max-width: 768px) {
  .horizontal {
    flex-direction: column;
  }
}
```

## 🚀 Usage Examples

### Basic Usage
```tsx
<Countdown />
```

### Product Launch
```tsx
<Countdown
  targetDate="2025-12-25T00:00:00"
  title="Product Launch"
  buttonText="Notify Me"
  theme="dark"
/>
```

### Hero Section
```tsx
<Countdown
  layout="horizontal"
  size="large"
  title="Grand Opening"
  colorScheme={{
    primary: '#F59E0B',
    text: '#FFFFFF'
  }}
/>
```

### Minimal Widget
```tsx
<Countdown
  layout="minimal"
  size="small"
  showTitle={false}
  showButton={false}
  units={['days', 'hours']}
/>
```

## 🔄 Migration from Previous Version

### Breaking Changes
None! The enhanced component is fully backward compatible.

### New Props Added
All new props have sensible defaults, so existing implementations continue to work unchanged.

### Recommended Updates
Consider using the new `theme` prop instead of manual color overrides:

```tsx
// Old approach
<Countdown 
  headingColor="#FFFFFF"
  launchDateColor="#3B82F6"
/>

// New approach (more flexible)
<Countdown 
  theme="dark"
  colorScheme={{ accent: '#3B82F6' }}
/>
```

## 📊 Performance Considerations

- **CSS Variables**: Efficient runtime theming
- **Conditional Rendering**: Only renders when mounted
- **Optimized Re-renders**: Minimal DOM updates
- **Memory Management**: Proper cleanup of intervals

## 🎉 Summary

The enhanced countdown component provides:

✅ **4 Layout Options** - Vertical, horizontal, compact, minimal  
✅ **3 Size Variants** - Small, medium, large  
✅ **4 Theme Presets** - Default, dark, light, custom  
✅ **7 Color Properties** - Complete color control  
✅ **Multiple Styling Methods** - Classes, inline styles, CSS variables  
✅ **Full Content Control** - Dates, titles, buttons, units  
✅ **Accessibility Compliant** - ARIA, keyboard, contrast support  
✅ **Responsive Design** - Mobile-first approach  
✅ **Backward Compatible** - No breaking changes  

This enhanced version transforms a simple countdown into a highly flexible, design-system-ready component that can adapt to any visual requirement while maintaining excellent performance and accessibility standards.

## Screen Reader Examples
```JSX
import Countdown from './Countdown';

// Example 1: Basic screen reader context
export function BasicSrOnlyCountdown() {
  return (
    <Countdown
      title="Product Launch"
      showSrOnlyText={true}
      srOnlyText="This countdown shows the time remaining until our new product launches on November 4th, 2025. The countdown updates every second."
    />
  );
}

// Example 2: Event context with additional information
export function EventCountdown() {
  return (
    <Countdown
      title="Conference 2025"
      targetDate="2025-09-15T09:00:00"
      showSrOnlyText={true}
      srOnlyText="Annual Tech Conference countdown. Event starts September 15th, 2025 at 9:00 AM Pacific Time. Registration closes when countdown reaches zero."
      buttonText="Register Now"
      buttonHref="/register"
    />
  );
}

// Example 3: Sale countdown with urgency context
export function SaleCountdown() {
  return (
    <Countdown
      title="Flash Sale Ends"
      targetDate="2025-07-01T23:59:59"
      showSrOnlyText={true}
      srOnlyText="Limited time flash sale countdown. Save 50% on all items. Sale automatically ends when this countdown reaches zero. No extensions will be offered."
      theme="dark"
      colorScheme={{
        primary: '#EF4444',
        accent: '#EF4444'
      }}
      buttonText="Shop Sale"
    />
  );
}

// Example 4: Custom sr-only class name
export function CustomSrOnlyCountdown() {
  return (
    <Countdown
      title="Webinar Starts"
      showSrOnlyText={true}
      srOnlyText="Live webinar countdown. Join us for 'Advanced React Patterns' webinar. Link will be activated when countdown reaches zero."
      srOnlyClassName="visually-hidden" // Using custom class name
      layout="horizontal"
    />
  );
}

// Example 5: Detailed accessibility information
export function DetailedAccessibilityCountdown() {
  return (
    <Countdown
      title="Early Bird Ends"
      targetDate="2025-08-20T00:00:00"
      showSrOnlyText={true}
      srOnlyText="Early bird pricing countdown for DevCon 2025. Current discount: 40% off regular ticket price. After countdown expires, pricing increases to standard rates. Countdown displays days, hours, minutes, and seconds remaining. Screen readers will announce updates as time changes."
      buttonText="Get Early Bird Ticket"
      units={['days', 'hours', 'minutes']}
      size="large"
    />
  );
}

// Example 6: Minimal countdown with context
export function MinimalAccessibleCountdown() {
  return (
    <Countdown
      layout="minimal"
      size="small"
      showTitle={false}
      showButton={false}
      showSrOnlyText={true}
      srOnlyText="Time remaining until next session starts."
      units={['minutes', 'seconds']}
      targetDate="2025-06-24T14:30:00"
    />
  );
}

// Example 7: Multiple language support
export function MultiLanguageCountdown() {
  const isSpanish = true; // This would come from your i18n system
  
  return (
    <Countdown
      title={isSpanish ? "Próximo Evento" : "Next Event"}
      showSrOnlyText={true}
      srOnlyText={
        isSpanish 
          ? "Cuenta regresiva para el próximo evento. El evento comienza el 4 de noviembre de 2025. La cuenta regresiva se actualiza cada segundo mostrando días, horas, minutos y segundos restantes."
          : "Countdown to the next event. Event starts November 4th, 2025. Countdown updates every second showing days, hours, minutes, and seconds remaining."
      }
      unitLabels={
        isSpanish 
          ? { days: 'Días', hours: 'Horas', minutes: 'Minutos', seconds: 'Segundos' }
          : undefined
      }
    />
  );
}

// Example 8: Dynamic sr-only text based on time remaining
export function DynamicSrOnlyCountdown() {
  // This would be calculated based on actual time remaining
  const timeLeft = { days: 5, hours: 12, minutes: 30, seconds: 45 };
  
  const generateSrOnlyText = () => {
    if (timeLeft.days > 7) {
      return "More than a week remaining until the event starts.";
    } else if (timeLeft.days > 1) {
      return `${timeLeft.days} days remaining until the event starts. Registration is still open.`;
    } else if (timeLeft.days === 1) {
      return "Less than 24 hours remaining! Final chance to register for the event.";
    } else if (timeLeft.hours > 1) {
      return `Only ${timeLeft.hours} hours remaining until the event starts. Last minute registrations accepted.`;
    } else {
      return "Event starting very soon! Registration may be closed.";
    }
  };

  return (
    <Countdown
      title="Conference Registration"
      showSrOnlyText={true}
      srOnlyText={generateSrOnlyText()}
      buttonText="Register"
    />
  );
}
```