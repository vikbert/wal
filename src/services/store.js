import { writable } from 'svelte/store'

export const opened = writable(false)
export const members = writable(
  []
);
