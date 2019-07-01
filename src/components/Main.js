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
    this.setState({ phones }, this.getFilteredPhones);
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
    this.setState({ filteredPhones });;
    return filteredPhones;
  }

  handleClickSelected = phoneSelected => this.setState({ phoneSelected });

  handleClickBack = phoneSelected => this.setState({ phoneSelected: "" });

  handleClickAddToCart = (phoneId) => {
    this.setState(prevState => {
      const quantity = prevState.phonesCart[phoneId] || 0;
      return {
        phonesCart: {
          ...prevState.phonesCart,
          [phoneId]: quantity + 1
        }
      };
    })
  };

  handleClickRemoveFromCart = (phoneId) => {
    this.setState(prevState => {
      const quantity = prevState.phonesCart[phoneId] || 0;

      if (quantity > 1) {
        return {
          phonesCart: {
            ...prevState.phonesCart,
            [phoneId]: quantity - 1
          }
        };
      } else {
        return delete prevState.phonesCart[phoneId];
      }
    });
  };

  queryChange = (event) => {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        filter: {
          ...prevState.filter,
          query: value
        }
      }
    }, this.getFilteredPhones)
  };

  orderChange = (event) => {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        filter: {
          ...prevState.filter,
          order: value
        }
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
            phonesCart={this.state.phonesCart}
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