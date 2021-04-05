import {writable} from 'svelte/store';
import * as memo from './memo';

const dummyNames = [
    {name: 'Alexander', checked: true},
    {name: 'Paul', checked: true},
    {name: 'Lukas', checked: true},
    {name: 'Sophia', checked: true},
    {name: 'Louis', checked: true},
    {name: 'Ludwig', checked: true},
    {name: 'Maximilian', checked: true},
    {name: 'Johanna', checked: true},
    {name: 'Maria', checked: true},
];

// storage keys
const KEY_MEMBERS = 'wal_members';
const KEY_CONFIG = 'wal_config';
const KEY_PROJECT = 'wal_project';

// if no data found in storage, then load init dummy memebers
const initItems = memo.get(KEY_MEMBERS) ?? dummyNames;

// opened: if the setting popup is opened
export const opened = writable(true);

// paused: if the timer is paused
export const paused = writable(true);

// config: state of config with the persistence in storage
const writableConfig = writable({timerLimit: 15, timerAudio: true, timerMessage: 'Die Zeit ist um.'});
export const config = {
    ...writableConfig,
    persistent: function(data) {
        writableConfig.set(data);
        memo.set(KEY_CONFIG, data);
    },
};

// members: state of members with the persistence in storage
const writableMembers = writable(initItems);
export const members = {
    ...writableMembers,
    persistent: function(data) {
        writableMembers.set(data);

        memo.set(KEY_MEMBERS, data);
    },
};
