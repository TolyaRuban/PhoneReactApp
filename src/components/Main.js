import React from 'react';

import Catalog from './main/Catalog';


class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      phoneSelected: null,
    };

  }

  render() {
    return (
      <main>
        <Catalog
        // onPhoneClicked={this.handleClick}
        // onAddClicked={this.addItem}
        // filter={this.state.filter}
        />
      </main>
    );
  };

}


export default Main;