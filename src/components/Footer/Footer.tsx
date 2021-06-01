import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <small>
                <a href="https://watataku-portfolio.web.app" target="blank" className={styles.link}>
                    &copy;2021 Watataku
                </a>
            </small>
        </footer>
    )
}

export default Footer