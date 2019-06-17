import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: ""
    }
  };
  render() {
    const { queryChange, orderChange, phoneSelected } = this.props;
      if (phoneSelected) {
        this.state.disabled = "disabled";
      } else {
        this.state.disabled = "";
      };
    return (
      <div className="filter">
        <p>
          Search :
        <input
            data-element="query-field"
            onChange={queryChange}
            disabled={this.state.disabled}
            ></input>
        </p>
        <p>
          Sort by :
        <select
            data-element="order-field"
            onChange={(event) => orderChange(event)}
            disabled={this.state.disabled}
            >
            <option value="age">Newest</option>
            <option value="name">Alphabetical</option>
          </select>
        </p>
      </div>
    )
  };
}
  
  export default Filter;