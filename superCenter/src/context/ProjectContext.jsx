import React, { useContext, createContext, useMemo, useState, useEffect } from 'react';
import { getProjects } from '../service/project.service';
const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

const ProjectsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [projectsList, setProjectList] = useState(undefined);
  const [totalProjects, setTotalProjects] = useState(0);
  const [expiredProjects, setExpiredProjects] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const [totalJunkRemovalProjects, setTotalJunkRemovalProjects] = useState(0);
  const [totalHandyManProjects, setTotalHandyManProjects] = useState(0);
  const [totalLawnCareProjects, setTotalLawnCareProjects] = useState(0);
  const [totalCleaningProjects, setTotalCleaningProjects] = useState(0);
  const [totalMovingProjects, setTotalMovingProjects] = useState(0);
  const [totalDeliveryProjects, setTotalDeliveryProjects] = useState(0);

  const getAllProjects = async () => {
    try {
      setIsLoading(true);
      const response = await getProjects();
      setProjectList(response ?? []);
      setIsLoading(false);
      setTotalProjects(response?.length ?? 0);
    } catch (error) {
      return error;
    }
  };

  const projectStatus = () => {
    if (projectsList) {
      setExpiredProjects(projectsList.filter((project) => project.isExpired).length ?? 0);
      setActiveProjects(projectsList.filter((project) => !project.isExpired) ?? []);
      console.log(projectsList.filter((item) => item.typeOfJob));
      setTotalJunkRemovalProjects(projectsList.filter((item) => item.service === 'Junk Removal').length ?? 0);

      setTotalCleaningProjects(projectsList.filter((item) => item.service === 'Cleaning Service').length ?? 0);

      setTotalHandyManProjects(projectsList.filter((item) => item.service === 'HandyMan Service').length ?? 0);

      setTotalLawnCareProjects(projectsList.filter((item) => item.service === 'LawnCare Service').length ?? 0);

      setTotalMovingProjects(projectsList.filter((item) => item.service === 'Moving Service').length ?? 0);

      setTotalDeliveryProjects(projectsList.filter((item) => item.service === 'Delivery Service').length ?? 0);
    }
  };

  useEffect(() => {
    if (!projectsList) {
      getAllProjects();
    }
  }, []);

  useMemo(() => {
    projectStatus();
  }, [projectsList]);

  const values = useMemo(
    () => ({
      projectsList,
      totalProjects,
      getAllProjects,
      expiredProjects,
      activeProjects,
      totalJunkRemovalProjects,
      totalHandyManProjects,
      totalLawnCareProjects,
      totalCleaningProjects,
      totalMovingProjects,
      totalDeliveryProjects,
    }),
    [
      projectsList,
      totalProjects,
      activeProjects,
      expiredProjects,
      totalJunkRemovalProjects,
      totalHandyManProjects,
      totalLawnCareProjects,
      totalCleaningProjects,
      totalMovingProjects,
      totalDeliveryProjects,
    ]
  );
  return (
    <ProjectContext.Provider value={values}>
      <>
        <>{children}</>
      </>
    </ProjectContext.Provider>
  );
};

export default ProjectsProvider;
