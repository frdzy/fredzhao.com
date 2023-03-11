import React from 'react';

import Building20 from './Building20';
import photoData from './photo_data';

const Building20Container = (props) => {
  const orderedPhotoData = photoData
    .map(function (photo) {
      return {
        id: photo.id,
        caption: photo.caption,
        path: photo.path,
        timestamp: new Date(photo.timestamp),
      };
    })
    .sort(function (photoA, photoB) {
      // Sort by ascending (oldest first)
      return photoA.timestamp - photoB.timestamp;
    });

  const photoIndices = {};
  let photoIndex = 0;
  orderedPhotoData.forEach(function (photo) {
    photoIndices[photo.id] = photoIndex++;
  });

  return (
    <Building20 photoData={orderedPhotoData} photoIndices={photoIndices} />
  );
};

export default Building20Container;
