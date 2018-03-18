export const toTop = () =>
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

export const to = (ycoordinate) =>
  window.scroll({
    top: ycoordinate,
    left: 0,
    behavior: 'smooth'
  });

export const toElement = (element) => {
  if (element && element.offsetTop) to(element.offsetTop);
};

export default {
  toTop,
  to,
  toElement
};
