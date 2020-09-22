import React from 'react';
import './selected-items.scss';

interface Props {
  items: string[];
}

function SelectedItems({ items }: Props) {
  return (
    <div className='selected-items'>
      <h2 className='selected-items__title'>Selected Items:</h2>
      <div className='selected-items__items'>
        {items.map((item) => (
          <div className='selected-items__item'>{item}</div>
        ))}
      </div>
    </div>
  );
}
export default SelectedItems;
