import React from 'react';

function Filter(props) {
  const { queryChange, orderChange } = props;
    return (
      <div className="filter">
        <p>
          Search :
        <input
            data-element="query-field"
            onChange={queryChange}
          ></input>
        </p>
        <p>
          Sort by :
        <select
            data-element="order-field"
            onChange={(event) => orderChange(event)}
          >
            <option value="age">Newest</option>
            <option value="name">Alphabetical</option>
          </select>
        </p>
      </div>
    )
  };

export default Filter;