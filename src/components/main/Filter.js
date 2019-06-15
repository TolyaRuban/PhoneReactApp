import React from 'react';

// class Filter extends React.Component {
//   constructor(props) {
//     super(props);

//   }

  // render() {
function Filter(props) {
  const { search, sort } = props;
    return (
      <div className="filter">
        <p>
          Search :
        <input
            data-element="query-field"
            onChange={search}
          ></input>
        </p>
        <p>
          Sort by :
        <select
            data-element="order-field"
            onChange={(event) => sort(event)}
          >
            <option value="age">Newest</option>
            <option value="name">Alphabetical</option>
          </select>
        </p>
      </div>
    )
  };
// }

export default Filter;