import { io } from 'socket.io-client';
import { addSpeed } from '../speedStore';
import { addQuestion } from '../questionsStore';

const socket = io('http://localhost:3001');

socket.on('questions', (data) => {
	addQuestion(data.question);
});

socket.on('speed', (data) => {
	addSpeed(data.speed);
});

/**
 * @param {string} questionString
 */
export function sendQuestion(questionString) {
	if (!questionString.trim()) return;
	socket.emit('questions', { question: questionString });
}

/**
 * @param {number} speed
 */
export function sendSpeed(speed) {
	socket.emit('speed', { speed });
}
