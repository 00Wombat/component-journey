import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Prologue() {
    return (
        <div className="bg-gray-100 h-[500vh] relative">
            <div className="centered-title absolute justify-self-center bg-red-50">
                <div className="chapter ">PROLOGUE</div>
                <div className="title text-5xl font-medium tracking-tight">What is a Web Component?</div>
            </div>
            <VisualPanel/>
        </div>
    )
}

const PANEL_PADDING = 24;

function VisualPanel() {
    const panelRef = useRef(null)
    const { scrollYProgress } = useScroll()

    const scaleFactor = useTransform(scrollYProgress, [0,.1], [250,0])

    return (
        <div 
          className="sticky top-0 z-0"
          style={{
            padding: PANEL_PADDING
          }}
        >
            <motion.div 
              className="bg-white overflow-hidden rounded-3xl"
              style={{
                height: `calc(100vh - ${PANEL_PADDING * 2}px)`,
                y: scaleFactor
              }}
              ref={panelRef}
            >

            </motion.div>
        </div>
    )
}