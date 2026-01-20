import Link from 'next/link';
import css from './SidebarNotes.module.css';

const tags: { name: string; icon: string; count?: number }[] = [
  { name: 'All notes', icon: '📋', count: 24 },
  { name: 'Todo', icon: '✅', count: 8 },
  { name: 'Work', icon: '💼', count: 12 },
  { name: 'Personal', icon: '👤', count: 6 },
  { name: 'Meeting', icon: '🤝', count: 4 },
  { name: 'Shopping', icon: '🛒', count: 3 },
];

const SidebarNotes = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebarHeader}>
        <h3 className={css.sidebarTitle}>Categories</h3>
      </div>
      <ul className={css.menuList}>
        {tags.map((item, index) => {
          return (
            <li key={index} className={css.menuItem}>
              <Link href={`/notes/filter/${item.name}`} className={css.menuLink}>
                <span className={css.menuIcon}>{item.icon}</span>
                <span className={css.menuText}>{item.name}</span>
                {item.count && <span className={css.menuCount}>{item.count}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarNotes;
