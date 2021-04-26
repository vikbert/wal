// export const shuffle = array => array.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
export const shuffle = items => items.sort(() => 0.5 - Math.random())
