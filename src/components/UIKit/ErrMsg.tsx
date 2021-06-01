import React from "react"
import styles from "./UIKit.module.css"

type Props = {
    msg: string
}

const ErrMsg = (props: Props) => {
    return(
        <p className={styles.err}>{props.msg}</p>
    )
}
export default ErrMsg