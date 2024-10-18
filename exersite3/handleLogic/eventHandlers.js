import { checkAnswer } from '../app.js';

export const addEventListeners = () => {
    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
};
