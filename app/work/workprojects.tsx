'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import { workprojects } from './constants';
import WorkProjectItem from './project-item';
import WorkProjectPreview from './project-preview';
import { WorkProjectModal } from './types';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

export default function WorkProjects() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<WorkProjectModal>({ active: false, index: 0 });

  return (
    <>
      {workprojects.map((workproject, index) => (
        <motion.div
          key={workproject.title}
          initial={{ scale: 0.8, opacity: 0, filter: 'blur(2px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <WorkProjectItem
            index={index}
            title={workproject.title}
            url={workproject.url}
            role={workproject.role}
            setModal={setModal}
          />
        </motion.div>
      ))}
      {breakpoint === 'desktop' && <WorkProjectPreview modal={modal} workprojects={workprojects} />}
    </>
  );
}
