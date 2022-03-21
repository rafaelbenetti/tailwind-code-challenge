export function getRandomDate() {
  return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}