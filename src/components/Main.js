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
      phonesCart: {},
      filter: {
        query: "",
        order: "age",
      },
      phones: [],
      filteredPhones: [],
    };

  };

  async componentWillMount() {
    const phones = await PhonesService.getAll();
    this.setState({
      phones: phones,
    }, this.getFilteredPhones)
  }

  getFilteredPhones() {
    const { query, order } = this.state.filter;
    let filteredPhones = this.state.phones;
    filteredPhones = filteredPhones.filter((phone) => {
      return phone.name.toLowerCase().includes(query.toLowerCase());
    });
    switch (order) {
      case 'age':
        filteredPhones.sort((a, b) => a.age - b.age);
        break;
      case 'name':
        filteredPhones.sort((a, b) => a.name.localeCompare(b.name));
    };
    this.setState({ filteredPhones: filteredPhones });
    return filteredPhones;
  }

  handleClickSelected = id => {
    this.setState({
      phoneSelected: id
    });
  };

  handleClickBack = () => {
    this.setState({
      phoneSelected: ""
    });
  };
  
  handleClickAddToCart = (phoneId) => {
    this.setState(prevState => {
      const quantity = prevState.phonesCart[phoneId] || 0;
      const copy = { ...prevState.phonesCart };
      copy[phoneId] = quantity + 1;

      return { phonesCart: copy };
    })
  };

  handleClickRemoveFromCart = (phoneId) => {
      this.setState(prevState => {
        const copy = { ...prevState.phonesCart };
        const count = copy[phoneId] || 0;

        if (count > 1) {
          copy[phoneId] = count - 1;
        } else {
          delete copy[phoneId];
        }

        return { phonesCart: copy };
      });
  };
  
  queryChange = (event) => {
    // let timer = null;
    this.setState({
      filter: {
        ...this.state.filter,
        query: event.target.value
      }
    }, this.getFilteredPhones);
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   this.getAll();
    // }, 1000)
  };

  orderChange = (event) => {
    this.setState({
      filter: {
        ...this.state.filter,
        order: event.target.value
      }
    }, this.getFilteredPhones);
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
            name={this.state.phonesCart}
            onDeletePhone={this.handleClickRemoveFromCart}
          />
        </div>
        {this.state.phoneSelected ? 
          (<Viewer 
            id={this.state.phoneSelected}
            onBackClicked={this.handleClickBack}
            onAddClicked={this.handleClickAddToCart}
          />) : (
            <>
              <Catalog
                onPhoneClicked={this.handleClickSelected}
                onAddClicked={this.handleClickAddToCart}
                phones={this.state.filteredPhones}
              /></>)
            }
      </main>
    );
  };
}

export default Main;