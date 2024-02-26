/* eslint-disable operator-linebreak */
import React from 'react';

export default function CardImage(prop) {
  const { value, name } = prop;
  let imageSource;

  if (value === 0) {
    imageSource =
      'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else if (value === 1) {
    imageSource =
      'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else if (value === 2) {
    imageSource =
      'https://images.pexels.com/photos/4633837/pexels-photo-4633837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else if (value === 3) {
    imageSource =
      'https://images.pexels.com/photos/5614516/pexels-photo-5614516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else if (value === 4) {
    imageSource =
      'https://images.pexels.com/photos/2180805/pexels-photo-2180805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else if (value === 5) {
    imageSource =
      'https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else if (value === 6) {
    imageSource =
      'https://images.pexels.com/photos/2135883/pexels-photo-2135883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  } else {
    imageSource =
      'https://images.pexels.com/photos/1022929/pexels-photo-1022929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  }

  return (
    <img
      className={name}
      src={imageSource}
      alt="card"
      width="auto"
      data-url={imageSource}
    />
  );
}
