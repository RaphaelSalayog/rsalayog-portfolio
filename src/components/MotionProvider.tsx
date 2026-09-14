"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LazyMotion>
    );
};

export default MotionProvider;
