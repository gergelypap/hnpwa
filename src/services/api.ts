const BASE_URL: string = "https://hacker-news.firebaseio.com/v0";

export interface ItemResponse {
  id: number;
  by: string;
  descendants: number;
  time: number;
  kids: number[];
  title: string;
  url: string;
  type: string;
  score: number;
}

function fetchJson(url: string): Promise<any> {
  return fetch(url).then(response => response.json());
}

export function fetchTopStories(): Promise<number[]> {
  return fetchJson(`${BASE_URL}/topstories.json`);
}

export function fetchItem(id: number): Promise<ItemResponse> {
  return fetchJson(`${BASE_URL}/item/${id}.json`);
}
