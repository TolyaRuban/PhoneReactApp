import React from 'react';


function Phone(props) {
  const { id, name, image, snippet, onLinkClicked, onAddClick } = props;
  return (
    <li
      className="phone"
      data-element="phone-element"
      data-phone-id={id}
    >
      <div className="phone-wrapper">
        <div className="phone__item">
          <a
            onClick={onLinkClicked}
            href={"#!/phones/" + name}
            className="thumb"
            data-element="details-link"
          >
            <img alt={name} src={image} />
          </a>
        </div>
        <div className="phone__item">
          <a className="link"
            onClick={onLinkClicked}
            href={"#!/phones/" + name}
            data-element="details-link"
          >{name}</a>
          <p>{snippet}</p>
        </div>
        <div className="phone__item">
          <a
            className="btn btn-success"
            data-element="add-to-cart"
            onClick={onAddClick}
          >
            Add
            </a>
        </div>
      </div>
    </li>
  )
}

export default Phone;