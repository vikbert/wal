import { writable } from 'svelte/store'
import * as memo from './memo'

const KEY_MEMBERS = 'wal_memmbers';
const initItems = memo.get(KEY_MEMBERS) ?? []

export const opened = writable(true)

export const members = {
  ...writable(initItems),
  persistent: function(data) {
    memo.set(KEY_MEMBERS, data);
   }
}
