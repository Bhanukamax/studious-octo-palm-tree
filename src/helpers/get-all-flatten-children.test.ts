import getAllFlattenChildren from './get-all-flatten-children';

const children = [
  { id: '111', count: 1, parent: '14559', name: 'Broeken', children: [] },
  {
    id: '222',
    count: 1,
    parent: '14559',
    name: 'Broeken',
    children: [
      { id: '333', count: 1, parent: '14559', name: 'Broeken', children: [] },
      {
        id: '444',
        count: 1,
        parent: '14559',
        name: 'Broeken',
        children: [
          {
            id: '555',
            count: 1,
            parent: '14559',
            name: 'Broeken',
            children: [
              {
                id: '666',
                count: 1,
                parent: '14559',
                name: 'Broeken',
                children: [],
              },
              {
                id: '777',
                count: 1,
                parent: '14559',
                name: 'Broeken',
                children: [],
              },
            ],
          },
          {
            id: '888',
            count: 1,
            parent: '14559',
            name: 'Broeken',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '999',
    count: 1,
    parent: '14559',
    name: 'Broeken',
    children: [
      {
        id: '101010',
        count: 1,
        parent: '14559',
        name: 'Broeken',
        children: [],
      },
      {
        id: '111111',
        count: 1,
        parent: '14559',
        name: 'Broeken',
        children: [],
      },
    ],
  },
];

test('get all the children ids', () => {
  const resultFlattenChildren = getAllFlattenChildren(children);
  const flattenChildren = [
    '111',
    '222',
    '333',
    '444',
    '555',
    '666',
    '777',
    '888',
    '999',
    '101010',
    '111111',
  ];

  expect(resultFlattenChildren).toEqual(
    expect.arrayContaining(flattenChildren)
  );

  expect(flattenChildren).toEqual(
    expect.arrayContaining(resultFlattenChildren)
  );
});
