import React, { Component } from "react"
import styles from './list.module.css'


export default class List extends Component{
    render(){
        return <div className={styles.divshoppinglist}>
           <ul onMouseOver={changeBackground}>
               <li>Coffea</li>
               <li>Tea</li>
               <li>Butter</li>
               <li>Cereals</li>
           </ul>
            </div>
    }
}
function changeBackground(e) {
    e.target.style.background = 'darkblue';
  }