export const BASE_URL: string = 'https://hacker-news.firebaseio.com/v0';
export const TOP_STORIES: string = `${BASE_URL}/topstories.json`;
export const NEW_STORIES: string = `${BASE_URL}/newstories.json`;

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
  readonly text?: string; // Only on Comment
}

export function fetchJson(url: string): Promise<any> {
  return fetch(url).then(response => response.json());
}

export function fetchItem(id: number): Promise<ItemResponse> {
  return fetchJson(`${BASE_URL}/item/${id}.json`);
}
