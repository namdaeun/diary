import { DATE_REGEX } from '~/constants/regex';

export const formatDate = (date: string) => {
  if (DATE_REGEX.test(date)) {
    return String(Number(date.slice(8, 10)));
  }

  const parsed = new Date(date);
  if (!Number.isNaN(parsed.getTime())) {
    return String(parsed.getUTCDate());
  }
  return '';
};
