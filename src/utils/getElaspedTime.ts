const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;

export const getElapsedTime = (time: string): string => {
  const now = new Date();
  const stringToTime = new Date(time);

  const secondsElapsed = Math.floor(
    (now.getTime() - stringToTime.getTime()) / 1000,
  );

  if (secondsElapsed < MINUTE) return '방금 전';

  if (secondsElapsed < HOUR)
    return `${Math.floor(secondsElapsed / MINUTE)}분 전`;

  if (secondsElapsed < DAY)
    return `${Math.floor(secondsElapsed / HOUR)}시간 전`;

  if (secondsElapsed < YEAR) return `${Math.floor(secondsElapsed / DAY)}일 전`;

  return `${Math.floor(secondsElapsed / YEAR)}년 전`;
};
