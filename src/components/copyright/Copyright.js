import React from 'react';
import './Copyright.css';

class Copyright extends React.Component {
    render() {
        return (
            <div className="copy">
                <span >Copyright &copy; {this.props.year} example.com - All rights reserved
                </span>
            </div>
        )
    }
}

export default Copyright;