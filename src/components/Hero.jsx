export default function Hero() {
  return (
    <>
      <section id="hero">
        <section className="lg:hidden flex flex-col w-full">
          <div className="flex flex-col gap-2  text-justify normal-style ">
            <h1 className="md:text-xl">
              Hi There i am{" "}
              <span className="text-style  md:text-3xl">Mahdi Tijani</span> AKA
              <span className="text-style  md:text-3xl"> M-TIJANI</span>
            </h1>
            <h2>
              i am self-taught web developer and designer with a passion for all
              things digital since I was a kid.
            </h2>
            <button className="btn_main mt-2 mb-6 md:max-w-[300px]">
              Download CV
            </button>
          </div>
        </section>
        <section className="hidden lg:flex">
          <section className="mx-auto flex flex-col items-center gap-2 my-10 normal-style">
            <div className="flex items-center justify-center gap-[70px]">
              <span
                className="dark:bg-light bg-dark rounded-full
           w-20 h-2 flex "
              ></span>
              <div>
                <h1 className="md:text-xl">
                  Hi There i am{" "}
                  <span className="text-style md:text-3xl">Mahdi Tijani</span>{" "}
                  AKA
                  <span className="text-style md:text-3xl"> M-TIJANI</span>
                </h1>
              </div>
              <span
                className="dark:bg-light bg-dark rounded-full
           w-20 h-2 flex "
              ></span>
            </div>
            <div>
              <h1 className="text-[15px]">
                i am self-taught web developer and designer with a passion for
                all things digital since I was a kid.
              </h1>
            </div>
            <button className="btn_main mt-2 mb-6 md:max-w-[300px]">
              Download CV
            </button>
          </section>
        </section>
      </section>
    </>
  );
}
