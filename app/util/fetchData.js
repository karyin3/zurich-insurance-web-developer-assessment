export const fetchData = async (url, params) => {
  const queryParams = new URLSearchParams(params)
  const results = await fetch(`${url}?${queryParams}`, {
    cache: "no-store"
  }).then(res => res.json());

  return results;
};

export const fetchAllPages = async (url, pageNum = 1) => {
  const results = await fetchData(url, {'page': pageNum});
  const { page, total_pages, data } = results;

  if (page < total_pages) {
    return data.concat(await fetchAllPages(url, pageNum + 1));
  } else {
    return data;
  }
};
