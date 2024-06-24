
import Link from 'next/link';
import styles from './styles.module.scss';
import { BiLogInCircle } from "react-icons/bi"
import { Container } from '../Container';

export const Header = () => {
  return (
    <>
      <Container>
      <section className={styles.header}>
        <div>
          <h1 className={styles.logo}><Link href={'/'}>TASK<span>MANAGER</span></Link></h1>
        </div>
        <div className={styles.nav}>
          <nav>
            <ul>
              <li>
                  <Link href={'/login'}>
                    <BiLogInCircle size={30} />
                  </Link>
                </li>
            </ul>
          </nav>
        </div>
      </section>
      </Container>
    </>
  )
}
