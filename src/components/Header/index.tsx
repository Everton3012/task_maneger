import Link from 'next/link';
import styles from './styles.module.scss';


export const Header = () => {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.logo}>
          <h1>TASK<span>MANAGER</span></h1>
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
