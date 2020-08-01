import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        return (
            <section className={styles.component}>
                <div>{this.props.title}</div>
            </section>
        )
    }
}

export default Card; 
