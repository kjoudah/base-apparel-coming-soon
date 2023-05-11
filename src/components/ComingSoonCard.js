import logo from './../images/logo.svg';
import { createRef, useState } from 'react';

export default function ComingSoonCard() {
  const [error, setError] = useState(false);
  const reference = createRef();
  const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

  const onSubmit = (e) => {
    e.preventDefault();
    const text = reference.current.value;
    setError(!emailRegex.test(text));
  };

  return (
    <article className="font-sans grid max-w-screen-lg mx-auto justify-center md:grid-cols-2 md:grid-rows-[auto_1fr] text-center md:mx-auto md:text-start">
      <div className={`w-full md:bg-white md:pl-16`}>
        <img className="p-6 " src={logo} alt="base apparel logo" />
      </div>

      <div className="w-full h-[300px] bg-center bg-cover bg-[url(./images/hero-mobile.jpg)] md:bg-[url(./images/hero-desktop.jpg)] md:h-full md:bg-cover md:row-span-full md:col-start-2 md:col-end-3"></div>
      <div
        className={`px-8 py-12 flex flex-col gap-6 md:row-start-2 md:row-end-3 
        card-background-mobile md:card-background-desktop md:bg-no-repeat md:bg-
        
        md:p-24`}
      >
        <h1 className="text-4xl leading-none uppercase font-bold tracking-widest text-neutral-darkGrayishRed  md:text-5xl">
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
        <form className="flex flex-col gap-2 items-start">
          <div className="z-10 relative flex flex-row w-full">
            <input
              ref={reference}
              className={`relative w-full card-background-mobile h-10 border px-4 py-6 border-primary-desaturatedRed rounded-full placeholder:text-primary-desaturatedRed focus-within:outline-1 focus-within:outline-primary-desaturatedRed${
                error
                  ? 'border-2 border-solid border-spacing-2 border-primary-softRed'
                  : ''
              }`}
              placeholder="Email Address"
            ></input>
            {error && (
              <span className="z-0 absolute right-[20%] top-2 bg-[url('/icon-error.svg')] bg-no-repeat bg-center w-8 h-8"></span>
            )}
            <button onClick={onSubmit} className="z-20 submit-button"></button>
          </div>

          <span
            className={`text-primary-softRed text-sm ml-6 ${
              error ? 'visible' : `collapse`
            }`}
          >
            Please provide a valid email address
          </span>
        </form>
      </div>
      {/* end main-content */}
    </article>
  );
}
