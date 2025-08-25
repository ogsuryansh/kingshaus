import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const tooltipContent = {
    'build-smarter': 'By pre-constructing our homes offsite, we save valuable resources.',
    'sustainability': 'We can lower the carbon footprint of home construction by 80%.',
    'about': 'Kingshaus has been developing quality homes for over 75 years.'
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-[9999]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-white text-2xl font-bold flex items-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              KINGSHAUS®
            </motion.div>

            <div className="hidden lg:block">
                             <motion.div 
                 className={`bg-white shadow-lg px-4 py-2 relative ${hoveredItem ? 'rounded-t-lg' : 'rounded-lg'}`}
                 initial={{ opacity: 0, scale: 0.8, y: -20 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 transition={{ duration: 1.2, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                 onMouseEnter={() => setHoveredItem('sustainability')}
                 onMouseLeave={() => setHoveredItem(null)}
               >
                <div className="flex items-center space-x-6">
                  {/* Build Smarter */}
                  <motion.a 
                    href="#build-smarter" 
                    className="font-bold text-xs uppercase tracking-wide px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-400"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onMouseEnter={() => setHoveredItem('build-smarter')}
                  >
                    Build Smarter
                  </motion.a>

                  {/* Sustainability */}
                  <motion.a 
                    href="#sustainability" 
                    className="font-bold text-xs uppercase tracking-wide px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-400"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onMouseEnter={() => setHoveredItem('sustainability')}
                  >
                    Sustainability
                  </motion.a>

                  {/* About */}
                  <motion.a 
                    href="#about" 
                    className="font-bold text-xs uppercase tracking-wide px-1 py-0.5 text-gray-600 hover:text-black transition-colors duration-400"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onMouseEnter={() => setHoveredItem('about')}
                  >
                    About
                  </motion.a>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link 
                      to="/contact"
                      className="text-white px-4 py-1.5 rounded-md font-medium transition-colors duration-400 text-xs uppercase block hover:bg-[#2a3d35]"
                      style={{ backgroundColor: '#354d43' }}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>

                                 {/* Shared Tooltip */}
                 <AnimatePresence>
                   {hoveredItem && (
                     <motion.div
                       className="absolute top-full left-0 right-0 z-50 pointer-events-none"
                       initial={{ opacity: 0, y: -10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                     >
                       <div className="bg-white text-gray-600 text-sm font-medium py-6 px-6 rounded-b-lg">
                         {tooltipContent[hoveredItem]}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </motion.div>
            </div>

            <motion.button
              className="lg:hidden bg-white rounded-lg p-2 shadow-lg relative z-[10001]"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <motion.div 
                  className="w-full h-0.5 bg-gray-800 rounded"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.div 
                  className="w-full h-0.5 bg-gray-800 rounded"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeMenu} />
            <motion.div
              className="absolute top-20 right-6 bg-white rounded-lg p-6 w-[85%] max-w-sm shadow-xl"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="space-y-5">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-black mb-2">Build Smarter</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">By pre-constructing our homes offsite, we save valuable resources.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-black mb-2">Sustainability</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">We can lower the carbon footprint of home construction by 80%.</p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-black mb-2">About</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Kingshaus has been developing quality homes for over 75 years.</p>
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link 
                    to="/contact"
                    className="w-full text-white px-6 py-3 rounded-md font-medium transition-colors duration-400 block text-center hover:bg-[#2a3d35]"
                    style={{ backgroundColor: '#354d43' }}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
