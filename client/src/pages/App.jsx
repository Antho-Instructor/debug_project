import Header from "../components/Header";
import Filter from "../components/Filter";
import Job from "../components/Job";
import { useJobs } from "../hooks/useJobs";

function App() {
	const { filteredJobs } = useJobs();

	return (
		<section>
			<Header />
			<Filter />
			<div>
				{filteredJobs.map((job, idx) => (
					<Job key={idx} job={job} />
				))}
			</div>
		</section>
	);
}

export default App;
