export const filterData = (data, filterCriteria) => {
  return data.filter(d => filterCriteria(d));
};
