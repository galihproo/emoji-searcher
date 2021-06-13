import styles from './Navbar.module.css'

import searchIcon from '../../assets/search-icon.svg'
import emojiIcon from '../../assets/emoji-icon.svg'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img className={styles.navIcon} src={emojiIcon} alt="emoji icon" />
            <span className={styles.navTitle}>Emoji Searcher</span>
            <img className={styles.navIcon} src={searchIcon} alt="search icon" />
        </nav>
    )
}

export default Navbar;