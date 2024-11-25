import React, { useContext, createContext, useMemo, useState, useEffect } from 'react';
import { getContractors, getUsers } from '../service/user.service';
import userDefaults from '../defaults/userDefaults';
import {
  useQuery,
} from '@tanstack/react-query'
const UserContext = createContext(userDefaults);

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [contractorsList, setContractorsList] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [totalJunkRemoval, setTotalJunkRemoval] = useState(0);
  const [totalHandyMan, setTotalHandyMan] = useState(0);
  const [totalLawnCare, setTotalLawnCare] = useState(0);
  const [totalCleaning, setTotalCleaning] = useState(0);
  const [totalMoving, setTotalMoving] = useState(0);
  const [totalDelivery, setTotalDelivery] = useState(0);

  //users
  const [usersList, setUsersList] = useState(undefined);

  const getContractorsList = async () => {
    try {
      setIsLoading(true);
      const response = await getContractors();
      setIsLoading(false);
      setContractorsList(response ?? []);
    } catch (error) {
      return error;
    }
  };

  const getUserList = async () => {
    console.log('getUserList')
    //setIsLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, isPending, error, data, isFetching } = useQuery(
      'getUsersData', () => { return fetch(getUsers()) }
    )


    console.log(data.data)
    return data
  };

  useMemo(() => {
    if (contractorsList) {
      setTotalJunkRemoval(
        contractorsList.filter((person) => person.typeOfJobs.some((job) => job.value === 'Junk Removal')).length ?? 0
      );

      setTotalCleaning(
        contractorsList.filter((person) => person.typeOfJobs.some((job) => job.value === 'Cleaning Service')).length ??
        0
      );

      setTotalHandyMan(
        contractorsList.filter((person) => person.typeOfJobs.some((job) => job.value === 'HandyMan Service')).length ??
        0
      );

      setTotalLawnCare(
        contractorsList.filter((person) => person.typeOfJobs.some((job) => job.value === 'LawnCare Service')).length ??
        0
      );

      setTotalMoving(
        contractorsList.filter((person) => person.typeOfJobs.some((job) => job.value === 'Moving Service')).length ?? 0
      );

      setTotalDelivery(
        contractorsList.filter((person) => person.typeOfJobs.some((job) => job.value === 'Delivery Service')).length ??
        0
      );
    }
  }, [contractorsList]);

  const values = useMemo(
    () => ({
      contractorsList,
      isLoading,
      totalJunkRemoval,
      totalHandyMan,
      totalLawnCare,
      totalCleaning,
      totalMoving,
      totalDelivery,
      getContractorsList,
      getUserList,
      usersList,
    }),
    [
      contractorsList,
      isLoading,
      totalJunkRemoval,
      totalHandyMan,
      totalLawnCare,
      totalCleaning,
      totalMoving,
      totalDelivery,
      usersList,
    ]
  );
  return (
    <UserContext.Provider value={values}>
      <>{children}</>
    </UserContext.Provider>
  );
};

export default UserProvider;