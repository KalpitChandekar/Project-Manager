import SingleProjectCard from "./SingleProjectCard";

const AllProjectsSection = () => {
  return (
    <ul className="h-[78%] overflow-auto mt-6 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-y-4 gap-x-4 pr-1">
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
      <SingleProjectCard />
    </ul>
  );
};
export default AllProjectsSection;
