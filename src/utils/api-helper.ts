const API_KEY = '1adf20763036c4de1305591df5db2b73';

const createUrl = (url: string, city: string) => {
  return `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`;
};

const getImageURL = (iconCode: string, size: string) =>
  `https://openweathermap.org/img/wn/${iconCode}${size}.png`;

export { getImageURL, createUrl };
