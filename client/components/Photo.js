 import React from 'react';
 import { Link } from 'react-router';
 import CSSTransitionGroup from 'react-addons-css-transition-group';

 const Photo = React.createClass({
   render() {
      const {product, i, info} = this.props;
      return (
         <figure className='grid-figure'>
            <div className="grid-photo-wrap">
               <Link to={`/view/${product.code}`}>
                  <img src={product.display_src} alt={product.caption} className='grid-photo'/>
               </Link>
               <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}>
                  <span key={product.likes} className='likes-heart'>{product.likes}</span>
               </CSSTransitionGroup>
            </div>
            <figcaption>
               <p>{product.caption}</p>
               <div className="control-buttons">
                  <button className="likes">&hearts; {product.likes}</button>
                  <Link className='button' to={`/view/${product.code}`}>
                     <span className="comment-count">
                        <span className="speech-bubble"></span>
                        {info[product.code] ? info[product.code].length : 0}
                     </span>
                  </Link>
               </div>
            </figcaption>
         </figure>

      )
   }
 });

 export default Photo;
