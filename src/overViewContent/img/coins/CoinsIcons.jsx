import React from 'react';
import IconsSVG from './CoinIcons.svg'

function CoinsIcons({ name, color, size }) {

  return (
    <svg className={`icon icon-${name}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default CoinsIcons;