import Link from 'next/link';
import styles from './styles.module.scss';
import {BiLogInCircle} from "react-icons/bi"

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
              <li><Link href={'/'}><BiLogInCircle size={30}/></Link></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
