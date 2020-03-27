import React from 'react'

const FeatureCol = ({ src, title, description }) => (
  <div style={{ backgroundColor: 'red' }} className="featurescolumn col-12 col-md-4">
    <img src={src} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default FeatureCol
