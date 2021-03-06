import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to='/'>Products</Link>>
        </h1>
        {/* a clone of all the elements */}
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
});

export default Main;
