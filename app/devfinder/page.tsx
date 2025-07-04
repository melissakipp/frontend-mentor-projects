import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/ProfileCard';

import styles from './styles/page.module.css';

export default function GitHubUserSearchPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <SearchBar />
        <Card />
      </div>
    </main>
  );
}




//   Search GitHub username...
//   Search

//   Joined

//   Repos
//   Followers
//   Following
