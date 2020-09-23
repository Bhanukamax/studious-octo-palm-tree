import SelectedItems from 'components/selected-items';
import TreeSelect from 'components/tree-select';
import transformFlatCategoriesToNested from 'helpers/transform-flat-categories-to-nested';
import React, { useEffect, useState } from 'react';
import DataService from 'services/data-service';
import './app.scss';

function App() {
  const [data, setData]: [any[], Function] = useState([]);
  const [checked, setChecked]: [any[], Function] = useState([]);
  const [expanded, setExpanded]: [any[], Function] = useState([]);
  const [itemHash, setItemHash] = useState({});

  const getData = async () => {
    const dataService = new DataService();
    const categories = await dataService.getCategories();

    // Generate a flat list for selected item listing
    const flatItemHash = categories.reduce(
      (acc, item) => ({ ...acc, [item.id]: item }),
      {}
    );
    setItemHash(flatItemHash);

    const all = transformFlatCategoriesToNested(categories);

    setData(all);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className='app-container'>
        <div className='tree'>
          <h2>Select Tree</h2>
          <TreeSelect
            data={data}
            checked={checked}
            expanded={expanded}
            onChangeSelection={(newSelection) => {
              setChecked(newSelection);
            }}
            onExpansionChange={(newExpansion) => {
              setExpanded(newExpansion);
            }}
          />
        </div>
        <SelectedItems selectedIds={checked} itemHash={itemHash} />
      </div>
    </>
  );
}

export default App;
