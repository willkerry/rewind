import { writable } from 'svelte/store';

export const socketNumber = writable(0);

/**
 * @param {string} number
 */
export function setSocketNumber(number) {
	socketNumber.set(parseInt(number, 10));
}

export function resetSocketNumber() {
	socketNumber.set(0);
}
