import React, { useCallback, useState } from "react"
import TextInput from "../UIKit/TextInput"
import Button from "../UIKit/Button"
import CheckBox from "../UIKit/CheckBox"
import ErrMsg from "../UIKit/ErrMsg"
import styles from "./Form.module.css"
import InViewMonitor from "react-inview-monitor"

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const [isEmpty, setEmpty] = useState(false);
    const [isValidEmail, setValidEmail] = useState(false);

    const inputFirstName = useCallback((event) => {
        setFirstName(event.target.value);
    }, [setFirstName])

    const inputLastName = useCallback((event) => {
        setLastName(event.target.value);
    }, [setLastName])

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [setEmail])

    const changeDisabled = () => {
        setChecked(!checked);
    }

    const send = () => {
        const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        if(firstName.length === 0 && lastName.length === 0 && email.length === 0) {
            setEmpty(true);
            setValidEmail(false);
        } else if(!regex.test(email)) {
            setEmpty(false);
            setValidEmail(true);
        } else {
            alert("送信しました。\n※DEMOページなのでどこにも飛ばしていません");
            setFirstName("");
            setLastName("");
            setEmail("");
            setChecked(false);
            setEmpty(false);
            setValidEmail(false);
        }
    }



    return(
        <section className={styles.form}>
            <div className="module--spacing--large"></div>
            {isEmpty && <ErrMsg msg={"全て必須項目です。"} />}
            {isValidEmail && <ErrMsg msg={"メアドの形式がおかしいです。"} />}
            <div className={styles.name}>
                <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInLeft slower'>
                    <TextInput type={"text"} name={"firstname"} placeholder={"田中"} value={firstName} onChange={inputFirstName} />
                </InViewMonitor>
                <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInRight slower'>
                <   TextInput type={"text"} name={"lastname"} placeholder={"太郎"} value={lastName} onChange={inputLastName} />
                </InViewMonitor>
            </div>
            <div className="module--spacing--large"></div>
            <div className="module--spacing--large"></div>
            <div className="module--spacing--large"></div>
            <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInUp slower'>
                <TextInput type={"email"} name={"email"} placeholder={"hogehoge@example.com"} value={email} onChange={inputEmail} />
            </InViewMonitor>
            <div className="module--spacing--large"></div>
                <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInUp slower'>
                    <CheckBox label={"I checked all input information."} name={"agree"} checked={checked} onChange={changeDisabled} />
                </InViewMonitor>
            <div className="module--spacing--large"></div>
            <InViewMonitor classNameNotInView='hidden' classNameInView='animate__animated animate__fadeInUp slower'>
                <Button label={"送信"} disabled={!checked} onClick={send}/>
            </InViewMonitor>
        </section>
    )
}

export default Form