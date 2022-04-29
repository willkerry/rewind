import { get, writable } from 'svelte/store';

export const questions = writable([]);

/**
 * @param {string} question
 */
export function addQuestion(question) {
	let trimmed = question.trim();
	if (!trimmed) return;

	// Make a copy of the current questions array
	/**
	 * @type {{count: number, text: string, updated: number}[]}
	 */
	const temporaryQuestions = get(questions);

	// Check if the question is already in the array
	const i = temporaryQuestions.findIndex((q) => q.text === trimmed);
	// If it is, move it to the top of the array and increment the count
	if (i !== -1) {
		let temporaryQuestion = temporaryQuestions[i];
		temporaryQuestion.count++;
		temporaryQuestion.updated = Date.now();
		temporaryQuestions.splice(i, 1);
		temporaryQuestions.unshift(temporaryQuestion);
		// @ts-ignore
		questions.set(temporaryQuestions);
	} else {
		// Otherwise, add it to the top of the array
		// @ts-ignore
		questions.update((questions) => {
			return [
				{
					count: 1,
					text: trimmed,
					updated: Date.now()
				},
				...questions
			];
		});
	}
}

/**
 * @param {number} index
 */
export function removeQuestion(index) {
	questions.update((q) => q.filter((_, i) => i !== index));
}
