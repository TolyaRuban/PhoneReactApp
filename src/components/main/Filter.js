import React from 'react';

class Filter extends React.Component {
  render() {
    const { queryChange, orderChange, phoneSelected } = this.props;
    const disabled = phoneSelected ? "disabled" : "";

    return (
      <div className="filter">
        <p>
          Search :
        <input
            data-element="query-field"
            onChange={queryChange}
            disabled={disabled}
            ></input>
        </p>
        <p>
          Sort by :
        <select
            data-element="order-field"
            onChange={(event) => orderChange(event)}
            disabled={disabled}
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