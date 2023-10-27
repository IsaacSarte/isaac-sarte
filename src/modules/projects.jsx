"use client"
import { useEffect, useRef, useState, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { projectList } from '@/utils/projects/projectList';
import { FiEye } from 'react-icons/fi';
import ArrowIcon from '@/assets/svgs/arrowLeftRight.svg';
import ProjectInfo from '@/components/projects/project-info';
import cn from 'classnames';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const scroller = useRef();
    const projects = useRef();

    useEffect(() => {
        let skillSet = gsap.utils.toArray('.projects');

        let to = gsap.to(skillSet, {
            xPercent: () => -100 * (skillSet.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: scroller.current,
                markers: false,
                pin: true,
                pinSpacing: true,
                scrub: 0,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                // snap: 1 / (skillSet.length - 1),

                end: () => '+=' + window.innerWidth,
            },
        });

        return () => {
            to.kill();
        };
    }, []);

    const projectGroups = [];
    for (let i = 0; i < projectList.length; i += 4) {
        projectGroups.push(projectList.slice(i, i + 4));
    }

    const [projectClicked, setProjectClicked] = useState(false);
    const [showProjectInfo, setShowProjectInfo] = useState(false);
    const [projDets, setProjectDets] = useState({});

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
                            'hidden': showProjectInfo
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
                            className="flex overflow-hidden text-white w-[400vw] m-0 relative h-screen"
                        >
                            {projectGroups.map((group) => (
                                <section
                                    key={group.id}
                                    ref={projects}
                                    className="projects px-12 overflow-hidden w-screen h-full flex items-center justify-between gap-6"
                                >
                                    {group.map((project, projectIndex) => (
                                        <motion.div
                                            key={project.id} 
                                            className={cn("relative group cursor-pointer", {
                                                'animate-ping': projectClicked
                                            })}
                                            initial={{
                                                opacity: 0,
                                                y: (150 * (projectIndex + 75)),
                                                x: (150 * (projectIndex + 50)),
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                x: 0
                                            }}
                                            transition={{ delay: 0.001 * (projectIndex + 1.05), duration: 1.125, type: 'spring', bounce: 0.05 }}
                                            whileHover={{
                                                rotate: 15,
                                                scale: 0.75,
                                                transition: { duration: 0.5 }
                                            }}
                                            onClick={() => {handleShowProjectInfo(); setProjectDets(project);}}
                                        >
                                            <motion.div className="project-info opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                                                <FiEye size={40} className="absolute top-6 right-6" />
                                                <span className="absolute bottom-6 ml-4 opacity-75 bg-[#fbfbfb] text-black px-4 py-2 uppercase border border-black rounded-xl">{project.title}</span>
                                            </motion.div>
                                            <Image 
                                                src={project.image}
                                                alt={project.title}
                                                width={400} 
                                                height={400}
                                                className="rounded-lg hover:rounded-[8rem] transition-all ease-in-out duration-[500ms]"
                                                priority
                                            />
                                        </motion.div>
                                    ))}
                                </section>
                            ))}

                            <div className="absolute bottom-16 w-screen flex justify-center">
                                <div className="border border-gray-700 rounded-2xl px-6 py-4 flex items-center gap-2">
                                    <span className="text-xl">Scroll</span>
                                    <ArrowIcon className="rotate-90 arrow-left-right" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* specific project */}
                    {showProjectInfo && (
                        <ProjectInfo projDets={projDets} />
                    )}
                </div>
            </AnimatePresence>
        </Suspense>
    );
}

export default Projects;