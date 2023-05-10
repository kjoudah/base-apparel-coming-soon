import logo from './../images/logo.svg';
import heroDesktop from './../images/hero-desktop.jpg';
import heroMobile from './../images/hero-mobile.jpg';
// import { resolveConfig } from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../../tailwind.config';

// const fullConfig = resolv;

export default function ComingSoonCard() {
  return (
    <article
      className="font-sans grid justify-center sm:grid-cols-2 sm:grid-rows-[auto_1fr] text-center
     max-w-screen-lg sm:mx-auto sm:text-start sm:card-background-desktop
     "
    >
      <div className="w-full sm:bg-white">
        <img className="w-1/2 h-auto p-6 " src={logo} alt="base apparel logo" />
      </div>
      <div className="w-full h-[300px] bg-center bg-cover hero-mobile sm:hero-desktop sm:h-full sm:bg-cover sm:row-span-full sm:col-start-2 sm:col-end-3"></div>
      <div className="px-8 py-12 flex flex-col gap-6 card-background-mobile sm:row-start-2 sm:row-end-3 sm:p-10 ">
        <h1 className="text-5xl leading-none uppercase font-bold tracking-widest text-neutral-darkGrayishRed">
          <span className="block font-light text-primary-desaturatedRed">
            We're
          </span>
          coming soon
        </h1>
        <p className="text-lg font-normal text-primary-desaturatedRed">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form>
          <div className="overflow-hidden relative flex flex-row">
            <input
              className="relative w-full card-background-mobile h-10 border px-4 py-6 border-primary-desaturatedRed rounded-full placeholder:text-primary-desaturatedRed"
              placeholder="Email Address"
            ></input>
            <button className="absolute right-0 top-0 w-[20%] h-full rounded-full submit-button bg-primary-desaturatedRed"></button>
          </div>
        </form>
      </div>
    </article>
  );
}
