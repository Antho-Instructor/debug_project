import style from "./filter.module.css";
import FilterTag from "../FilterTag";
import { useJobs } from "../../hooks/useJobs";

function Filter() {
  const { filters, removeFilter, removeAllFilters } = useJobs();
  const getMarginBottom = (length) => {
    if (length === 0) return "0px";
    if (length <= 2) return "8rem";
    if (length <= 4) return "13rem";
    if (length <= 6) return "18rem";
    return "30rem";
  };
  return (
    <div>
      {filters.length !== 0 && (
        <section className={style.container}>
          <div className={style.all__tags}>
            {filters.map((filter) => (
              <FilterTag
                key={filter}
                label={filter}
                onRemove={() => removeFilter(filter)}
              />
            ))}
          </div>
          <button onClick={removeAllFilters}>Clear</button>
        </section>
      )}
    </div>
  );
}

export default Filter;
