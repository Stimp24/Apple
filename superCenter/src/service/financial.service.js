import axios from 'axios';

export const getBalance = () => {
	const url = 'http://localhost:8081/getBalance';
	const response = axios.get(url);

	return response;
};
