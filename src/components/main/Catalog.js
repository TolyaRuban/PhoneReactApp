import React from "react";

import Phone from './Phone';

class Catalog extends React.Component {
  renderPhones() {
    const { onPhoneClicked, onAddClicked, phones} = this.props;
    return (phones.map((phone) => {
      return (
        <Phone
          id={phone.id}
          // key={phone.id}
          name={phone.name}
          image={phone.imageUrl}
          snippet={phone.snippet}
          onLinkClicked={() => {
            onPhoneClicked(phone.id)
          }}
          onAddClick={() => {
            onAddClicked(phone.id)
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