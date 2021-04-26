export const getDay = () => {
  const now = new Date();
  return {
    'weekDay': now.toLocaleTimeString('en-us', { "weekday": "short" }).substring(0, 2),
    'day': now.getDate()
  }
}
