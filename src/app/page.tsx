import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/jobData";
import Frontsection from '../components/Frontsection'

export default function HomePage() {
  return (
    <>
    <div>
      <Frontsection />
    </div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
    </>
  );
}
 