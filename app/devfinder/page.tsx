'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/ProfileCard';
import styles from './styles/page.module.css';

import { fetchGitHubUser } from './lib/fetchGitHubUser';

export default function GitHubUserSearchPage() {
  const [username, setUsername] = useState('octocat'); // Default user
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (newUsername: string) => {
    setUsername(newUsername);
  };

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const user = await fetchGitHubUser(username);
        setUserData(user);
      } catch (err) {
        setError(`User "${username}" not found.`);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };
    if (username.trim() !== '') {
      getUser();
    }
  }, [username]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <SearchBar onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {userData && <Card user={userData} />}
      </div>
    </main>
  );
}
