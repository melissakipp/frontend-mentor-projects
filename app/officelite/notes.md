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