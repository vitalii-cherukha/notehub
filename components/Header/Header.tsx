'use client';

import Link from 'next/link';
import css from './Header.module.css';
import AuthNavigation from '../AuthNavigation/AuthNavigation';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.logo} aria-label="Home">
          <span className={css.logoIcon}>📝</span>
          NoteHub
        </Link>
        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link className={css.navigationLink} href="/">
                Home
              </Link>
            </li>
            <AuthNavigation />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
