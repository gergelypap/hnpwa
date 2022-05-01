export function baseUrl(url: string): string {
  return url.replace(/^https?:\/\/(www.)?/i, '').split(/[/?]/)[0];
}

export function pluralize(
  count: number,
  singular: string,
  plural: string
): string {
  return String(count) + ' ' + (count === 1 ? singular : plural);
}

export function timeAgo(timestamp: number) {
  const msPerMinute = 60000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = Math.round(new Date().getTime()) - timestamp * 1000;
  // TODO: Switch 'en' to application language.
  const relativeTime = new Intl.RelativeTimeFormat('en', { style: 'long' });

  if (elapsed < msPerMinute) {
    return relativeTime.format(-Math.round(elapsed / 1000), 'second');
  } else if (elapsed < msPerHour) {
    return relativeTime.format(-Math.round(elapsed / msPerMinute), 'minute');
  } else if (elapsed < msPerDay) {
    return relativeTime.format(-Math.round(elapsed / msPerHour), 'hour');
  } else if (elapsed < msPerMonth) {
    return relativeTime.format(-Math.round(elapsed / msPerDay), 'day');
  } else if (elapsed < msPerYear) {
    return relativeTime.format(-Math.round(elapsed / msPerMonth), 'month');
  }
  return relativeTime.format(-Math.round(elapsed / msPerYear), 'year');
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
