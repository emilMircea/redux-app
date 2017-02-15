import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const ProductGrid = React.createClass({
  render() {
    return (
      <div className='photo-grid'>
        { this.props.products.map(
          (product, i) =>
            <Photo
              key={i} i={i}
              {...this.props}
              product={product}
            />
          )
        }
      </div>
    )
  }
});

export default ProductGrid;
