"use client"
import React from 'react'
import MouseTrail from "@pjsalita/react-mouse-trail";
import See from '../../pages/see';

const Home = () => {
    const config = {
        color: "#b81e1e",
        idleAnimation: true,
        idleAnimationCount: 10,
        inverted: true,
        size: 25,
        trailCount: 20,
    }

    return (
        <>
            <MouseTrail {...config} />
            <See />
        </>
    )
}

export default Home;