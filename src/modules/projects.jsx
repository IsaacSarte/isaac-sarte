"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

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
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                snap: 1 / (skillSet.length - 1),

                end: () => '+=' + window.innerWidth,
            },
        });

        return () => {
            to.kill();
        };
    }, []);

    return (
        <div className="overflow-hidden flex">
            <div className="overflow-hidden">
                <div
                    id="projects"
                    ref={scroller}
                    className="flex overflow-hidden text-white w-[400vw] m-0 relative h-screen"
                >
                    <section
                        ref={projects}
                        className="projects px-12 overflow-hidden w-screen h-full bg-transparent ns-horizontal-section__item flex items-center"
                    >
                        Nyes
                    </section>
                    <section
                        ref={projects}
                        className="projects px-12 overflow-hidden w-screen h-full bg-transparent ns-horizontal-section__item flex items-center"
                    >
                        Nyes
                    </section>
                    <section
                        ref={projects}
                        className="projects px-12 overflow-hidden w-screen h-full bg-transparent ns-horizontal-section__item flex items-center"
                    >
                        Nyes
                    </section>
                    <section
                        ref={projects}
                        className="skill-set px-12 overflow-hidden w-screen h-full bg-transparent ns-horizontal-section__item flex items-center"
                    >
                        Nyes
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Projects;