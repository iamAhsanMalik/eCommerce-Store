import React from 'react';
const Rating = ({ starRating, avgRating, color }) => {
  return (
    <>
      <span>
        <i
          style={{ color: color }}
          className={
            starRating >= 1
              ? 'fas fa-star'
              : starRating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            starRating >= 2
              ? 'fas fa-star'
              : starRating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            starRating >= 3
              ? 'fas fa-star'
              : starRating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            starRating >= 4
              ? 'fas fa-star'
              : starRating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            starRating >= 5
              ? 'fas fa-star'
              : starRating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{` ${avgRating && avgRating}`}</span>
    </>
  );
};

Rating.defaultProps = {
  color: 'orange',
};
export default Rating;
