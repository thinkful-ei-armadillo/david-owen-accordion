import React, {Component} from 'react';

// send the function to here
class BigMenu extends Component {

  render () {
    return (
    <li id={this.props.id}>
      {this.props.title}
      {/* <button onClick={this.props.toggle(this.props.id)} ></button> */}
      <p>{this.props.content}</p>
    </li>
    )
  }
}

export default BigMenu;