type TimeName = 'year' | 'month' | 'day' | 'hour' | 'minute';
type Time = {
  name: TimeName;
  milliSeconds: number;
};

const getDiff = (start: Date) => {
  const end = new Date();

  return (end.getTime() - start.getTime()) / 1000;
};

export const elapsedTime = (date: string) => {
  const start = new Date(date);
  const diff = getDiff(start);

  const formatter = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto',
  });
  const dateDetail = new Intl.DateTimeFormat('ko-KR').format(start);

  const times: Time[] = [
    { name: 'year', milliSeconds: 60 * 60 * 24 * 365 },
    { name: 'month', milliSeconds: 60 * 60 * 24 * 30 },
    { name: 'day', milliSeconds: 60 * 60 * 24 },
    { name: 'hour', milliSeconds: 60 * 60 },
    { name: 'minute', milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime === 7) return dateDetail.slice(0, -1);
    if (betweenTime > 0) return formatter.format(betweenTime * -1, value.name);
  }

  return '방금 전';
};

export const isOverTwoWeeks = (date: string) => {
  const start = new Date(date);
  const diff = getDiff(start);

  return diff > 60 * 60 * 24 * 14;
};
