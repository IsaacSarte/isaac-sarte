"use client";
import { useEffect, useRef, useState, Suspense, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { projectList } from "@/utils/projects/projectList";
import { FiEye } from "react-icons/fi";
import ArrowIcon from "@/assets/svgs/arrowLeftRight.svg";
import ProjectInfo from "@/components/projects/project-info";
import cn from "classnames";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const scroller = useRef();
  const projects = useRef();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const scrollTriggerInstance = useRef(null);

  // Detect mobile viewport
  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const newIsMobile = window.innerWidth < 768;
        setIsMobile(newIsMobile);
      }, 100);
    };

    window.addEventListener("resize", checkMobile);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate project groups based on screen size
  // Mobile: 1 project per view, Desktop: 4 projects per view (original behavior)
  const projectGroups = useMemo(() => {
    const groups = [];
    if (isMobile) {
      // Mobile: each project gets its own section
      for (let i = 0; i < projectList.length; i++) {
        groups.push([projectList[i]]);
      }
    } else {
      // Desktop: original behavior - groups of 4
      for (let i = 0; i < projectList.length; i += 4) {
        groups.push(projectList.slice(i, i + 4));
      }
    }
    return groups;
  }, [isMobile]);

  useEffect(() => {
    // Kill existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars.trigger === scroller.current) {
        trigger.kill();
      }
    });

    if (scrollTriggerInstance.current) {
      scrollTriggerInstance.current.kill();
      scrollTriggerInstance.current = null;
    }

    // Wait for DOM to update after isMobile change
    const timeoutId = setTimeout(() => {
      if (!scroller.current) return;

      let skillSet = gsap.utils.toArray(".projects");

      if (skillSet.length === 0) return;

      // Enable ScrollTrigger for both mobile and desktop
      let to = gsap.to(skillSet, {
        xPercent: () => -100 * (skillSet.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scroller.current,
          markers: false,
          pin: true,
          pinSpacing: true,
          scrub: 0,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // Original end calculation for desktop, adjusted for mobile
          end: () => "+=" + window.innerWidth,
        },
      });

      scrollTriggerInstance.current = to;

      // Refresh ScrollTrigger after setup
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === scroller.current) {
          trigger.kill();
        }
      });
      if (scrollTriggerInstance.current) {
        scrollTriggerInstance.current.kill();
        scrollTriggerInstance.current = null;
      }
    };
  }, [isMobile, projectGroups.length]);

  const [projectClicked, setProjectClicked] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [projectDets, setProjectDets] = useState({});

  const handleShowProjectInfo = () => {
    setProjectClicked(!projectClicked);
    setTimeout(() => {
      setShowProjectInfo(!showProjectInfo);
    }, 500);
  };

  return (
    <Suspense fallback={null}>
      <AnimatePresence>
        <div className="overflow-hidden">
          {/* all projects */}
          <motion.div
            className={cn("overflow-hidden relative", {
              hidden: showProjectInfo,
            })}
            initial={{
              opacity: projectClicked ? 1 : 0,
            }}
            animate={{
              opacity: projectClicked ? 0 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div
              id="projects"
              ref={scroller}
              className="flex overflow-hidden text-white m-0 relative h-screen"
              style={{
                width: `${projectGroups.length * 100}vw`,
              }}
            >
              {projectGroups.map((group, groupIndex) => (
                <section
                  key={`group-${groupIndex}`}
                  ref={projects}
                  className={cn(
                    "projects overflow-hidden w-screen h-full flex items-center",
                    {
                      "justify-center px-4": isMobile,
                      "justify-between px-12 gap-6": !isMobile,
                    }
                  )}
                >
                  {group.map((project, projectIndex) => (
                    <div
                      key={project.id}
                      className={cn("flex flex-col", {
                        "w-full max-w-sm": isMobile,
                      })}
                    >
                      <motion.div
                        className={cn(
                          "relative group cursor-pointer border border-gray-500 border-opacity-40",
                          {
                            "animate-ping": projectClicked,
                          }
                        )}
                        initial={{
                          opacity: 0,
                          y: isMobile ? 50 : 150 * (projectIndex + 75),
                          x: isMobile ? 0 : 150 * (projectIndex + 50),
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.01 * (projectIndex + 1.05),
                          duration: 1.125,
                          type: "spring",
                          bounce: 0.05,
                        }}
                        whileHover={{
                          rotate: 15,
                          scale: 0.75,
                          transition: { duration: 0.5 },
                        }}
                        onClick={() => {
                          handleShowProjectInfo();
                          setProjectDets(project);
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={isMobile ? 300 : 400}
                          height={isMobile ? 300 : 400}
                          className="hover:rounded-lg transition-all ease-in-out duration-[500ms] w-full h-auto"
                          priority={groupIndex === 0 && projectIndex === 0}
                        />
                      </motion.div>
                      <motion.div className="project-info opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out mt-4">
                        <span className="opacity-75 bg-[#fbfbfb] text-black px-4 py-2 uppercase border border-black rounded-xl inline-block">
                          {project.title}
                        </span>
                      </motion.div>
                    </div>
                  ))}
                </section>
              ))}

              <div className="absolute bottom-16 w-screen flex justify-center">
                <div
                  className={cn(
                    "border border-gray-700 rounded-2xl flex items-center gap-2",
                    {
                      "px-4 py-2": isMobile,
                      "px-6 py-4": !isMobile,
                    }
                  )}
                >
                  <span
                    className={cn({
                      "text-sm": isMobile,
                      "text-xl": !isMobile,
                    })}
                  >
                    Scroll
                  </span>
                  <ArrowIcon
                    className={cn("rotate-90 arrow-left-right", {
                      "w-4 h-4": isMobile,
                      "w-5 h-5": !isMobile,
                    })}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* specific project */}
          {showProjectInfo && <ProjectInfo projDets={projectDets} />}
        </div>
      </AnimatePresence>
    </Suspense>
  );
};

export default Projects;
