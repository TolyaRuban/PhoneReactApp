import React from 'react';

import PhonesService from '../services';


class Viewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: {
        id: "",
        images: [],
        name: "",
        description: ""
      },
      mainImageUrl: "",
    }

  }
  selectImage(mainImageUrl) { this.setState({ mainImageUrl }) }

  componentDidMount() {
    const { id } = this.props;
    if (id) {
      PhonesService.getById(id).then(data => {
        this.setState({
          phone: data,
          mainImageUrl: data.images[0]
        })
      })
    }
  }

  renderImgs() {
    return (this.state.phone.images.map((img, i) => {
      return (
        <li key={i}>
          <img
            src={img}
            alt={this.state.phoneId}
            data-element="small-preview"
            key={this.state.phoneId}
            onClick={() => {
              this.selectImage(img)
            }}>
          </img>
        </li>
      )
    }))
  }

  render() {
    const { id, name, description } = this.state.phone;
    const { onBackClicked, onAddClicked } = this.props;
    return (
      <div className="phoneViewer">
        <img
          alt={name}
          className="phoneDetail mainImageUrl"
          src={this.state.mainImageUrl}
          data-element="big-preview"
        ></img>
        <div className="phoneViewer__info">
          <div
            data-element="phone-element"
            data-phone-id={id}
            className="buttons">
            <button
              href="#"
              className="btn"
              data-element="back-button"
              onClick={onBackClicked}>
              Back
					      </button>
            <button
              className="btn"
              data-element="add-to-cart"
              onClick={() => {
                onAddClicked(name)
              }}>
              Add to basket
			              </button>
          </div>
          <h1>{name}</h1>
          <p>{description}</p>
          <ul className="phone-thumbs">
            {this.renderImgs()}
          </ul>
        </div>
      </div>
    )
  }
}


export default Viewer;