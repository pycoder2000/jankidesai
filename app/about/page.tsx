import path from 'path';
import { Fragment, Suspense } from 'react';
import Footer from '../components/layouts/footer';
import Header from '../components/layouts/header';
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
      <Header />
      <Occupation />
      <CustomMDX source={content} />
      <Suspense fallback={<Fragment></Fragment>}></Suspense>
      <Footer />
    </Fragment>
  );
}
