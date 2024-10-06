import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="footer-list">
          <li><a href="/about" className="footer-link">About Us</a></li>
          <li><a href="/contact" className="footer-link">Contact Us</a></li>
          <li><a href="/catalog" className="footer-link">Products</a></li>
          <li><a href="/faq" className="footer-link">FAQs</a></li>
        </ul>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
