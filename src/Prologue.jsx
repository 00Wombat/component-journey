import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Prologue() {
    return (
        <div className="bg-gray-100 h-[500vh] relative flex flex-col items-center">
            <div 
              className="w-full max-w-screen-2xl"
              style={{
                padding: "0px 24px"
              }}
            >
                <TitleSection/>
                <VisualPanel/>
            </div>
        </div>
    )
}

const PANEL_PADDING = 24;

function VisualPanel() {
    // const panelRef = useRef(null)
    // const { scrollYProgress } = useScroll()

    // const scaleFactor = useTransform(scrollYProgress, [0,.1], [200,0])

    return (
        // <div 
        //   className="sticky top-0 z-0 w-full max-w-screen-2xl flex justify-center"
        //   style={{
        //     padding: PANEL_PADDING
        //   }}
        // >
        //     <motion.div 
        //       className="bg-white overflow-hidden rounded-3xl flex justify-center w-full"
        //       style={{
        //         height: `calc(100vh - ${PANEL_PADDING * 2}px)`,
        //         y: scaleFactor
        //       }}
        //       ref={panelRef}
        //     //   initial={{y:0}}
        //     //   animate={{y:250}}
        //     >
        //         <img className="w-10/12 absolute top-16 drop-shadow-md" src="00-wireframe.png"/>
        //     </motion.div>
        // </div>
        <div 
          className="sticky top-4 bg-white w-full rounded-3xl top-4 flex flex-col items-center overflow-hidden"
          style={{
            height: `calc(100vh - ${PANEL_PADDING * 2}px)`,
          }}
        >
            {/* <img className="w-10/12 absolute top-16 drop-shadow-md" src="00-wireframe.png"/> */}
        </div>
    )
}

function TitleSection() {
    return (
        <div className="flex justify-center w-full p-10 text-center">
            <div className="centered-title w-96">
                <div className="chapter pb-2">PROLOGUE</div>
                <div className="title text-5xl font-medium tracking-tight">What is a Web Component?</div>
            </div>
        </div>
    )
}