import React from 'react';
import styles from './styles.module.css'
import './Copyright.css';
import './styles.scss';

class Copyright extends React.Component {
    render() {
        return (
            <div className="copy">
                <span className={styles.info}>Copyright &copy; {this.props.year} example.com - All rights reserved
                </span>
            </div>
        )
    }
}

export default Copyright;