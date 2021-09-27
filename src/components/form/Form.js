import React, { Component } from "react";
import styles from "./Styles.module.css"
import List from "../list/List";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      inputList: []
    };
  }
  aux = [];
  delAux = [];

  addItem = (olditems) => {
    return [...olditems,this.state.inputValue];
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };
  submitValue = () => {
    if(this.state.inputValue!=="")
    this.aux = this.addItem(this.aux);
    // console.log(this.aux);

    this.setState({
      inputList: this.aux,
      inputValue: ""
    });
    // console.log(this.state.inputList)
  };
  deleteItem = (id) => {
    this.delAux = this.aux.filter((arrEle, index) => {
      return index !== id;
    });
    this.aux = this.delAux;
    this.setState({
      inputList: this.delAux
    });
    // console.log(this.delAux[id]);
  };

  render() {
    return (
      <div className={styles.todo}>
        <h1>ToDo List</h1>
        <form onSubmit={(event) => event.preventDefault()}
        className={styles.form}>
          <input
            placeholder="Enter your Task here"
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
            className={styles.enterTask}
          />

          <input type="submit" onClick={this.submitValue} value="Add Task" />
        </form>
        
        <div className={styles.listItems}>
        {this.state.inputList.map((item, index) => (
          <List key={index} id={index} text={item} select={this.deleteItem} />
        ))}
        </div>
      </div>

    );
  }
}

export default Forms;