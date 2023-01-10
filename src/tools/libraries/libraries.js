export const getUniqueValuesByKey = (data, key) => {
  return [...new Set(data.map(item => item[key]))];
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}