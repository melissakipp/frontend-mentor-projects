/**
 * Types for the Rating Component
 */

/**
 * Rating value type
 * Represents the possible rating values (1-5) or null when unselected
 */
export type Rating = 1 | 2 | 3 | 4 | 5 | null;

/**
 * Props for the RatingCard component
 */
export interface RatingCardProps {
  /** Optional custom title for the rating card */
  title?: string;
  /** Optional custom description text */
  description?: string;
  /** Optional callback function when rating is submitted */
  onRatingSubmit?: (rating: number) => void;
  /** Optional initial rating value */
  initialRating?: Rating;
  /** Optional custom thank you message */
  thankYouMessage?: string;
}