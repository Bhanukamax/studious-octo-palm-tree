import { Category } from 'types/types';

function transformFlatCategoriesToNested(categories: Category[]): any {
  // Create a hash
  const categoryHash: any = categories.reduce(
    (acc, item) => ({ ...acc, [item.id]: { ...item, children: [] } }),
    {}
  );

  // Nest category hash
  Object.keys(categoryHash).forEach((key: string) => {
    const parent = categoryHash[key].parent;
    if (parent === 0) return;

    categoryHash[parent]?.children.push(categoryHash[key]);
  });

  // Filter the parent only categories as an array
  const nestedCategories = Object.keys(categoryHash)
    .map((key: string) => ({
      ...categoryHash[key],
    }))
    .filter((item) => item.parent === '0');

  return nestedCategories;
}

export default transformFlatCategoriesToNested;
