import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase';

export const getUsers = async () => {
	const users = [];
	const querySnapshot = await getDocs(collection(db, 'user'));
	querySnapshot.forEach((doc) => {
		const data = doc.data();
		users.push(data);
	});
	return users || [];
};

export const getContractors = async () => {
	const contractor = [];
	const querySnapshot = await getDocs(collection(db, 'contractorProfile'));
	querySnapshot.forEach((doc) => {
		const data = doc.data(); //get data from each document in the contractorProfile collection
		console.log(data);
		contractor.push(data);
	});
	return contractor || [];
};
