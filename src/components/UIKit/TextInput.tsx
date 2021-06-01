import React from "react"
import styles from "./UIKit.module.css"

type Props = {
    type: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = (props: Props) => {
    return(
        <input className={styles.input} type={props.type}  name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    )
}

export default TextInput