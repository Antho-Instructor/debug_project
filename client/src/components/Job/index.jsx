import Label from "../Label";
import Tag from "../Tag";
import { useJobs } from "../../hooks/useJobs";
import style from "./job.module.css";
function Job({ job }) {
  const { addFilter } = useJobs();

  console.log(job);

  return (
    <div className={`${style.job_card} ${job.featured ? style.featured : ""}`}>
      <div className={style.company_info}>
        <img
          src={job.img}
          alt={`${job.company} logo`}
          className={style.company_logo}
        />
      </div>
      <div className={style.body}>
        <div className={style.company_details}>
          <h3 className={style.company_name}>{job.company}</h3>
          <div className={style.badges}>
            {job.new && <Label label="new!" newLabel />}
            {job.featured && <Label label="featured" featured />}
          </div>
        </div>
        <h2 className={style.job_title}>{job.position}</h2>
        <div className={style.job_detail}>
          <span>{job.postedAt}</span>
          <span>•</span>
          <span>{job.contract}</span>
          <span>•</span>
          <span>{job.location}</span>
        </div>
      </div>
      <hr />
      <div className={style.job_tags}>
        <Tag tag={job.role} addFilter={addFilter} />
        <Tag tag={job.level} addFilter={addFilter} />
        {job.languages.map((language, idx) => (
          <Tag key={idx} tag={language} addFilter={addFilter} />
        ))}
        {job.tools.map((tool, idx) => (
          <Tag key={idx} tag={tool} addFilter={addFilter} />
        ))}
      </div>
    </div>
  );
}

export default Job;
