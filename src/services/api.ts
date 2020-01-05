const BASE_URL: string = 'https://hacker-news.firebaseio.com/v0';

// TODO: Is there a better way not to include readonly for all items?
export interface ItemResponse {
  readonly id: number;
  readonly by: string;
  readonly descendants: number;
  readonly time: number;
  readonly kids: number[];
  readonly title: string;
  readonly url: string;
  readonly type: string;
  readonly score: number;
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
