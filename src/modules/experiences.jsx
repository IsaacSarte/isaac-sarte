"use client"
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'

const Item = ({ url, scale, ...props }) => {
    const visible = useRef(false)
    const [hovered, hover] = useState(false)
    const ref = useIntersect((isVisible) => (visible.current = isVisible))
    const { height } = useThree((state) => state.viewport)

    useFrame((state, delta) => {
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
        ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
        ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 1 : 0, 4, delta)
    })

    return (
        <group {...props}>
            <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={"/proj1.png"} />
        </group>
    )
}

const Items = () => {
    const { width: w, height: h } = useThree((state) => state.viewport)
    return (
        <Scroll>
            <Item scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
            <Item scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
            <Item scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
            <Item scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
            <Item scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
            <Item scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
            <Item scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
            <Item scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
            <Item scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
        </Scroll>
    )
}

const Experiences = () => (
    <div className="h-screen">
        <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
            <ScrollControls damping={1} pages={5}>
                <Items />
                <Scroll html style={{ width: '100%' }}>
                    <span className="absolute top-[100vh] right-[20vw] text-[3.5em]" style={{ transform: `translate3d(0,-100%,0)` }}>
                        Mosaic Solutions Inc
                        <br />
                        May 2022 - Present
                    </span>
                    <span className="absolute top-[180vh] left-[10vw] text-[2em]">Manila Fashion Festival (2022)</span>
                    <span className="absolute top-[260vh] right-[10vw] text-[3em]">Vawchoo (2023)</span>
                    <span className="absolute top-[350vh] left-[10vw] text-[2em]">
                        JNCE Medical 
                        <br />
                        and Diagnostic Clinic (2023)
                    </span>
                    <span className="absolute top-[450vh] right-[10vw] text-[3em]">
                        Magic Inc
                        <br />
                        June 2023 - Present
                    </span>
                </Scroll>
            </ScrollControls>
        </Canvas>
    </div>
)

export default Experiences;