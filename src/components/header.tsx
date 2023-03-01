import Link from 'next/link'
import styles from '../../styles/header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/account/me">My account</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
