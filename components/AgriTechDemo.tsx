'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf, Satellite, BarChart3, Wifi } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DemoSection() {
  const router = useRouter();
  
  const handleDemoClick = () => {
    router.push('/register');
  };
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: 'Smart Crop Monitoring',
      desc: 'Real-time insights into plant health and field conditions.',
    },
    {
      icon: <Satellite className="w-6 h-6 text-emerald-600" />,
      title: 'Satellite & Sensor Fusion',
      desc: 'Accurate predictions backed by multi-source field data.',
    },
    {
      icon: <Wifi className="w-6 h-6 text-emerald-600" />,
      title: 'Live Soil Tracking',
      desc: 'Continuous updates on soil moisture and nutrient levels.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      title: 'AI-Driven Insights',
      desc: 'Automated decisions that boost yield and reduce waste.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-24">
      {/* Background organic shapes */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-100 opacity-40 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-[-6rem] right-[-4rem] h-96 w-96 rounded-full bg-lime-100 opacity-40 blur-3xl -z-10" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center lg:px-0">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200 shadow-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 0 216 256" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="52.7 76.92 148 129.08 243.3 76.92" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M151.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,151.84,25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="148" y1="129.09" x2="148" y2="232" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-medium text-emerald-700 tracking-wide">
              LIVE DEMO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight gradient-text-blue mt-2">
            It starts with smarter fields
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
            From soil to sky, AgriSense unifies your sensor network into one live dashboard,
            revealing issues days before they appear in the field.
          </p>
          <button
            className="mt-2 text-sm sm:text-base font-medium text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50/70 px-4 py-1.5 shadow-sm hover:shadow transition"
          >
            Explore all metrics
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* DEMO CARD */}
        <div className="relative mt-28 w-full max-w-5xl">
          <div
            className="pointer-events-none absolute -left-10 top-1/2 hidden h-[115%] w-[52%] -translate-y-1/2 -rotate-3 rounded-[28px] bg-emerald-50/80 shadow-[0_32px_80px_rgba(15,23,42,0.30)] sm:block z-0"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 top-1/2 hidden h-[115%] w-[52%] -translate-y-1/2 rotate-3 rounded-[28px] bg-lime-50/80 shadow-[0_32px_80px_rgba(15,23,42,0.30)] sm:block z-0"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 mx-auto min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.25)]"
          >
            {/* Top chrome */}
            <div className="flex items-center justify-between px-8 pt-6 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                  AS
                </span>
                <span>AgriSense Console</span>
              </div>
              <div className="hidden rounded-full bg-slate-900 px-1 py-1 text-xs text-slate-100 shadow-sm sm:flex">
                <button className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white">
                  Overview
                </button>
                <button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-200/70 hover:text-white">
                  Fields
                </button>
                <button className="rounded-full px-4 py-1.5 text-xs font-medium text-slate-200/70 hover:text-white">
                  Irrigation
                </button>
                <button className="hidden rounded-full px-4 py-1.5 text-xs font-medium text-slate-200/70 hover:text-white lg:inline-flex">
                  Forecast
                </button>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="hidden sm:inline">Invite agronomist</span>
                <div className="relative h-8 w-8">
                  <Image
                    src="/Personal-Image.png"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main layout */}
            <div className="flex h-full border-t border-slate-100 bg-slate-50/60">
              {/* Sidebar - uses features list */}
              <aside className="hidden w-60 flex-shrink-0 flex-col border-r border-slate-100 bg-white/80 px-6 py-6 text-left md:flex">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Data streams
                </p>
                <div className="space-y-1.5">
                  {features.map((f, idx) => (
                    <button
                      key={f.title}
                      className={`flex w-full items-center gap-3 rounded-full px-3 py-2 text-xs font-medium ${
                        idx === 0
                          ? 'bg-emerald-50 text-emerald-800'
                          : 'text-slate-600 hover:bg-slate-100/80'
                      }`}
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                        {f.icon}
                      </span>
                      <span className="truncate">{f.title}</span>
                    </button>
                  ))}
                </div>
              </aside>

              {/* Center content */}
              <div className="flex flex-1 flex-col px-6 py-6">
                <div className="flex flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <p className="text-xs font-medium uppercase tracking-[0.1em] text-emerald-600 -ml-20">
                      Field 7 North Ridge
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 mt-1">
                      Live crop health snapshot
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Updated <span className="font-medium text-slate-700">23 sec ago</span>
                  </p>
                </div>

                {/* Summary cards */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 text-left text-white shadow-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-100/90">
                      Moisture index
                    </p>
                    <p className="mt-3 text-4xl font-semibold">78%</p>
                    <p className="mt-1 text-xs text-emerald-100/90">Optimal for corn at this growth stage</p>
                    <div className="mt-4 h-1.5 w-full rounded-full bg-emerald-900/40">
                      <div className="h-full w-[72%] rounded-full bg-lime-300" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 text-left shadow-sm">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Stress alerts
                    </p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <p className="text-3xl font-semibold text-slate-900">3</p>
                      <span className="text-xs text-emerald-600">of 24 zones</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Early signs of water stress detected on the south edge.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Stable last 2 hours
                    </div>
                  </div>
                </div>

                {/* Table / chart strip */}
                <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                  <div className="col-span-2 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-medium text-slate-700">Soil depth profile</span>
                      <span>Today 06:00 – 18:00</span>
                    </div>
                    <div className="mt-4 relative h-28 rounded-xl bg-gradient-to-br from-emerald-50 via-emerald-100 to-white overflow-hidden">
                      <svg
                        viewBox="0 0 100 40"
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="soil-depth-line" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 30 L10 28 L20 26 L30 24 L40 21 L50 19 L60 17 L70 15 L80 13 L90 11 L100 10"
                          fill="none"
                          stroke="url(#soil-depth-line)"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 30 L10 28 L20 26 L30 24 L40 21 L50 19 L60 17 L70 15 L80 13 L90 11 L100 10"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="0.8"
                          strokeLinecap="round"
                          strokeOpacity="0.8"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 flex justify-between text-[11px] text-slate-500">
                      <span>0 cm</span>
                      <span>15 cm</span>
                      <span>30 cm</span>
                      <span>45 cm</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900 p-4 text-left text-slate-50 shadow-sm">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">
                      Yield forecast
                    </p>
                    <p className="mt-3 text-3xl font-semibold">+12%</p>
                    <p className="mt-1 text-xs text-slate-300">
                      vs. 5-year average if current irrigation plan is maintained.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[11px] text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      All risk factors within safe range
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <aside className="hidden w-72 flex-shrink-0 flex-col border-l border-slate-100 bg-white/90 px-5 py-6 text-left lg:flex">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Tasks today
                </p>
                <ul className="mt-3 space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Increase irrigation on north pivot by 8% between 02:00–04:00.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                    <span>Scout for leaf spot on rows 12–18; risk trending up.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                    <span>Review fertilizer plan for next rain window on Friday.</span>
                  </li>
                </ul>
                <div className="mt-5 rounded-2xl bg-slate-50 p-3 text-[11px] text-slate-500">
                  <p className="font-medium text-slate-800">Next satellite pass</p>
                  <p className="mt-1">In 3 hours: higher resolution imagery for stress detection.</p>
                </div>
              </aside>
            </div>
          </motion.div>
        </div>

        {/* FEATURES GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="mt-16 grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-emerald-50 bg-white/70 p-5 shadow-sm backdrop-blur hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-3">{f.icon}</div>
              <h4 className="mb-1 font-semibold text-slate-900">{f.title}</h4>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA BUTTON */}
        <motion.button
          onClick={handleDemoClick}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:translate-y-0 sm:text-lg"
        >
          Open live AgriSense demo
        </motion.button>
      </div>
    </section>
  );
}
