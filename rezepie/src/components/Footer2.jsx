import "../styles/Footer.css"
export const Footer2 = () => {
    return (
        <footer className="footer2">
            <div className="newsletter">
                <h3>Subscribe to Our Newsletter</h3>
                <form>
                    <input type="email" placeholder="Your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: info@recepiemaster.com</p>
                <p>Phone: +49 157 456 78905</p>
            </div>
            <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Recipe Master. All rights reserved.</p>
            </div>
        </footer>
    );
};