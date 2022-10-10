import React from 'react';
import './Footer.css';

function Footer(props) {
    return(
        <div>
            <footer>
                <ul>
                    <li>Regulamin</li>
                    <li>FAQ</li>
                    <li>O nas</li>
                    <li>Kontakt: {props.companyData.email}</li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;
