export const transformDate = (timestamp: number) => {
  const timeFormat = (num: number) => (num > 9 ? num : `0${num}`);
  const date = new Date(timestamp * 1000);
  const dataValues = `${timeFormat(date.getMonth() + 1)}/${timeFormat(date.getDate())}`;
  return dataValues;
};
