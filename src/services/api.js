const BASE_URL = "https://hacker-news.firebaseio.com/v0";

function fetchJson(url) {
  return fetch(url).then(response => response.json());
}

export function fetchTopStories() {
  return fetchJson(`${BASE_URL}/topstories.json`);
}

export function fetchItem(id) {
  return fetchJson(`${BASE_URL}/item/${id}.json`);
}
