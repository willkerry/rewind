import { io } from 'socket.io-client';
import { addSpeed } from '../speedStore';
import { addQuestion } from '../questionsStore';

const socket = io('https://rewind-server-production-d410.up.railway.app');

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
