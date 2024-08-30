import { createContext, useState, useEffect, useMemo } from "react";
import { filterJobs } from "../utils/filterJobs";

export const JobContext = createContext(null);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const removeFilter = (label) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== label)
    );
  };

  const removeAllFilters = () => {
    setFilters([]);
  };

  const addFilter = (label) => {
    setFilters((prevFilters) => {
      if (!prevFilters.includes(label)) {
        return [...prevFilters, label];
      }
      return prevFilters;
    });
  };

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const filteredJobs = useMemo(() => {
    if (filters.length === 0) {
      return jobs;
    }
    return filterJobs(jobs, filters);
  }, [jobs, filters]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        filters,
        filteredJobs,
        addFilter,
        removeAllFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
