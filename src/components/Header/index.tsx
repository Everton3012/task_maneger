import Link from 'next/link';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <>
      <section className={styles.header}>
        <div>
          <h1  className={styles.logo}><Link href={'/'}>TASK<span>MANAGER</span></Link></h1>
        </div>
        <div className={styles.nav}>
          <nav>
            <ul>
              <li><Link href={'/'}>HOME</Link></li>
              <li><Link href={'/'}>SOBRE</Link></li>
              <li><Link href={'/'}>LOGIN</Link></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
