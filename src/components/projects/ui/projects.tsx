import { Timeline } from "~/components/ui/timeline";
import { timelineData } from "../data";
interface ProjectsProps {
  func: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Projects: React.FC<ProjectsProps> = ({ func }) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#141414]">
      <div className="px-4 md:container">
        <Timeline data={timelineData} func={func} />
      </div>
    </section>
  );
};
