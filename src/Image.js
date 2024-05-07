import './Image.css';
import { Fragment } from 'react';

function Image({height, top, left, source}) {
  return (
    <Fragment>
      <img className='image-base' src={source} style={{ height: height, top: top, left: left }} />
    </Fragment>
  );
}

export default Image;