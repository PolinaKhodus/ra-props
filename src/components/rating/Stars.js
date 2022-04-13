import PropTypes from 'prop-types';
import Star from './Star';

export default function Stars({ count }) {

  function getStars(count) {
    const stars = [];
    
    for (let i = 0; i < count; i++) {
      stars.push(i);
    }

    return stars;
  }
  
  const starElement = typeof count === 'number' &&
      count >= 1 &&
      count <= 5 &&      
      <>
        {getStars(count).map((star, idx) => <Star key = {idx}/>)}
      </>

  return (
    <ul className='card-body-stars'>
      {starElement}
    </ul>
  )
}

Stars.propTypes = {
  count: PropTypes.number,
};
