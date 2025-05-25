import path from 'path';
import { Fragment } from 'react';
import Header from '../components/header';
import { CustomMDX } from '../components/mdx';
import { readMDXFile } from '../thoughts/utils';
import Occupation from './occupation';

const contentPath = path.join(process.cwd(), 'app', 'about', 'content.mdx');
const { content } = readMDXFile(contentPath);

export const metadata = {
  title: 'About',
  description: 'About Janki Desai',
};

export default function Page() {
  return (
    <Fragment>
      <Header title="About" />
      <Occupation />
      <CustomMDX source={content} />
    </Fragment>
  );
}
