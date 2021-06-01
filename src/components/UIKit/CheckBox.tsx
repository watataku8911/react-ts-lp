import React from "react"
import styles from "./UIKit.module.css"

type Props = {
    label: string,
    name: string,
    checked: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const CheckBox = (props: Props) => {

    return(
        <div className={styles.checkbox}>
            <input type="checkbox" name={props.name} checked={props.checked} onChange={props.onChange} />
            <label>{props.label}</label>
        </div>
    )
}

export default CheckBox