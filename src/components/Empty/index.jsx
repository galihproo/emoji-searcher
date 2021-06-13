import PropTypes from 'prop-types'

import styles from './Empty.module.css'
import imageNotFound from '../../assets/not-found.svg'

const Empty = ({ text, displayImage = "block" }) => {
    return (
        <div className={styles.empty}>
            <img src={imageNotFound} alt="not found icon" style={{ display: displayImage }} />
            <p>{text}</p>
        </div>
    )
}

Empty.propTypes = {
    text: PropTypes.string.isRequired,
    displayImage: PropTypes.string
}

export default Empty;