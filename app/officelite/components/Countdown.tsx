'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Countdown.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  return {
    days: Math.max(0, Math.floor(diff / 1000 / 60 / 60 / 24)),
    hours: Math.max(0, Math.floor(diff / 1000 / 60 / 60) % 24),
    minutes: Math.max(0, Math.floor(diff / 1000 / 60) % 60),
    seconds: Math.max(0, Math.floor(diff / 1000) % 60),
  };
}

interface CountdownProps {
  // Core functionality
  targetDate?: string | Date;
  
  // Layout options
  layout?: 'vertical' | 'horizontal' | 'compact' | 'minimal';
  size?: 'small' | 'medium' | 'large';
  
  // Content customization
  title?: string;
  showTitle?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;

  // Accessibility options
  srOnlyText?: string;
  showSrOnlyText?: boolean;
  srOnlyClassName?: string;
  
  // Styling props
  theme?: 'default' | 'dark' | 'light' | 'custom';
  colorScheme?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    accent?: string;
    blockBackground?: string;
    blockText?: string;
  };
  
  // CSS class overrides
  className?: string;
  titleClassName?: string;
  countdownClassName?: string;
  blockClassName?: string;
  buttonClassName?: string;
  
  // Style overrides
  containerStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  countdownStyle?: React.CSSProperties;
  blockStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  
  // Advanced customization
  customStyles?: Record<string, string>;
  units?: Array<'days' | 'hours' | 'minutes' | 'seconds'>;
  unitLabels?: Record<string, string>;
}

const defaultColorSchemes = {
  default: {
    primary: 'var(--ol-colors-blue-500)',
    secondary: 'var(--ol-colors-neutral-0)',
    background: 'transparent',
    text: 'var(--ol-colors-neutral-0)',
    accent: 'var(--ol-colors-blue-500)',
    blockBackground: 'var(--ol-colors-neutral-800)',
    blockText: 'var(--ol-colors-neutral-0)',
  },
  dark: {
    primary: '#3B82F6',
    secondary: '#F8FAFC',
    background: '#0F172A',
    text: '#F8FAFC',
    accent: '#3B82F6',
    blockBackground: '#1E293B',
    blockText: '#F8FAFC',
  },
  light: {
    primary: '#2563EB',
    secondary: '#1E293B',
    background: '#F8FAFC',
    text: '#1E293B',
    accent: '#2563EB',
    blockBackground: '#E2E8F0',
    blockText: '#1E293B',
  },
};

export default function Countdown({
  targetDate = '2025-11-04T00:00:00',
  layout = 'vertical',
  size = 'medium',
  title = 'Coming Soon',
  showTitle = true,
  showButton = true,
  buttonText = 'Get Started',
  buttonHref = '/officelite',
  theme = 'default',
  colorScheme = {},
  className = '',
  titleClassName = '',
  countdownClassName = '',
  blockClassName = '',
  buttonClassName = '',
  containerStyle = {},
  titleStyle = {},
  countdownStyle = {},
  blockStyle = {},
  buttonStyle = {},
  customStyles = {},
  units = ['days', 'hours', 'minutes', 'seconds'],
  unitLabels = {},
  srOnlyText = '',
  showSrOnlyText = false,
  srOnlyClassName = 'sr-only',
}: CountdownProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const parsedTargetDate = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(parsedTargetDate));

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(parsedTargetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [parsedTargetDate]);

  if (!hasMounted) return null;

  // Merge color schemes
  const finalColorScheme = {
    ...(defaultColorSchemes[theme as keyof typeof defaultColorSchemes] || defaultColorSchemes['default']),
    ...colorScheme,
  };

  // Create CSS custom properties
  const cssVariables = {
    '--countdown-primary': finalColorScheme.primary,
    '--countdown-secondary': finalColorScheme.secondary,
    '--countdown-background': finalColorScheme.background,
    '--countdown-text': finalColorScheme.text,
    '--countdown-accent': finalColorScheme.accent,
    '--countdown-block-bg': finalColorScheme.blockBackground,
    '--countdown-block-text': finalColorScheme.blockText,
    ...customStyles,
  };

  // Layout classes
  const layoutClasses = {
    vertical: styles.container,
    horizontal: `${styles.container} ${styles.horizontal}`,
    compact: `${styles.container} ${styles.compact}`,
    minimal: `${styles.container} ${styles.minimal}`,
  };

  // Size classes
  const sizeClasses = {
    small: styles.small,
    medium: '',
    large: styles.large,
  };

  const containerClasses = `${layoutClasses[layout]} ${sizeClasses[size]} ${className}`.trim();

  // Default unit labels
  const defaultUnitLabels = {
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  };

  const finalUnitLabels = { ...defaultUnitLabels, ...unitLabels };

  return (
    <section
      aria-labelledby="countdown-heading"
      className={containerClasses}
      style={{ ...cssVariables, ...containerStyle } as React.CSSProperties}
    >
      {showSrOnlyText && srOnlyText && (
        <p data-testid="sr-launch-info" className={srOnlyClassName}>
          {srOnlyText}
        </p>
      )}

      {showTitle && (
        <h3
          id="countdown-heading"
          className={`${styles.title} ${titleClassName}`.trim()}
          style={{
            color: finalColorScheme.text,
            ...titleStyle,
          }}
        >
          {title}
        </h3>
      )}

      <div 
        className={`${styles.countdownBox} ${countdownClassName}`.trim()} 
        aria-live="polite"
        style={countdownStyle}
      >
        <dl className={styles.list}>
          {units.map((unit) => (
            <div 
              key={unit} 
              className={`${styles.block} ${blockClassName}`.trim()}
              style={{
                backgroundColor: finalColorScheme.blockBackground,
                ...blockStyle,
              }}
            >
              <dt 
                className={styles.term}
                style={{ color: finalColorScheme.blockText }}
              >
                {finalUnitLabels[unit]}
              </dt>
              <dd 
                data-testid={unit} 
                className={styles.definition}
                style={{ color: finalColorScheme.blockText }}
              >
                {timeLeft[unit as keyof TimeLeft]}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {showButton && (
        <div className={styles.buttonContainer}>
          <Link 
            href={buttonHref} 
            className={`${styles.link} ${buttonClassName}`.trim()}
            style={{
              backgroundColor: finalColorScheme.primary,
              color: finalColorScheme.secondary,
              ...buttonStyle,
            }}
          >
            {buttonText}
          </Link>
        </div>
      )}
    </section>
  );
}