import React, { Component } from "react"
import styles from './Card.module.css'


export default class Card extends Component{
    render(){
        return <div className={styles.card}>
            <div className={styles.cardpic}>
            <img src={"the-big-lebowski-the-dude-couch-900x474.jpg"} alt="pic"/>
            </div>
           <b>Moritz Schneider</b>
           <p>Proffessional chiller</p>
            </div>
    }
}