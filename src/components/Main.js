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
        order: "name",
        query: ""
      },
      phones: [],
      f: [],
    };

    this.filter = this.filter.bind(this);
    this.sort = this.sort.bind(this);
  };
  componentWillMount() {
    this.getAll();
  }

  getAll() {
    PhonesService.getAll().then(data => {
      this.setState({
        phones: data,
        f: data,
      })
    });

    console.log(this.state.phones);
  };

  filter(event) {
    const phones = [...this.state.f],
      filteredPhones = phones.filter((phone) => {
        return phone.id.toLowerCase().includes(event.target.value.toLowerCase())
      });

    if (event.target.value === '') {
      this.getAll();

    } else {
      this.setState({
        phones: filteredPhones
      })
    }
  }


  sort(event) {
    const order = event.target.value,
      phones = [...this.state.phones];

    let sortedPhonesByOrder;

    function compareString(phoneA, phoneB) {
      const phoneAname = phoneA.name.toLowerCase(),
        phoneBname = phoneB.name.toLowerCase();
      if (phoneAname < phoneBname) {
        return -1;
      }
      if (phoneAname > phoneBname) {
        return 1;
      }
      return 0;
    }

    function compareNumber(phoneA, phoneB) {
      return phoneA.age - phoneB.age
    }

    if (order === 'name') {
      sortedPhonesByOrder = phones.sort(compareString);
    }
    if (order === 'age') {
      sortedPhonesByOrder = phones.sort(compareNumber);
    }

    this.setState({ phones: sortedPhonesByOrder })
  }

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

  render() {
    return (
      <main>
        {/* {console.log(this.state.filter)} */}
        <div className="wrapper">
          <Filter
            search={this.filter}
            sort={this.sort}
            // queryChange={this.queryChange}
            // orderChange={this.orderChange}
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