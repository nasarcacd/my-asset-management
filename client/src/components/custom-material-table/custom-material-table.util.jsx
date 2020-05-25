export const retriveData = (query, apiURL) => {
  return new Promise((resolve, reject) => {
    //get querys from material-table
    let limit = query.pageSize;
    let page = query.page + 1;
    let search = query.search;
    let orderBy = query.orderBy ? query.orderBy.field : '';
    let orderDirection = query.orderDirection;
    //fetch data from remote API
    let url = `${apiURL}?_limit=${limit}&_page=${page}&q=${search}&_sort=${orderBy}&_order=${orderDirection}`;
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
