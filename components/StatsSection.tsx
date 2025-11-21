'use client';

export default function StatsSection() {
  const stats = [
    { number: '15K+', label: 'Active Farms' },
    { number: '98%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Real-time Monitoring' },
    { number: '2.5M+', label: 'Data Points Daily' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-picture-book-green mb-2">
                {stat.number}
              </div>
              <div className="text-midnight-mirage/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
