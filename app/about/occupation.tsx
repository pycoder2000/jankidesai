import Image from 'next/image';

export default function Occupation() {
  return (
    <section className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl">
          Janki Desai
        </h1>
        <h2 className="text-base font-medium text-gray-500 dark:text-gray-400 md:text-lg">
          UX Designer II at Microsoft
        </h2>
      </div>

      <div className="flex-shrink-0">
        <Image
          alt="Janki Desai"
          height={150}
          width={150}
          src="/static/images/avatar.webp"
          className="rounded-full object-cover shadow-md grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    </section>
  );
}
