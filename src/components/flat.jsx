import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, index } = this.props;

    selectFlat(index);
  }

  render() {
    const { flat, selected } = this.props;
    return (
      <div
        className={`card${selected ? ' active' : ''}`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)),
                 url('${flat.imageUrl}')`
        }}>
        <div className="card-category">
          {flat.price} {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a href="#"
           className="card-link"
           onClick={this.handleClick}>
        </a>
      </div>
    );
  }
}

export default Flat;
