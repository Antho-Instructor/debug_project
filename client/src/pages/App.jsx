import { useState, useEffect } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Job from "../components/Job";

function App() {
	const [jobs, setJobs] = useState([]);
	const [filteredJobs, setFilteredJobs] = useState([]);

	const [filters, setFilters] = useState([]);

	const removeFilter = (label) => {
		const updatedFilters = filters.filter((filter) => filter !== label);
		setFilters(updatedFilters);
	};

	const removeAllFilters = () => {
		setFilters([]);
	};

	const addFilter = (label) => {
		if (!filters.includes(label)) {
			const updatedFilters = [...filters, label];
			setFilters(updatedFilters);
		}
	};

	function filterJobs(jobs, filters) {
		return jobs.filter((job) => {
			return filters.every((filter) => {
				return (
					job.languages.includes(filter) ||
					job.tools.includes(filter) ||
					job.level === filter ||
					job.role === filter
				);
			});
		});
	}

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => {
				setJobs(data);
				setFilteredJobs(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	useEffect(() => {
		if (filters.length === 0) {
			setFilteredJobs(jobs);
		} else {
			setFilteredJobs(filterJobs(jobs, filters));
		}
	}, [filters, jobs]);

	return (
		<section>
			<Header />
			<Filter
				filters={filters}
				removeFilter={removeFilter}
				removeAllFilters={removeAllFilters}
			/>
			<div>
				{(filteredJobs.length > 0 ? filteredJobs : jobs).map(
					(job, idx) => (
						<Job key={idx} job={job} addFilter={addFilter} />
					)
				)}
			</div>
		</section>
	);
}

export default App;
