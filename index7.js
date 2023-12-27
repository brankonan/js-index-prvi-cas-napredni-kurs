const dbNews = [
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
  {
    title: "Lodadasdasdadada",
    body: "dadasdadadadadas",
  },
];
const maxPerPage = 5;
function paginate(entities, page = 1) {
  const start = (page - 1) * maxPerPage;
  const end = start + maxPerPage;
  return entities.slice(start, end);
}

function getObject(entities, page = 1) {
  const totalNews = entities.length;
  const news = paginate(entities, page);
  const paginationObject = {
    currentDisplay: news.length,
    maxPerPage: maxPerPage,
    currentPage: page,
    news: news,
  };
  return paginationObject;
}
const paginationObject = paginate(dbNews, 1);
console.log(paginationObject);
