'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import { workprojects } from './constants';
import WorkProjectItem from './project-item';
import WorkProjectPreview from './project-preview';
import ProjectPopup from './project-popup';
import { WorkProjectModal } from './types';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function WorkProjects() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<WorkProjectModal>({ active: false, index: 0 });
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(workprojects[index]);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {workprojects.map((workproject, index) => (
        <motion.div
          key={workproject.title}
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: index / 10 }}
          onClick={() => handleProjectClick(index)}
        >
          <WorkProjectItem
            index={index}
            title={workproject.title}
            url={workproject.url}
            tags={workproject.tags}
            setModal={setModal}
          />
        </motion.div>
      ))}
      {breakpoint === 'desktop' && <WorkProjectPreview modal={modal} workprojects={workprojects} />}
      <ProjectPopup project={selectedProject} onClose={handleClosePopup} />
    </>
  );
}
