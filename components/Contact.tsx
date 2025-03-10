"use client";

import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id='contact' className='overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 20}}
        transition={{duration: 0.8}}
        viewport={{once: true}}
        className='grid lg:grid-cols-2 gap-16'
      >
        <div className='space-y-12'>
          <motion.h2
            initial={{opacity: 0, x: -20}}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.6, delay: 0.2}}
            className='text-7xl font-bold text-gray-300'
          >
            Get in <span className='text-purple-500'>touch</span>
          </motion.h2>
          <motion.div
            initial={{opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.6, delay: 0.4}}
            className='glass p-8 rounded-2xl space-y-8'
          >
            <div className='space-y-2'>
              <p className='text-lg text-gray-300'>Phone</p>
              <a 
                href="tel:+6281341456376"
                className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                  +62 8134 1456 376 
                  <span className='text-gray-500'>&#8599;</span>
                </a>
            </div>
            <div className='space-y-2'>
              <p className='text-lg text-gray-300'>E-Mail</p>
              <a 
                href="mailto:muhammadzikro20@gmail.com"
                className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'>
                  muhammadzikro20@gmail.com
                  <span className='text-gray-500'>&#8599;</span>
                </a>
            </div>
            <div className='space-y-2'>
              <p className='text-lg text-gray-300'>Office</p>
              <address className='text-xl not-italic leading-relaxed'>
                Jln. Padang-Solok no.23 Tanjung Bingkuang <br />
                Sumatera Barat <br />
                Indonesia
              </address>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
        >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d997.3695794335974!2d100.61867928921116!3d-0.7480063401230802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNDQnNTQuNCJTIDEwMMKwMzcnMDcuNyJF!5e0!3m2!1sid!2sid!4v1741423316874!5m2!1sid!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0}}
          allowFullScreen
          loading="lazy" 
        >
        </iframe>
        </motion.div>
      </motion.div>
    </section>
  )
}
