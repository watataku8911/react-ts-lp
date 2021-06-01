import React from "react";
import styles from"./MainImage.module.css"

const MainImage = () => {
    return(
        <section>
            <div className={styles.main_image}>
                <h1 className={styles.title}>React + TypeScriptの練習(LP制作)</h1>
            </div>
        </section>
    )
}

export default MainImage