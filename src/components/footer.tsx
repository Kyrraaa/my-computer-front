import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/footer.module.css'

export function Footer() {
  return (
    <section className={styles.footer}>
      {
        <div className={styles.social}>
          <div className={styles.scroll} id="scrollUp">
            <a href="#top">
              <Image src={'/assets/to_top.png'} alt="Logo to the top" width={50} height={50} />
            </a>
          </div>
          <Link className={styles.facebook} href="https://www.facebook.com" target="_blank">
            <Image src={'/assets/facebook_logo.png'} alt="Logo facebook" width={50} height={50} />
          </Link>
          <Link className={styles.insta} href="https://www.instagram.com" target="_blank">
            <Image src={'/assets/insta_logo.png'} alt="Logo insta" width={50} height={50} />
          </Link>
          <Link className={styles.twitter} href="https://www.twitter.com" target="_blank">
            <Image src={'/assets/Twitter-Logo-transparent.png'} alt="Logo twitter" width={50} height={50} />
          </Link>
        </div>
      }

      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
        <li>
          <Link href="/policy">Private Policy</Link>
        </li>
      </ul>
      <p className={styles.copyright}>© 2022 – 2022 Us</p>
      <p className={styles.copyright}>This site is protected by Privacy Policy.</p>
    </section>
  )
}
