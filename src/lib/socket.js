import { io } from 'socket.io-client';
import { addSpeed } from '../speedStore';
import { addQuestion } from '../questionsStore';
import { dev } from '$app/env';

const socketUrl = dev
	? import.meta.env.VITE_SOCKET_URL
	: 'https://rewind-server-production-d410.up.railway.app';

const socket = io(socketUrl);

socket.on('questions', (data) => {
	addQuestion(data.question);
});

socket.on('speeds', (data) => {
	addSpeed(data.speed);
});

/**
 * @param {string} questionString
 */
export function sendQuestion(questionString) {
	if (!questionString.trim()) return;
	socket.emit('questions', { question: questionString, timestamp: Date.now() });
}

/**
 * @param {number} speed
 */
export function sendSpeed(speed) {
	socket.emit('speeds', { speed, timestamp: Date.now() });
}
