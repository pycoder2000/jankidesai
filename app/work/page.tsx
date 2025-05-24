import WorkProjects from 'app/work/workprojects';
import { Fragment } from 'react';
import Header from '../components/header';

export const metadata = {
  title: 'Work Projects',
  description: 'My Work Projects - Janki Desai',
};

export default function Page() {
  return (
    <Fragment>
      <Header title="Work" />
      <div className="space-y-2 md:space-y-5 ">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here is a selection of professional work I have contributed to during my time at companies
          like Juniper and Microsoft. These projects highlight my skills in creating impactful and
          scalable solutions.
        </p>
      </div>
      <WorkProjects />
    </Fragment>
  );
}
