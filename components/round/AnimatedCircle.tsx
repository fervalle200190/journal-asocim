import { motion } from "framer-motion"
import { FC } from "react"

interface AnimatedCircleProps {
     translateX: number
     translateY: number
}

export const AnimatedCircle: FC<AnimatedCircleProps> = ({ translateX, translateY }) => {
     return (
          <motion.div
               initial={{ translateX: 0, translateY: 0 }}
               animate={{ translateX, translateY }}
               transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
               }}
               className='h-60 w-60 rounded-full blur-md bg-gradient-to-r -z-5 from-cyan-500 to-blue-500'
          ></motion.div>
     )
}
