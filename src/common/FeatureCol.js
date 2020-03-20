import React from 'react';

const FeatureCol = ({ src, title, description }) => (
  <div className="featurescolumn">
    <img src={src} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default FeatureCol;
