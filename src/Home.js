import "./App.css";
function Home() {
  return (
    <main>
      <loader className="relative">
        <div className="h-screen w-screen absolute top-0 bg-secondary text-main flex justify-center items-center">
          <h1>VISUAL & CODE DEV. AGENCY</h1>
        </div>
      </loader>
      <section className="flex h-screen w-screen justify-center items-center">
        <div className="h-screen w-screen flex flex-col top relative bg-white overflow-clip load-active">
          <div className="flex items-center justify-center h-full">
            <div className="text-9xl font-secondary relative">
              <div className="circle absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-black rounded-full w-72 h-72"></div>
              <div className="mix-blend-difference text-white">
                <div className="w-max overflow-clip">
                  <h1 className="title">
                    Visual <span className="text-7xl">&</span> Code Dev.
                  </h1>
                </div>
                <div className="w-full overflow-clip">
                  <h2 className="text-center text-xl sub-title">
                    <span className="">Developing</span> and{" "}
                    <span className="">Designing</span> future websites.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute webPort flex left-0 -bottom-5 -translate-x-[100%] text-9xl text-[#f3f3f3]">
            <div className="w-max">
              <p>WEBSITE PORTFOLIO</p>
            </div>
          </div>
          <div className="absolute webPort2 flex left-0 -bottom-5 -translate-x-[100%] text-9xl text-[#f3f3f3]">
            <div className="w-max">
              <p>WEBSITE PORTFOLIO</p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-black h-screen">
        <div></div>
      </section>
    </main>
  );
}

export default Home;
