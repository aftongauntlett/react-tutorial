import { useSimulationStore } from '@/lib/state/simulationStore';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

/**
 * OfficePhone component renders a clickable phone area with a flashing red notification dot.
 * Positioned over the office background image where the physical phone appears.
 */
export default function OfficePhone() {
  const { phase, isPhoneFlashing, activatePhone, startNarratorIdleTimer, clearNarratorIdleTimer } =
    useSimulationStore();

  // Start idle timer when phone becomes active
  useEffect(() => {
    if (phase === 'phone-active' && isPhoneFlashing) {
      startNarratorIdleTimer('phone');
    }
    return () => clearNarratorIdleTimer();
  }, [phase, isPhoneFlashing, startNarratorIdleTimer, clearNarratorIdleTimer]);

  const handlePhoneClick = () => {
    if (phase === 'phone-active' && isPhoneFlashing) {
      clearNarratorIdleTimer();
      activatePhone();
    }
  };

  // Only show the overlay when simulation is active and phone is flashing
  if (phase !== 'phone-active' || !isPhoneFlashing) return null;

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        top: '68%',
        left: '41.5%',
        width: '6%',
        height: '8%',
        zIndex: 5,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onClick={handlePhoneClick}
      title={isPhoneFlashing ? 'Answer the phone' : 'Phone'}
    >
      {/* Phone button container with 3D perspective */}
      <div className="w-full h-full relative overflow-visible" style={{ perspective: '1000px' }}>
        {/* 3D Button with Framer Motion animations */}
        <motion.div
          className="absolute"
          style={{
            top: '189%',
            left: '92%',
            width: '14px',
            height: '14px',
            borderRadius: '2px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            transformOrigin: 'center',
            transform: 'translate(-50%, -50%) rotateX(45deg) rotateY(-3deg) rotateZ(-12deg)',
            transformStyle: 'preserve-3d',
          }}
          initial={{
            backgroundColor: '#3a3a3a',
            boxShadow:
              '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.2)',
          }}
          animate={
            isPhoneFlashing
              ? {
                  backgroundColor: ['#3a3a3a', '#00ff88', '#3a3a3a'], // Fast button flashing
                  boxShadow: [
                    // Subtle breathing glow - dimmer
                    '0 0 15px rgba(0, 255, 136, 0.4), 0 -6px 12px rgba(0, 255, 136, 0.3), 0 6px 12px rgba(0, 255, 136, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                    // Subtle breathing glow - brighter
                    '0 0 25px rgba(0, 255, 136, 0.6), 0 -8px 16px rgba(0, 255, 136, 0.5), 0 8px 16px rgba(0, 255, 136, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
                  ],
                }
              : {
                  backgroundColor: '#3a3a3a',
                  boxShadow:
                    '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.2)',
                }
          }
          transition={{
            backgroundColor: {
              duration: 1.2, // Fast button flashing
              repeat: isPhoneFlashing ? Infinity : 0,
              ease: 'easeInOut',
            },
            boxShadow: {
              duration: 2.5, // Slow subtle glow breathing
              repeat: isPhoneFlashing ? Infinity : 0,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      </div>
    </motion.div>
  );
}
