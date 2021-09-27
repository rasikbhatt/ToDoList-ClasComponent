import React, { Component } from "react";
import styles from "./Styles.module.css"

class List extends Component {
  render() {
    return (
      <div className={styles.listTask}>
        <p  className={styles.taskContent}>
          {this.props.text}
        </p>
        <span className={styles.submitButton}
        onClick={() => {
          this.props.select(this.props.id);
        }}
        > Done</span>
      </div>
    );
  }
}

export default List;