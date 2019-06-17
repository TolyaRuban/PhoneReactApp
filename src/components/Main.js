import React from 'react';

import Catalog from './main/Catalog';
import Viewer from './main/Viewer';
import Cart from './main/Cart';
import Filter from './main/Filter';
import PhonesService from './services';


class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      phoneSelected: null,
      phoneAdded: {},
      filter: {
        query: "",
        order: "age",
      },
      phones: [],
    };

    this.getAll();
  };

  getAll() {
    PhonesService.getAll(this.state.filter).then(data => {
      this.setState({
        phones: data
      })
    });
  };

  handleClick = id => {
    this.setState({
      phoneSelected: id
    });
  };

  handleBackClick = () => {
    this.setState({
      phoneSelected: ""
    });
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
  
  queryChange = async (event) => {
    let timer = null;
    await this.setState({
      filter: {
        ...this.state.filter,
        query: event.target.value
      }
    });
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.getAll();
    }, 1000)
  };

  orderChange = async (event) => {
    await this.setState({
      filter: {
        ...this.state.filter,
        order: event.target.value
      }
    });
    this.getAll();
    console.log(this.state.filter);
  }

  render() {
    return (
      <main>
        <div className="wrapper">
          <Filter
            queryChange={this.queryChange}
            orderChange={this.orderChange}
            phoneSelected={this.state.phoneSelected}
          />
          <Cart
            name={this.state.phoneAdded}
            onDeletePhone={this.removeItem}
          />
        </div>
        {this.state.phoneSelected ? 
          (<Viewer 
            id={this.state.phoneSelected}
            onBackClicked={this.handleBackClick}
            onAddClicked={this.addItem}
          />) : (
            <>
              <Catalog
                onPhoneClicked={this.handleClick}
                onAddClicked={this.addItem}
                phones={this.state.phones}
              /></>)
            }
      </main>
    );
  };
}


export default Main;