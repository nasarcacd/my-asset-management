export const retriveData = (query, apiURL) => {
  return new Promise((resolve, reject) => {
    let url = `${apiURL}?_limit=${query.pageSize}&_page=${query.page + 1}&q=${query.search}`;
    fetch(url)
      .then(async (response) => {
        let totalCount = Number(response.headers.get('x-total-count'));
        const data = await response.json();
        return { ...data, totalCount: totalCount };
      })
      .then((result) => {
        resolve({
          data: result.payload,
          page: query.page,
          totalCount: result.totalCount,
        });
      });
  });
};
