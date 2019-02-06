import React, {Component} from 'react';

class SmallMenu extends Component {
  handleClicked = () => {
    this.props.toggle(this.props.id)
  }

  render() {
    // console.log(this.props);
    return (
      <li id={this.props.id}>
        <button onClick={this.handleClicked} >{this.props.title}</button>
      </li>
      )
  }
}

export default SmallMenu;