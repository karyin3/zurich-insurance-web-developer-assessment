const fetchData = async (url, pageNum = 1) => {
  const results = await fetch(`${url}?page=${pageNum}`, {
    cache: "no-store"
  }).then(res => res.json());

  return results;
};

export const fetchAllDataRecursive = async (url, pageNum = 1) => {
  const results = await fetchData(url, pageNum);
  console.log(results);
  const { page, total_pages, data } = results;

  if (page < total_pages) {
    return data.concat(await fetchAllDataRecursive(url, pageNum + 1));
  } else {
    return data;
  }
};
