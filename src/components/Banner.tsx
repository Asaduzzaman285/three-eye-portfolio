import React, { useState, useEffect, useRef } from 'react';
import { Award, Briefcase, Users } from 'lucide-react';

const SimpleProfessionalStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0
  });
  const sectionRef = useRef(null);

  const targetValues = {
    years: 24,
    projects: 370,
    clients: 1000
  };

  const statsData = [
    {
      key: 'years',
      icon: Award,
      title: 'Years of Excellence',
      subtitle: 'Delivering quality since 2001'
    },
    {
      key: 'projects',
      icon: Briefcase,
      title: 'Projects Completed',
      subtitle: 'Successfully delivered solutions'
    },
    {
      key: 'clients',
      icon: Users,
      title: 'Satisfied Clients',
      subtitle: 'Building lasting partnerships'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const steps = 100;
    const stepTime = duration / steps;

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), target);

        setCounters(prev => ({
          ...prev,
          [key]: current
        }));

        if (current >= target) {
          clearInterval(interval);
        }
      }, stepTime);

      return interval;
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Our Track <span className="text-blue-600 font-bold">Record</span>
          </h1>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={sectionRef} className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statsData.map((stat) => {
                return (
                  <div
                    key={`card-${stat.key}`}
                    className="text-center p-4"
                  >
                    {/* Large Number */}
                    <div className="mb-2">
                      <span className="text-5xl font-semibold text-gray-900 tabular-nums">
                        {counters[stat.key]}
                      </span>
                      <span className="text-2xl font-medium text-gray-500">+</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {stat.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm font-medium text-gray-600">
                      {stat.subtitle}
                    </p>

                    {/* Simple line */}
                    <div className="mt-3 w-10 h-px bg-gray-300 mx-auto"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default SimpleProfessionalStats;
