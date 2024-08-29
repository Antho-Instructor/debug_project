import { useContext } from "react";
import { JobContext } from "../contexts/JobContext";

export const useJobs = () => {
	return useContext(JobContext);
};
