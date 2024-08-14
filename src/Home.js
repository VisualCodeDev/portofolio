import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import "./App.css";

function Home() {
  const scrollRef = useRef(null);
  const ourWorkRef = useRef(null);
  const { scrollYProgress: scrollcContain } = useScroll({ target: scrollRef });
  const { scrollYProgress: ourWorkScroll } = useScroll({ target: ourWorkRef });

  console.log(ourWorkRef);
  const height = useTransform(scrollcContain, [0, 1], ["0px", "83px"]);
  const scale = useTransform(ourWorkScroll, [0, 1], [1, 3.6]);
  const text = useTransform(ourWorkScroll, [0, 1], ["500%", "0%"]);
  const pos1 = useTransform(ourWorkScroll, [0, 1], ["-3rem", "-6rem"]);
  const pos2 = useTransform(ourWorkScroll, [0, 1], ["0%", "-20%"]);
  const pos3 = useTransform(ourWorkScroll, [0, 1], ["-3rem", "3rem"]);
  const pos4 = useTransform(ourWorkScroll, [0, 1], ["0%", "20%"]);

  return (
    <main>
      <loader className="relative">
        <div className="fixed top-0 w-screen h-screen pointer-events-none overflow-hidden">
          <div className="loader h-screen w-screen absolute top-0 bg-secondary text-main flex justify-center items-center overflow-clip">
            <h1>VISUAL & CODE DEV. AGENCY</h1>
          </div>
        </div>
      </loader>
      <section className="h-screen justify-center items-center pointer-events-none relative z-[1] overflow-x-clip">
        <div className="flex justify-center items-center h-full w-full">
          <div className="h-screen w-screen flex flex-col top relative z-[1] bg-main load-active">
            <div className="flex items-center justify-center h-full">
              <div className="text-[10rem] font-serif text-secondary relative">
                <div className="circle absolute top-1/2 -translate-y-1/2 left-[5%] -translate-x-1/2 bg-secondary rounded-full scale-x-125 w-[21rem] h-[21rem]"></div>
                <div className="mix-blend-difference text-main">
                  <div className="w-max overflow-clip">
                    <h1 className="title">
                      Visual <span className="text-7xl">&</span> Code Dev.
                    </h1>
                  </div>
                  <div className="w-full overflow-clip">
                    <h2 className="text-center text-2xl sub-title">
                      <span className="">Developing</span> and{" "}
                      <span className="">Designing</span> future websites.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute webPort flex left-0 -bottom-0 -translate-x-[100%] text-9xl text-[#f3f3f3]">
              <div className="w-max">
                <p>COMPANY PROFILE</p>
              </div>
            </div>
            <div className="absolute webPort2 flex left-0 -bottom-0 -translate-x-[100%] text-9xl text-[#f3f3f3]">
              <div className="w-max">
                <p>COMPANY PROFILE</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="w-screen relative overflow-x-clip">
          <motion.div
            variants={{
              before: { opacity: 0 },
              after: { opacity: 1 },
            }}
            initial="before"
            animate="after"
            transition={{ duration: 2, delay: 4 }}
            className="w-full h-[83px] trans-active"
            style={{
              height,
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] bg-main w-[150%] h-[750%] rounded-[50%]"></div>
          </motion.div>
        </div>
      </section>
      {/*  */}
      <section
        className="bg-secondary h-[500vh] w-full transition-none py-[10%]"
        ref={ourWorkRef}
      >
        <div className="sticky h-screen top-0 left-0 overflow-hidden transition-none">
          <motion.div
            className="relative w-screen h-screen my-10 overflow-hidden"
            style={{
              scale,
            }}
          >
            <div
              style={{
                scale,
              }}
              className="h-full flex justify-center items-center overflow-clip mockmain"
            >
              <div className="w-[30%] h-[30%] relative">
                <img
                  src="./images/mockups/mockup0.jpg"
                  className="w-full h-full object-cover"
                  alt="mockmain"
                />
                <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-main font-serif">
                  <div className="h-max overflow-clip">
                    <motion.div
                      style={{
                        translateY: text,
                      }}
                    >
                      Our Works
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <motion.div
                style={{
                  translateY: pos1,
                }}
                className="absolute top-0 left-0 w-[65%] h-[19rem] overflow-clip mock1"
              >
                <img
                  src="./images/mockups/mockup1.jpg"
                  className="-translate-y-[6rem]"
                  alt="mock1"
                />
              </motion.div>
              <motion.div
                style={{
                  translateY: "-7.7rem",
                  translateX: pos2,
                }}
                className="absolute top-1/2 left-0 h-[30rem] w-[33%] overflow-clip mock2"
              >
                <img
                  src="./images/mockups/mockup1.jpg"
                  className="-translate-y-[6rem] w-full h-full object-cover"
                  alt="mock2"
                />
              </motion.div>
              <motion.div
                style={{
                  translateY: pos3,
                }}
                className="absolute bottom-0 right-0 -translate-x-[3rem] -translate-y-[3rem] w-[65%] h-[13rem] overflow-clip mock3"
              >
                <img
                  src="./images/mockups/mockup1.jpg"
                  className="-translate-y-[6rem]"
                  alt="mock3"
                />
              </motion.div>
              <motion.div
                style={{
                  translateY: "9.6rem",
                  translateX: pos4,
                }}
                className="absolute top-0 right-0 translate-y-[7.4rem] h-[30rem] w-[33%] overflow-clip mock4"
              >
                <img
                  src="./images/mockups/mockup1.jpg"
                  className="-translate-y-[6rem] w-full h-full object-cover"
                  alt="mock2"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
