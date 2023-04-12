import {useState} from 'react'
import { motion } from 'framer-motion'

const Card = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      layout
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="w-42 rounded-2xl border-2 flex grid-cols-2 h-48 mt-5"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-18 ml-1 p-3 flex flex-col items-center justify-between">
        <motion.h3 layout className="text-md font-medium">
          date
        </motion.h3>
        <hr className="divider mb-0" />
        <motion.p layout>weather icon</motion.p>
        <motion.h2 layout className="text-4xl">
          20&deg;C
        </motion.h2>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full p-3 flex flex-col items-start justify-between"
        >
          <p className="font-medium">sisisi</p>
          <hr className="divider mt-1.5" />
          <p className="text-xs">Sunrise: sunrise</p>
          <p className="text-xs">Sunset: sunseet</p>
          <p className="text-xs">
            High Temp:{" "}
            <span className="text-md font-medium">
             high temp&deg;C
            </span>
          </p>
          <p className="text-xs">
            Low Temp:{" "}
            <span className="text-md font-medium">
             low temp&deg;C
            </span>
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Card