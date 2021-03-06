import {writable} from 'svelte/store';
import * as memo from './memo';

const defaultMember = [
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
const defaultConfig = {
    showInfo: true,
    timerLimit: 15,
    timerAudio: true,
    timerMessage: 'Die Zeit ist um.',
};

// storage keys
export const KEY_MEMBERS = 'wal_members';
export const KEY_CONFIG = 'wal_config';
const KEY_PROJECT = 'wal_project';

// if no data found in storage, then load init dummy members
const initMembers = memo.get(KEY_MEMBERS) ?? defaultMember;
const initConfig = memo.get(KEY_CONFIG) ?? defaultConfig;

// opened: if the setting popup is opened
export const opened = writable(false);

// paused: if the timer is paused
export const paused = writable(true);

// config: state of config with the persistence in storage
const writableConfig = writable(initConfig);
export const config = {
    ...writableConfig,
    persistent: function(data) {
        writableConfig.set(data);
        memo.set(KEY_CONFIG, data);
    },
};

// members: state of members with the persistence in storage
const writableMembers = writable(initMembers);
export const members = {
    ...writableMembers,
    persistent: function(data) {
        writableMembers.set(data);

        memo.set(KEY_MEMBERS, data);
    },
};
