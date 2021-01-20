export const BASE_URL: string = 'https://hacker-news.firebaseio.com/v0';
export const TOP_STORIES: string = `${BASE_URL}/topstories.json`;
export const NEW_STORIES: string = `${BASE_URL}/newstories.json`;

export interface ItemInterface {
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

export interface CommentInterface extends ItemInterface {
  text: string;
  parent: number;
}
