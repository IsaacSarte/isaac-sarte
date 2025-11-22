"use client";
import React, { Suspense, useState } from "react";
import BinocularIcon from "@/assets/svgs/binocular.svg";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";
import Projects from "@/modules/projects";
import NavBar from "@/modules/nav/nav-bar";
import Experiences from "@/modules/experiences";
import About from "@/modules/about";

const See = () => {
  const [binocularClicked, setBinocularClicked] = useState(false);
  const [shouldRenderProjects, setShouldRenderProjects] = useState(false);

  const [isExperiencesClicked, setIsExperiencesClicked] = useState(false);
  const [expLinkClicked, setExpLinkClicked] = useState(false);

  const [isAboutClicked, setIsAboutClicked] = useState(false);
  const [aboutLinkClicked, setAboutLinkClicked] = useState(false);

  const handleRenderProjects = () => {
    setBinocularClicked(!binocularClicked);
    setTimeout(() => {
      setShouldRenderProjects(!shouldRenderProjects);
    }, 500);
  };

  const handleRenderExperiences = () => {
    setExpLinkClicked(!expLinkClicked);
    setTimeout(() => {
      setIsExperiencesClicked(!isExperiencesClicked);
    }, 500);
  };

  const handleRenderAbout = () => {
    setAboutLinkClicked(!aboutLinkClicked);
    setTimeout(() => {
      setIsAboutClicked(!isAboutClicked);
    }, 500);
  };

  return (
    <Suspense fallback={null}>
      <AnimatePresence>
        {/* navbar */}
        {shouldRenderProjects ? (
          <NavBar onHomeIconClick={handleRenderProjects} />
        ) : null}

        {/* projects */}
        {isExperiencesClicked || isAboutClicked ? null : (
          <>
            {!shouldRenderProjects ? (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: binocularClicked ? 0 : 1 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "see-container relative w-screen h-screen flex flex-col md:flex-row items-center justify-between px-12 py-12 md:py-0 overflow-hidden",
                  {
                    "move-right": expLinkClicked,
                    "move-left": aboutLinkClicked,
                  }
                )}
              >
                {/* experiences nav */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", bounce: 0.25 }}
                >
                  <button
                    className="cursor-pointer absolute top-14 md:top-0 right-10 md:-rotate-90 md:relative md:right-0 md:text-2xl font-semibold whitespace-nowrap"
                    onClick={() => handleRenderExperiences()}
                  >
                    Experiences
                  </button>
                </motion.div>

                {/* binocular */}
                <div className="font-semibold flex flex-col items-center gap-4">
                  <BinocularIcon
                    onClick={() => handleRenderProjects()}
                    className="cursor-pointer binocular hover:scale-[1.05]"
                  />
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ y: binocularClicked ? -50 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400"
                  >
                    Click to See My Projects
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ y: binocularClicked ? -50 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-4xl md:text-6xl lg:text-8xl text-center"
                  >
                    Isaac Sarte
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ y: binocularClicked ? -50 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-6 border border-gray-700 rounded-2xl mt-10 md:mt-16 px-6 py-4"
                  >
                    <FiGithub size={30} color={"#9ca3af"} />
                    <FiLinkedin size={30} color={"#9ca3af"} />
                    <FiInstagram size={30} color={"#9ca3af"} />
                  </motion.div>
                </div>

                {/* about me nav */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", bounce: 0.25 }}
                >
                  <button
                    className="cursor-pointer absolute bottom-10 md:bottom-0 left-10 md:rotate-90 md:relative md:left-0 md:text-2xl font-semibold whitespace-nowrap"
                    onClick={() => handleRenderAbout()}
                  >
                    About Me
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <Projects />
            )}
          </>
        )}

        {/* experiences */}
        {isExperiencesClicked ? <Experiences /> : null}

        {/* About skills */}
        {isAboutClicked ? <About /> : null}
      </AnimatePresence>
    </Suspense>
  );
};

export default See;
