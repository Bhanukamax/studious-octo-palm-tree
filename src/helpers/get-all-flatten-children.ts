function getAllFlattenChildren(data: any[]): string[] {
  return data.reduce((acc, item) => {
    return [...acc, ...getAllFlattenChildren(item.children), item.id];
  }, []);
}

export default getAllFlattenChildren;
