export const truncateString = (text: string, maxLenght: number) =>
  text.length > maxLenght ? text.substr(0, maxLenght) : text;
