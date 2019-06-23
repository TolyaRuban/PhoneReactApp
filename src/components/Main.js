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
      filteredPhones: [],
    };

  };

  async componentWillMount() {
    const phones = await PhonesService.getAll();
    // const filteredPhones = this.getFilteredPhones();
    // await this.getFilteredPhones();
    this.setState({
      phones: phones,
      // filteredPhones: filteredPhones
    }, this.getFilteredPhones)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   const vitalPropsChange = this.props.bar !== nextProps.bar;
  //   const vitalStateChange = this.state.foo !== nextState.foo;
  //   return vitalPropsChange || vitalStateChange;
  // }

  // getAllPhones() {
  //   const phones = PhonesService.getAll();
  //   return phones;
  // };

  /* getAllPhones() {
    PhonesService.getAll().then(data => {
      this.setState({
        phones: data
      })
    });
  }; */

  getFilteredPhones() {
    const { query, order } = this.state.filter;
    let filteredPhones = this.state.phones;
    console.log(query, order);
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
  
  handleClickAddToCart = (phone) => {
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

  handleClickRemoveFromCart = (phone) => {
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
            name={this.state.phoneAdded}
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