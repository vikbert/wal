import { writable } from 'svelte/store'
import * as memo from './memo'

const dummyNames = [
  {name: 'Bert Sandoval', checked: true},
  {name: 'Tami Castillo', checked: true},
  {name: 'Tonny Simmons', checked: true},
  {name: 'Dale Petterson', checked: true},
  {name: 'Roy Armstrong', checked: true},
];

const KEY_MEMBERS = 'wal_memmbers';
const initItems = memo.get(KEY_MEMBERS) ?? dummyNames

export const opened = writable(false)

const writableMembers = writable(initItems);
export const members = {
  ...writableMembers,
  persistent: function(data) {
    writableMembers.set(data);

    memo.set(KEY_MEMBERS, data);
   }
}
