
import { motion } from "framer-motion";


const myPaths = [
  "M0,12.147l0.24,-10.8c0,0 2.173,-2.562 3.6,1.2c1.359,3.585 2.16,8.88 2.16,8.88l2.88,-10.32c0,0 1.798,-2.917 2.64,0.72c0.842,3.637 0.96,9.84 0.96,9.84",
  "M6.017,0.038c-2.073,-0.035 -6.322,-0.713 -6,5.52c0.322,6.233 5.28,5.52 5.28,5.52c0,0 5.819,-1.55 5.52,-5.04c-0.329,-3.847 -2.727,-5.965 -4.8,-6Z"
];

export default function Signature() {
  return (
    <motion.svg
      viewBox="0 0 500 200" 
      initial="hidden"
      animate="visible"
      style={{ width: "100%", height: "auto" }}
    >
      {myPaths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          fill="transparent"
          stroke="white" 
          strokeWidth="3"
          strokeLinecap="round"
          style={{ x: i * 30 }}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
                delay: i * 0.2, 
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
}