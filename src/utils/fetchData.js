export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a12869b239msh49674026761210cp14874fjsn7ae69837b752",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a12869b239msh49674026761210cp14874fjsn7ae69837b752',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
