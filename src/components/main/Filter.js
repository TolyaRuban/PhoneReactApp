import React from 'react';

// class Filter extends React.Component {
//   constructor(props) {
//     super(props);

//   }

  // render() {
function Filter(props) {
  // const { search, sort } = props;
  const { queryChange, orderChange } = props;
    return (
      <div className="filter">
        <p>
          Search :
        <input
            data-element="query-field"
            // onChange={search}
            onChange={queryChange}
          ></input>
        </p>
        <p>
          Sort by :
        <select
            data-element="order-field"
            // onChange={(event) => sort(event)}
            onChange={(event) => orderChange(event)}
          >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>
      </div>
    )
  };
// }

export default Filter;