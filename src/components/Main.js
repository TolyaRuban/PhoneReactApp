import React from 'react';

import Catalog from './main/Catalog';
import Viewer from './main/Viewer';
import Cart from './main/Cart';



class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      phoneSelected: null,
      phoneAdded: {},
    };
  };

  handleClick = id => {
    this.setState({
      phoneSelected: id
    })
  };

  handleBackClick = () => {
    this.setState({
      phoneSelected: ""
    })
  };
  
  addItem = (phone) => {
    let i = this.state.phoneAdded[phone];
    if (!this.state.phoneAdded.hasOwnProperty(phone)) {
      i = 0;
    }
    ++i;
    this.setState({
      phoneAdded: {
        ...this.state.phoneAdded,
        [phone]: i
      }
    })
  };

  removeItem = (phone) => {
    let i = this.state.phoneAdded[phone];
    --i;
    if (this.state.phoneAdded.hasOwnProperty(phone)) {
      this.setState({
        phoneAdded: {
          ...this.state.phoneAdded,
          [phone]: i
        }
      })
    }
    if (i === 0) {
      delete this.state.phoneAdded[phone];
      this.setState(this.state)
    }
  };


  render() {
    return (
      <main>
        <Cart 
          name={this.state.phoneAdded}
          onDeletePhone={this.removeItem}
        />

        {this.state.phoneSelected ? 
          (<Viewer 
            id={this.state.phoneSelected}
            onBackClicked={this.handleBackClick}
            onAddClicked={this.addItem}

          />) :
          <Catalog
            onPhoneClicked={this.handleClick}
            onAddClicked={this.addItem}

          // filter={this.state.filter}
          />
        }
      </main>
    );
  };

}


export default Main;