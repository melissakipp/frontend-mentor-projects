'use client';

import React, { useState, useRef, FormEvent, useEffect } from 'react';
import styles from './RatingCard.module.css';
import { Rating, RatingCardProps } from './types';

/**
 * Interactive Rating Component
 * 
 * A component that allows users to select a rating from 1-5 and submit feedback
 */
export default function RatingCard({
  title = "How did we do?",
  description = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
  onRatingSubmit,
  initialRating = null,
  thankYouMessage = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
}: RatingCardProps): React.ReactElement {
  // State management with typed variables
  const [selectedRating, setSelectedRating] = useState<Rating>(initialRating);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  
  // Effect to sync with initialRating prop if it changes
  useEffect(() => {
    if (initialRating !== null) {
      setSelectedRating(initialRating);
    }
  }, [initialRating]);
  
  /**
   * Handle rating selection
   * @param rating - The rating value selected by the user
   */
  const handleRatingSelection = (rating: number): void => {
    // Type assertion to ensure rating is within our Rating type
    setSelectedRating(rating as Rating);
  };
  
  /**
   * Handle form submission
   * @param e - The form submission event
   */
  const handleSubmission = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!selectedRating) {
      // Visual feedback for error via ref
      if (submitButtonRef.current) {
        submitButtonRef.current.classList.add(styles.error);
        
        // Remove error class after animation
        setTimeout(() => {
          if (submitButtonRef.current) {
            submitButtonRef.current.classList.remove(styles.error);
          }
        }, 500);
      }
      
      return;
    }
    
    // Call the callback if provided
    if (onRatingSubmit && selectedRating !== null) {
      onRatingSubmit(selectedRating);
    }
    
    setIsSubmitted(true);
  };
  
  /**
   * Reset the rating form to its initial state
   */
  const resetRating = (): void => {
    setSelectedRating(initialRating);
    setIsSubmitted(false);
  };
  
  // Array of available ratings
  const ratings: number[] = [1, 2, 3, 4, 5];
  
  return (
    <div className={styles.card__wrapper}>
      {!isSubmitted ? (
        <form ref={formRef} onSubmit={handleSubmission} aria-label="Rating form">
          <section className={styles.card}>
            <div className={styles.card__icon_background}>
              <img src="/images/ratings-card/icon-star.svg" aria-hidden="true" alt="" className={styles.card__icon} />
            </div>
            
            <div className={styles.card__container}>
              <h2 className={styles.card__title}>{title}</h2>
              <p className={styles.card__description}>{description}</p>
            </div>

            <div className={styles.rating} role="radiogroup" aria-label="Rating options">
              {ratings.map((rating) => (
                <button
                  key={rating}
                  type="button"
                  className={`${styles.rating__button} ${selectedRating === rating ? styles.rating__button_selected : ''}`}
                  aria-label={`Rate ${rating} out of 5`}
                  aria-checked={selectedRating === rating}
                  role="radio"
                  onClick={() => handleRatingSelection(rating)}
                >
                  {rating}
                </button>
              ))}
            </div>

            <button 
              ref={submitButtonRef}
              className={styles.submit} 
              type="submit"
              disabled={!selectedRating}
            >
              Submit
            </button>
          </section>
        </form>
      ) : (
        <section className={styles.thank_you}>
          <img 
            src="/images/ratings-card/illustration-thank-you.svg" 
            alt="Thank you illustration" 
            className={styles.thank_you__image} 
          />
          <p className={styles.thank_you__rating}>
            You selected {selectedRating} out of 5
          </p>
          <h2 className={styles.card__title}>Thank you!</h2>
          <p className={styles.card__description}>{thankYouMessage}</p>
          <button 
            className={styles.reset_button} 
            type="button" 
            onClick={resetRating}
            aria-label="Rate again"
          >
            Rate again
          </button>
        </section>
      )}
    </div>
  );
}