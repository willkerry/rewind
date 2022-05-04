import { get, writable } from 'svelte/store';

export const speeds = writable(0);

/**
 * @param {number} speed
 */
export function addSpeed(speed) {
	let previousSpeed = get(speeds);
	let newAverage = (9 * previousSpeed + speed) / 10;
	speeds.update(() => newAverage);
	return;
}

export function computeRollingSpeed() {
	// @ts-ignore
	const speeds = get(this.speeds);
	const now = Date.now();
	const last3Minutes = now - 3 * 60 * 1000;
	const speedsInLast3Minutes = speeds.filter(
		(/** @type {{ createdAt: number; }} */ speed) => speed.createdAt > last3Minutes
	);
	const meanSpeedInLast3Minutes =
		speedsInLast3Minutes.reduce(
			(
				/** @type {number} */
				acc,
				/** @type {{ speed: number; }} */
				speed
			) => acc + speed.speed,
			0
		) / speedsInLast3Minutes.length;
	return meanSpeedInLast3Minutes;
}
