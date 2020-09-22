import TreeNode from 'components/tree-node';
import React from 'react';

interface Props {
  data: any[];
  checked: string[];
  expanded: string[];
  onChangeSelection: (change: string[]) => any;
  onExpansionChange: (change: string[]) => any;
}

function TreeSelect({
  data,
  checked,
  expanded,
  onChangeSelection,
  onExpansionChange,
}: Props) {
  const checkedHash = checked.reduce((acc, id) => ({ ...acc, [id]: true }), {});
  const expandedHash = expanded.reduce(
    (acc, id) => ({ ...acc, [id]: true }),
    {}
  );
  return (
    <>
      <ul>
        {data.map((node, index) => (
          <TreeNode
            node={node}
            key={index}
            id={`root-${index}`}
            checkedHash={checkedHash}
            expandedHash={expandedHash}
            onChecked={onChangeSelection}
            onExpanded={onExpansionChange}
          />
        ))}
      </ul>
    </>
  );
}

export default TreeSelect;
