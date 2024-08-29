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

export { filterJobs };
