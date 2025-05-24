import { WorkProjectModal } from './types';

interface WorkProjectProps {
  index: number;
  title: string;
  url: string;
  tags: string[];
  setModal: (modal: WorkProjectModal) => void;
}

export default function WorkProjectItem({ index, title, url, tags, setModal }: WorkProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full flex-col border-b px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-16"
      rel="noreferrer"
    >
      {/* Title Section */}
      <div className="sm:w-3/5">
        <h2 className="text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-6xl">
          {title}
        </h2>
      </div>

      {/* Tags Section */}
      <div className="mt-4 flex flex-wrap gap-y-2 sm:mt-0 sm:w-2/5">
        {tags.map((tag) => (
          <a
            key={tag}
            className="mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900"
          >
            {tag.split(' ').join('-')}
          </a>
        ))}
      </div>
    </a>
  );
}
