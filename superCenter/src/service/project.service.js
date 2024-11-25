import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase';

export const getProjects = async () => {
	const projects = [];
	const querySnapshot = await getDocs(collection(db, 'projects'));
	querySnapshot.forEach((doc) => {
		const data = doc.data();
		projects.push(data);
	});
	return projects || [];
};
