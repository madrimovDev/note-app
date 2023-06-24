import React from 'react'
import { motion } from 'framer-motion'

export default function Archive() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
    >
      Archive
    </motion.div>
  )
}
