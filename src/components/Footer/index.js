import { Component } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import "./index.css";

class Footer extends Component {
  state = { emailInput: "" };

  updateEmail = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  render() {
    const { emailInput } = this.state;
    return (
      <div className="footer-container">
        <div className="card-container">
          <div>
            <p className="heading-text">Be the first to know</p>
            <p className="text">Sign up for updates from mettā muse.</p>
            <div className="input-container">
              <input
                onChange={this.updateEmail}
                className="text-input"
                type="text"
                placeholder="Enter your e-mail..."
                value={emailInput}
              />
              <button className="sub-button">SUBSCRIBE</button>
            </div>
          </div>
          <div>
            <p className="heading-text">CONTACT US</p>
            <p className="text">+44 221 133 5360</p>
            <p className="text">customercare@mettamuse.com</p>
            <p className="heading-text">Currency</p>
            <p className="text">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="box-container">
          <ul className="muse-container">
            <li className="heading-text">mettā muse</li>
            <li className="text">About us</li>
            <li className="text">Stories</li>
            <li className="text">Artisans</li>
            <li className="text">Boutiques</li>
            <li className="text">Contact Us</li>
            <li className="text">EU Compliances Docs</li>
          </ul>
          <ul className="muse-container">
            <li className="heading-text">QUICK LINKS</li>
            <li className="text">Orders & Shipping</li>
            <li className="text">Join/Login as a Seller</li>
            <li className="text">Payment & Pricing</li>
            <li className="text">Return & Refunds</li>
            <li className="text">FAQs</li>
            <li className="text">Privacy Policy</li>
            <li className="text">Terms & Conditions</li>
          </ul>
          <div className="muse-container">
            <p className="heading-text">FOLLOW US</p>
            <div className="follow-conatiner">
              <button className="follow-button">
                <AiFillInstagram className="follow-icon" />
              </button>
              <button className="follow-button">
                <FaLinkedin className="follow-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
