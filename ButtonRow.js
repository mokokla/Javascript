import { Component } from "react";
import SuperButton from "./SuperButton";
import styles from "./ButtonRow.module.css";

export default class ButtonRow extends Component{
    render(){
        return(
            <div className={styles.row}>
                <SuperButton/>
                <SuperButton/>
                <SuperButton/>
            </div>
        )
    }
}