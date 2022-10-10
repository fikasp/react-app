import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {home: "Home"}
    }
    render() {
        return (
            <div>
                <nav>
                    <h2 className="title">{this.props.headerTitle}</h2>
                    <ul className="navigation">
                        <li>{this.state.home}</li>
                        <li>Blog</li>
                        <li>Artykuły</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;

