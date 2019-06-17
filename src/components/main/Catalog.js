import React from "react";

import Phone from './Phone';
// import PhonesService from '../services';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }
  
  renderPhones() {
    const { onPhoneClicked, onAddClicked, phones} = this.props;
    return (phones.map((phone) => {
      return (
        <Phone
          id={phone.id}
          key={"phone-" + phone.age}
          name={phone.name}
          image={phone.imageUrl}
          snippet={phone.snippet}
          onLinkClicked={() => {
            onPhoneClicked(phone.id)
          }}
          onAddClick={() => {
            onAddClicked(phone.name)
          }}
        />)
    }))
  };
  
  render() {
    return (
        <ul className="catalog">{this.renderPhones()}</ul>
    );
  }

}


export default Catalog;