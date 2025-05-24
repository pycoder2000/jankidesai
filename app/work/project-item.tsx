import { WorkProjectModal } from './types';

interface WorkProjectProps {
  index: number;
  title: string;
  tags: string[];
  setModal: (modal: WorkProjectModal) => void;
}

export default function WorkProjectItem({ index, title, tags, setModal }: WorkProjectProps) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full flex-col border-b px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-16"
    >
      <div className="sm:w-3/5">
        <h2 className="text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-6xl">
          {title}
        </h2>
      </div>

      <div className="mt-4 flex flex-wrap gap-y-2 sm:mt-0 sm:w-2/5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out"
          >
            {tag.split(' ').join(' ')}
          </span>
        ))}
      </div>
    </div>
  );
}
