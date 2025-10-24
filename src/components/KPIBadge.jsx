
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const KPIBadge = ({ text }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const match = text.match(/([+-]?\d+)/);
  const targetNumber = match ? parseInt(match[0]) : null;

  useEffect(() => {
    if (targetNumber === null || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 30;
          const increment = targetNumber / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= targetNumber) || (increment < 0 && current <= targetNumber)) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.round(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  const displayText = targetNumber !== null ? text.replace(/[+-]?\d+/, count.toString()) : text;

  return (
    <div
      ref={ref}
      className="inline-block px-3 py-1 bg-foreground/5 dark:bg-foreground/10 rounded text-sm font-medium text-muted-foreground"
    >
      {displayText}
    </div>
  );
};

export default KPIBadge;
