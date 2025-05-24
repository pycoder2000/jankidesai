import { XIcon } from '../components/layouts/icons/x-icon';
import Image from 'next/image';
import { WorkProject } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface ProjectPopupProps {
  project: WorkProject | null;
  onClose: () => void;
}

export default function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-1000 flex items-center justify-center backdrop-blur-sm"
        style={{ willChange: 'transform' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-11/12 max-w-3xl bg-zinc-950 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl transition duration-300"
            onClick={onClose}
            aria-label="Close popup"
          >
            <XIcon size={24} />
          </button>

          {/* Content */}
          <div className="p-8 flex flex-col items-center space-y-8">
            {/* Project Title */}
            <h2 className="text-3xl font-bold text-gray-100 text-center">{project.title}</h2>

            {/* Project Image */}
            <div className="w-full flex justify-center">
              <Image
                src={`/static/images/work/${project.src}`}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg object-contain shadow-lg"
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-2xl">
              {project.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
