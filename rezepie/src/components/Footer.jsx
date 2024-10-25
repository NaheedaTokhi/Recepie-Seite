import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // 

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Stay Connected</h2>
                <p>Follow us on social media for more recipes and updates!</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Recipe Master. All rights reserved.</p>
            </div>
        </footer>
    );
};


{/*
 export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Stay Connected</h2>
                <p>Follow us on social media for more recipes and updates!</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
                </div>
            </div>
            <div className="footer-navigation">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div>
            <div className="newsletter">
                <h3>Subscribe to Our Newsletter</h3>
                <form>
                    <input type="email" placeholder="Your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: info@recipeapp.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="recipe-categories">
                <h3>Popular Categories</h3>
                <ul>
                    <li><a href="/categories/vegan">Vegan</a></li>
                    <li><a href="/categories/vegetarian">Vegetarian</a></li>
                    <li><a href="/categories/desserts">Desserts</a></li>
                    <li><a href="/categories/healthy">Healthy Recipes</a></li>
                    <li><a href="/categories/quick">Quick Recipes</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved. | Crafted with love.</p>
            </div>
        </footer>
    );
};   
    
    */}

