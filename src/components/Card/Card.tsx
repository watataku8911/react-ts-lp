import React from "react"
import styles from "./Card.module.css"
import InViewMonitor from "react-inview-monitor"


type Props = {
    title: string
    description: string
    imagePath: string
}
const Card = (props: Props) => {
    return(
            <section className={styles.contents}>
                <div className={styles.inner}>
                    <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInLeft slower'>
                        <img src={props.imagePath} alt={props.title} className={styles.img} />
                    </InViewMonitor>
                    <div className={styles.description}>
                        <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                            <h1 className={styles.title}>{props.title}</h1>
                        </InViewMonitor>
                        <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInUp slower'>
                            <p className={styles.text}>{props.description}</p>
                        </InViewMonitor>
                    </div>
                </div>
            </section>
    )
}
export default Card;