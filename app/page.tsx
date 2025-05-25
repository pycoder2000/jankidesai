import classNames from 'classnames';
import Link from 'next/link';
import { BackgroundGradientAnimation } from './components/background-gradient-animation';
import { AtSignIcon } from './components/layouts/icons/at-sign-icon';
import { LinkedinIcon } from './components/layouts/icons/linkedin-icon';
import { XIcon } from './components/layouts/icons/x-icon';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { merryWeather } from './fonts';

export default function Home() {
  return (
    <main className="relative min-h-svh w-screen overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitch />
      </div>
      <BackgroundGradientAnimation>
        <div className={classNames('relative min-h-svh', merryWeather.className)}>
          <div className="absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 text-shadow-lg lg:ml-14">
            <h1 className="font-serif text-2xl font-medium md:mr-4 md:text-4xl">
              Welcome to my <span className="font-bold">personal portfolio — </span> or, as I like
              to call it, my <span className="italic border-b">playground</span> on the web.
            </h1>
            <section className="relative z-10">
              <p className="text-base text-justify">
                I&apos;m Janki Desai — a designer with a passion for building inclusive,
                human-centric experiences. I believe that great design is not just about aesthetics
                but also about creating meaningful and accessible interactions that empower users.{' '}
                <br />
                Currently, I&apos;m focused on designing simplified and intuitive UX for
                cloud-native enterprise applications at{' '}
                <a
                  href="https://www.microsoft.com/"
                  className="underline-magical"
                  target="_blank"
                  rel="noreferrer"
                >
                  Microsoft
                </a>
                . When I&apos;m not designing, I enjoy exploring new design trends, learning about
                emerging technologies, and finding inspiration in everyday life.
              </p>
            </section>
            <section className="relative z-10 flex space-x-4 items-center text-sm">
              <div>
                <p>More about me: </p>
                <div className="flex -ml-2">
                  <Link
                    href="https://www.linkedin.com/in/jdesai96/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <LinkedinIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="https://x.com/jankidesai"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="twitter"
                  >
                    <XIcon className="h-9 w-9" />
                  </Link>
                  <a href="mailto:desaijanki1996@gmail.com" aria-label="email" rel="noreferrer">
                    <AtSignIcon className="h-9 w-9" />
                  </a>
                </div>
              </div>
              <div className="h-14 border-l border-gray-300" />
              <div className="flex flex-wrap space-x-3 space-y-1">
                <Link href="/work">/work</Link>
                <Link href="/projects">/projects</Link>
                {/* <Link href="/thoughts">/thoughts</Link> */}
                <Link href="/uses">/uses</Link>
                <Link href="/about">/about</Link>
              </div>
            </section>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
