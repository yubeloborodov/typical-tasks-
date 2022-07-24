const build_query_string = (params) => {
  const entries = Object.entries(params);
  const sortedEntries = entries.slice().sort();
  const fromEntries = Object.fromEntries(sortedEntries);

  let res = '';
  for (let key in fromEntries) {
    res += `${key}=${params[key]}&`
  }

  return res.substr(0, res.length - 1);
}

console.log(build_query_string({ per: 10, page: 1 }))
console.log(build_query_string({ param: 'all', param1: true }))