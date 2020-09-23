import React from 'react';
import './selected-items.scss';

interface Props {
  selectedIds: string[];
  itemHash: any;
}

function SelectedItems({ selectedIds: items, itemHash }: Props) {
  return (
    <div className='selected-items'>
      <h2 className='selected-items__title'>Selected Items:</h2>
      <div className='selected-items__items'>
        {Object.keys(itemHash).length > 0 &&
          items.map((id: string) => (
            <div className='selected-items__item'>
              {itemHash[id].name}: {itemHash[id].count}
            </div>
          ))}
      </div>
    </div>
  );
}
export default SelectedItems;
