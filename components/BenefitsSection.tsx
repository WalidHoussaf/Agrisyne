'use client';

export function BenefitsSection() {
  const benefits = [
    { percentage: '85', label: 'Water Conservation', description: 'Optimize irrigation with precision monitoring' },
    { percentage: '60', label: 'Cost Reduction', description: 'Reduce operational costs through automation' },
    { percentage: '45', label: 'Yield Increase', description: 'Maximize crop production with data insights' },
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0xMiAzNmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Boosting Efficiency with
            <br />
            <span className="text-accent-300">AgriSenseAI Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover-lift animate-scale-in border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="text-7xl font-bold mb-2">
                  {benefit.percentage}
                  <span className="text-accent-300">%</span>
                </div>
                <div className="text-xl font-semibold text-accent-100">{benefit.label}</div>
              </div>
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-3xl shadow-lg flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
              </div>
              <p className="text-white/90">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
