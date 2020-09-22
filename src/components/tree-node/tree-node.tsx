import Checkbox from 'components/checkbox';
import getAllFlattenChildren from 'helpers/get-all-flatten-children';
import React from 'react';
import { Category } from 'types/types';
import './tree-node.scss';
interface CategoryNode extends Category {
  children: any;
}

interface TreeNodeProps {
  node: CategoryNode;
  id: string;
  checkedHash: any;
  expandedHash: any;
  onChecked: (selection: string[]) => any;
  onExpanded: (expansion: string[]) => any;
}

function TreeNode({
  node,
  id,
  checkedHash,
  expandedHash,
  onChecked,
  onExpanded,
}: TreeNodeProps) {
  const { name, count, children, id: nodeId } = node;

  // const getSelectedFromHash = ()

  const handleChangeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newCheckedHash = { ...checkedHash, [nodeId]: checked };

    // Get select nodeIds array
    const selected = Object.keys(newCheckedHash)
      .map((key) => ({ id: key, checked: newCheckedHash[key] }))
      .filter((node) => node.checked)
      .reduce((acc: any, theNode) => [...acc, theNode.id], []);

    onChecked(selected);
  };

  const handleChangeExpansion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newExpandedHash = { ...expandedHash, [nodeId]: checked };

    // Get select nodeIds array
    const expanded = Object.keys(newExpandedHash)
      .map((key) => ({ id: key, checked: newExpandedHash[key] }))
      .filter((node) => node.checked)
      .reduce((acc: any, theNode) => [...acc, theNode.id], []);

    onExpanded(expanded);
  };

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    const flattenSubTreeChildren = getAllFlattenChildren(children);
    const subtreeHash = flattenSubTreeChildren.reduce(
      (acc, item) => ({ ...acc, [item]: checked }),
      { ...checkedHash, [nodeId]: checked }
    );

    const selected = Object.keys(subtreeHash)
      .map((key) => ({ id: key, checked: subtreeHash[key] }))
      .filter((node) => node.checked)
      .reduce((acc: any, theNode) => [...acc, theNode.id], []);

    onChecked(selected);
  };

  return (
    <li className='tree-node'>
      <div className='tree-node__body'>
        <div className='tree-node__checkboxes'>
          {children.length > 0 && (
            <>
              <Checkbox
                id={`expand_${id}`}
                checked={expandedHash[nodeId] || false}
                onChange={handleChangeExpansion}
                checkboxStyle='expand'
              />
              <Checkbox
                id={`check_all_${id}`}
                checked={checkedHash[nodeId] || false}
                onChange={handleCheckAll}
                checkboxStyle='checkbox-black'
              />
            </>
          )}
          <Checkbox
            checked={checkedHash[nodeId] || false}
            id={`check_${id}`}
            onChange={handleChangeSelection}
          />
        </div>
        <label htmlFor={`check_${id}`} className='tree-node__label'>
          {name} :{count}
        </label>
      </div>
      {expandedHash[nodeId] && (
        <ul className='tree-node__subtree'>
          {children.map((child: CategoryNode, index: number) => {
            const id = `${Math.floor(Math.random() * 100000)}${index}`;
            return (
              <TreeNode
                node={child}
                id={`sub_${id}`}
                key={id}
                checkedHash={checkedHash}
                expandedHash={expandedHash}
                onChecked={onChecked}
                onExpanded={onExpanded}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default TreeNode;
