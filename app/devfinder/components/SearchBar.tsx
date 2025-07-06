'use client';

import { useState, FormEvent } from 'react';
import styles from '../styles/SearchBar.module.css';

/**
 * Props for SearchBar
 * @param onSearch - Function to handle username search
 */
interface SearchBarProps {
  onSearch: (username: string) => void;
}

/**
 * SearchBar Component
 * Allows users to enter a GitHub username and trigger a search
 */
export default function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSearch(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.searchInput}
        aria-label="GitHub Username"
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
