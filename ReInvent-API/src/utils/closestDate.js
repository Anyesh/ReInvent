export const closestDate = (dates, target) => {
  if (!target) target = Date.now();
  else if (target instanceof Date) target = target.getTime();

  let nearest = Infinity;
  let winner = -1;

  dates.forEach((date, index) => {
    if (date instanceof Date) date = date.getTime();
    const distance = Math.abs(date - target);
    if (distance < nearest) {
      nearest = distance;
      winner = index;
    }
  });

  return winner;
};
