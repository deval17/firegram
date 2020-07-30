import React from 'react';
import { motion } from 'framer-motion';

const Title = () => {
  return (
    <motion.div className="title"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
      <h1>MiuGram</h1>
      <h2>Welcome, Miraya Choksi</h2>
      <p>All pictures of Miu.</p>
    </motion.div>
  )
}

export default Title;