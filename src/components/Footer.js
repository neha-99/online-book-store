import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer mt-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 offset-1 col-sm-2">
                    <h5 style={{ color: 'White' }}>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/order'>Order</Link></li>
                    </ul>
                </div>
                <div className="col-8 col-sm-5">
                    <h5 style={{ color: 'White' }}>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Pune<br />
		              India<br />
                      <FontAwesomeIcon icon={faPhone} /><i></i>: +796 1234 5678<br />
                      <FontAwesomeIcon icon={faFax} /><i ></i>: +531 8765 4321<br />
                      <FontAwesomeIcon icon={faEnvelope} /><i style={{ color: 'White' }}></i>: <a href="buybubble@book.net">
                         buybubble@book.net</a>
                    </address>
                </div>
                
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p style={{ color: 'White' }}>© Copyright 2021 BuyBubble</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;