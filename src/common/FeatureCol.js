import React from 'react'

const FeatureCol = ({ src, title, description }) => (
  <div style={{
    backgroundColor: 'rgba(196, 201, 255, 1)', borderRadius: 50, width: '80%',
  }} className="featurescolumn col-12 col-md-4">
    <img src={src} alt='Collobus'/>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default FeatureCol
