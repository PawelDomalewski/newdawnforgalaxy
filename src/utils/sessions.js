export const sortSessionsByDateDesc = (sessions) =>
  [...sessions].sort((a, b) => new Date(b.date) - new Date(a.date));

export const formatSessionDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};