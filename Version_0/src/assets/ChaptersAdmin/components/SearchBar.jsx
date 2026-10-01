import React from 'react';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2a2d5994f3e7591026d17b75e05a400996b2106b14f2cd9dad3595ff535358b?placeholderIfAbsent=true&apiKey=5a8b57bfa53549b49da7230dbeeac956" 
        className={styles.searchIcon}
        alt=""
      />
      <input 
        type="search"
        className={styles.searchInput}
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
};