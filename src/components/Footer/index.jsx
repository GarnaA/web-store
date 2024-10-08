import styles from '../Footer/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.nav_container}>
          <li><a href="/about" className={styles.link}>About Us</a></li>
          <li><a href="/contact" className={styles.link}>Contact Us</a></li>
          <li><a href="/catalog" className={styles.link}>Products</a></li>
          <li><a href="/faq" className={styles.link}>FAQs</a></li>
        </ul>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
