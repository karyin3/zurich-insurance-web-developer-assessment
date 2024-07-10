const baseUrl = "https://reqres.in/api/users";

const fetchData = async (pageNum = 1) => {
  const results = await fetch(`${baseUrl}?page=${pageNum}`, {
    cache: "no-store"
  }).then(res => res.json());

  return results;
};

export const fetchAllUsersData = async (pageNum = 1) => {
  const results = await fetchData(pageNum);
  const { page, total_pages, data } = results;

  if (page < total_pages) {
    return data.concat(await fetchAllUsersData(pageNum + 1));
  } else {
    return data;
  }
};
