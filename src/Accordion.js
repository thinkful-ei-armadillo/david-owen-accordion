import React, {Component} from 'react';
import BigMenu from './BigMenu';
import SmallMenu from './SmallMenu';


class Accordion extends Component {
  state = {
    clicked: null

  }

  toggleClicked = (id) => {
    this.setState({clicked: id})
  }

  render () {
    console.log(this.state);
    return (
      <ul className="menus">
      {this.props.sections.map((item, index) => (index === this.state.clicked) ? <BigMenu key={index} id={index} title={item.title} content={item.content} toggle={this.toggleClicked} /> : <SmallMenu key={index} id={index} title={item.title} toggle={this.toggleClicked} />)}
      </ul>
    )
  }
}



export default Accordion;