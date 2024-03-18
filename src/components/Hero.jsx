export default function Hero() {
  return (
    <>
      <div
        id="hero"
        className="flex flex-col gap-2  text-justify normal-style "
      >
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
    </>
  );
}
