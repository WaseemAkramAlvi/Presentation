
import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { SlideLayout } from './components/SlideLayout';
import { CustomChart } from './components/ChartComponents';
import { FinanceCard } from './components/FinancialCards';
import { Timeline } from './components/Timeline';
import { INSTITUTION_NAME, LOCATION } from './constants';
import {
  Users, MapPin, Award, BookOpen, Building, Briefcase,
  ChevronRight, ChevronLeft, Layout, ShieldCheck, Target,
  AlertTriangle, CheckCircle2, Quote, TrendingUp, UserCheck,
  UserX, GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (slideId: number) => {
    const element = document.getElementById(`slide-${slideId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSlide(slideId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const slideHeight = window.innerHeight;
        const newSlide = Math.round(container.scrollTop / slideHeight) + 1;
        if (newSlide !== currentSlide && newSlide >= 1 && newSlide <= 15) {
          setCurrentSlide(newSlide);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [currentSlide]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      if (currentSlide < 15) scrollToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      if (currentSlide > 1) scrollToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="flex h-screen overflow-hidden bg-report-bg">
      <Sidebar currentSlide={currentSlide} onNavigate={scrollToSlide} />

      <div
        ref={scrollContainerRef}
        className="flex-grow overflow-y-auto h-screen lg:ml-64 scroll-smooth snap-y snap-mandatory"
      >
        {/* Slide 1: Cover */}
        <div id="slide-1" className="h-screen snap-start">
          <div className="h-full bg-primary relative overflow-hidden flex flex-col justify-center items-center text-center px-12">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="/images/hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-accent shadow-lg z-10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full -ml-48 -mb-48"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="z-20 max-w-6xl"
            >
              {/* Logos at the top */}
              <div className="flex items-center justify-center gap-16 mb-12">
                <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-2xl border-2 border-white/20 flex items-center justify-center">
                  <img src="/images/tevtalogo.png" alt="TEVTA Logo" className="w-full h-full object-contain" />
                </div>
                <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-2xl border-2 border-white/20 flex items-center justify-center">
                  <img src="/images/punjablogo.png" alt="Government of Punjab Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Primary Heading: Institute Name */}
              <h1 className="font-heading text-6xl font-black text-white uppercase tracking-tighter mb-2 leading-[1.1]">
                {INSTITUTION_NAME}
              </h1>

              {/* Location: Small Subheading */}
              <p className="text-accent font-heading font-bold text-2xl uppercase tracking-[0.25em] mb-6">
                {LOCATION}
              </p>

              <div className="h-1.5 w-64 bg-accent mx-auto mb-10 rounded-full"></div>

              {/* Principal Name */}
              <p className="text-white/80 text-lg font-medium tracking-wide mb-2">
                Shahzada M. Saleem Sarwar
              </p>
              <p className="text-accent/80 text-sm uppercase tracking-widest">
                Principal
              </p>
            </motion.div>
          </div>
        </div>

        {/* Slide 2: Institute Overview */}
        <div id="slide-2" className="h-screen snap-start">
          <SlideLayout pageNumber={2} title="Institute Overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
              <div className="space-y-8">
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                  <MapPin className="text-primary shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-primary uppercase text-sm mb-1">Strategic Location</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Strategically located in the heart of the Industrial Zone, ensuring proximity to over 200+ industry partners and facilitating seamless on-job training.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-accent">
                  <ShieldCheck className="text-accent shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-primary uppercase text-sm mb-1">Regulatory Affiliation</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Fully accredited by National Vocational and Technical Training Commission (NAVTTC) and Punjab Board of Technical Education (PBTE).
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
                  <h3 className="font-heading font-bold text-primary text-xl mb-4 flex items-center gap-2">
                    <Target size={24} className="text-accent" /> Our Institutional Mission
                  </h3>
                  <p className="italic text-gray-700 leading-relaxed text-lg font-medium">
                    "To empower the youth of Punjab with globally competitive technical skills and moral values through high-quality vocational training, fostering economic growth and sustainable development."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Users />, label: "Student Capacity", val: "900+", sub: "Enrolled in 21 Key Disciplines" },
                  { icon: <Award />, label: "Placement Rate", val: "24%", sub: "Industrial Job Success Rate" },
                  { icon: <Building />, label: "Lab Facilities", val: "18", sub: "Specialized Hi-Tech Workshops" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md flex items-center gap-6 transition-all">
                    <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-widest">{item.label}</p>
                      <p className="text-3xl font-black text-primary">{item.val}</p>
                      <p className="text-xs text-gray-400 font-medium italic">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideLayout>
        </div>

        {/* Slide 3: Infrastructure */}
        <div id="slide-3" className="h-screen snap-start">
          <SlideLayout pageNumber={3} title="Infrastructure & Facilities">
            <div className="grid grid-cols-3 gap-8 h-full">
              <div className="col-span-1 bg-primary rounded-2xl p-8 text-white flex flex-col justify-center">
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Total Campus Area</p>
                <h3 className="text-6xl font-black mb-2">107</h3>
                <p className="text-2xl font-light mb-8 opacity-70">Kanals</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm font-medium opacity-60">Covered Area</span>
                    <span className="text-sm font-bold">75,135 Sq Ft</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm font-medium opacity-60">Un-Covered Area</span>
                    <span className="text-sm font-bold">507,480 Sq Ft</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm font-medium opacity-60">Total Area</span>
                    <span className="text-sm font-bold">582,615 Sq Ft</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 flex-grow h-1/2">
                  <h4 className="font-bold text-primary uppercase text-sm mb-6 border-b pb-4">Covered vs Uncovered Area (Distribution)</h4>
                  <CustomChart type="horizontalBar" data={[
                    { name: 'Workshops', value: 140000 },
                    { name: 'Academic', value: 85000 },
                    { name: 'Hostels', value: 45000 },
                    { name: 'Green Area', value: 237480 },
                  ]} />
                </div>
                <div className="grid grid-cols-2 gap-8 h-1/2">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-primary/5 text-primary rounded-full mb-4">
                      <Building size={32} />
                    </div>
                    <h5 className="font-bold text-primary">High-Tech Labs</h5>
                    <p className="text-gray-400 text-xs">Equipped with 2024 Industry Standards</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-accent/10 text-accent rounded-full mb-4">
                      <ShieldCheck size={32} />
                    </div>
                    <h5 className="font-bold text-primary">Security & Safety</h5>
                    <p className="text-gray-400 text-xs">Full CCTV coverage & Fire Safety compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideLayout>
        </div>

        {/* Slide 4: Organizational Structure */}
        <div id="slide-4" className="h-screen snap-start bg-[#F8F9FA]">
          <div className="h-full flex flex-col px-12 py-8">
            {/* Title Section */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-black text-[#0B5D3B] mb-3 tracking-tight"
              >
                ORGANOGRAM
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 font-medium"
              >
                Govt. Technical Training Institute, Rahim Yar Khan
              </motion.p>
              <div className="w-32 h-1 bg-[#C9A227] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Organizational Chart */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Principal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-[#0B5D3B] text-white px-12 py-5 rounded-xl shadow-lg mb-2"
              >
                <h3 className="text-xl font-bold tracking-wide">PRINCIPAL</h3>
              </motion.div>

              {/* Connector Line */}
              <div className="w-0.5 h-12 bg-gray-300"></div>

              {/* Split Connector */}
              <div className="relative w-full max-w-4xl">
                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
                <div className="absolute top-8 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>
                <div className="absolute top-8 left-1/4 w-0.5 h-12 bg-gray-300"></div>
                <div className="absolute top-8 right-1/4 w-0.5 h-12 bg-gray-300"></div>
              </div>

              {/* Main Branches */}
              <div className="grid grid-cols-2 gap-24 mt-20 w-full max-w-5xl">
                {/* Admin Staff */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-[#C9A227] text-white px-8 py-4 rounded-xl shadow-md mb-2 w-64 text-center">
                    <h4 className="text-base font-bold uppercase tracking-wider">Admin Staff</h4>
                  </div>
                  <div className="w-0.5 h-8 bg-gray-300"></div>

                  <div className="space-y-3 w-full">
                    {[
                      "Office Superintendent",
                      "Hostel Superintendent",
                      "Driver",
                      "Supporting Staff"
                    ].map((role, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200 text-center"
                      >
                        <span className="text-sm font-semibold text-gray-700">{role}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Teaching Staff */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-[#C9A227] text-white px-8 py-4 rounded-xl shadow-md mb-2 w-64 text-center">
                    <h4 className="text-base font-bold uppercase tracking-wider">Teaching Staff</h4>
                  </div>
                  <div className="w-0.5 h-8 bg-gray-300"></div>

                  <div className="space-y-3 w-full">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200 text-center"
                    >
                      <span className="text-sm font-semibold text-gray-700">Vice Principal</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200 text-center"
                    >
                      <span className="text-sm font-semibold text-gray-700">Chief Instructor</span>
                    </motion.div>

                    <div className="w-0.5 h-6 bg-gray-300 mx-auto"></div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "C.I. Theory",
                        "C.I. Mechanical",
                        "C.I. Electrical",
                        "C.I. Auto"
                      ].map((ci, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="bg-gradient-to-br from-white to-gray-50 px-4 py-2.5 rounded-lg shadow-sm border border-gray-200 text-center"
                        >
                          <span className="text-xs font-semibold text-gray-600">{ci}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-xs text-gray-400 uppercase tracking-widest">Institutional Review FY 2023-24</p>
            </div>
          </div>
        </div>

        {/* Slide 5: Industry Linkages */}
        <div id="slide-5" className="h-screen snap-start">
          <SlideLayout pageNumber={5} title="Industry Engagement & Linkages">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 h-full">
              <div className="col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-2xl border-l-8 border-primary shadow-lg">
                  <Quote className="text-accent mb-4" size={32} />
                  <p className="text-sm font-medium text-gray-700 leading-relaxed italic mb-4">
                    "The collaboration with TEVTA has been instrumental in bridging the skill gap in our manufacturing line. We are proud to hire their graduates."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">M. Usman Ali</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">HR Director, Millat Tractors</p>
                    </div>
                  </div>
                </div>
                <div className="bg-accent rounded-2xl p-8 text-white">
                  <h5 className="text-xs font-black uppercase tracking-widest mb-4">Industry Partners</h5>
                  <h2 className="text-5xl font-black mb-2">48+</h2>
                  <p className="text-sm opacity-80">MoUs signed for placement & training</p>
                </div>
              </div>
              <div className="col-span-2 space-y-8">
                <div className="grid grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="aspect-square bg-white rounded-xl border border-gray-100 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer shadow-sm">
                      <div className="bg-gray-100 w-full h-full rounded animate-pulse flex items-center justify-center text-xs font-black text-gray-300">LOGO {i}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-primary uppercase text-xs mb-4 flex items-center gap-2">
                    <Briefcase size={16} /> Recent Industrial Dialogue Meetings
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-xs font-bold text-gray-700">Apprenticeship Program Launch</span>
                      <span className="text-[10px] font-bold text-accent uppercase">Aug 2023</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-xs font-bold text-gray-700">Annual HR Summit at Expo Center</span>
                      <span className="text-[10px] font-bold text-accent uppercase">Oct 2023</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-xs font-bold text-gray-700">Skill-Gap Analysis Forum</span>
                      <span className="text-[10px] font-bold text-accent uppercase">Dec 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideLayout>
        </div>

        {/* Slide 6: Student Development */}
        <div id="slide-6" className="h-screen snap-start">
          <SlideLayout pageNumber={6} title="Student Development & Exposure">
            <div className="grid grid-cols-2 gap-12 h-full">
              <div className="flex flex-col gap-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 h-1/2">
                  <h4 className="font-bold text-primary uppercase text-xs mb-6 border-b pb-4">Career Exposure Impact</h4>
                  <CustomChart type="pie" data={[
                    { name: 'Employed', value: 65 },
                    { name: 'Self-Employed', value: 15 },
                    { name: 'Higher Education', value: 10 },
                    { name: 'Other', value: 10 },
                  ]} />
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 h-1/2 overflow-y-auto">
                  <h4 className="font-bold text-primary uppercase text-xs mb-4">Key Development Milestones</h4>
                  <ul className="space-y-3">
                    {[
                      "100% Student participation in Safety Workshops",
                      "Soft Skills training integrated into all curriculums",
                      "Monthly Guest Lectures from Industry Veterans",
                      "E-Rozgaar awareness sessions for freelancing",
                      "Entrepreneurship incubation for Top-10 ideas"
                    ].map((li, i) => (
                      <li key={i} className="flex gap-3 text-xs text-gray-600 font-medium">
                        <CheckCircle2 size={16} className="text-primary shrink-0" /> {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="relative group overflow-hidden rounded-2xl shadow-sm">
                    <img src={`/images/career${i}.jpeg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Student Activity ${i}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-[10px] font-bold uppercase tracking-widest">Training Session #{i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideLayout>
        </div>

        {/* Slide 7: Events */}
        <div id="slide-7" className="h-screen snap-start">
          <SlideLayout pageNumber={7} title="Events & Achievements">
            <div className="h-full flex items-center justify-center p-8">
              <Timeline items={[
                { date: "Sept 2023", title: "Convocation 2023", description: "Graduated 450+ students with 95% passing rate across all trades." },
                { date: "Nov 2023", title: "Regional Skills Competition", description: "Secured 1st Position in Mechanical Drafting & 2nd in Electronics." },
                { date: "Jan 2024", title: "Green Campus Initiative", description: "Successfully installed 50kW Solar Grid reducing utility costs by 40%." },
                { date: "Mar 2024", title: "Industrial Expo Partnership", description: "Showcased student projects at Lahore International Expo Center." }
              ]} />
            </div>
          </SlideLayout>
        </div>

        {/* Slide 8: Staff Detail */}
        <div id="slide-8" className="h-screen snap-start bg-[#F8F9FA]">
          <div className="h-full flex flex-col px-12 py-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-black text-[#0B5D3B] mb-2 tracking-tight uppercase"
              >
                Staff Detail of GTTI, Rahim Yar Khan
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-600 font-medium"
              >
                Sanctioned vs Filled vs Vacant Position Status
              </motion.p>
              <div className="w-32 h-1 bg-[#C9A227] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {[
                { label: "Total Sanctioned Posts", value: "113", icon: <Users className="text-[#0B5D3B]" size={24} /> },
                { label: "Total Filled Posts", value: "56", icon: <UserCheck className="text-green-600" size={24} /> },
                { label: "Total Vacant Posts", value: "54", icon: <UserX className="text-red-500" size={24} /> },
                { label: "Daily Wages Staff", value: "9", icon: <Briefcase className="text-blue-600" size={24} /> },
                { label: "Visiting Staff", value: "2", icon: <GraduationCap className="text-purple-600" size={24} /> }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-center"
                >
                  <div className="flex justify-center mb-2">
                    {card.icon}
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-3xl font-black text-[#0B5D3B] mb-1"
                  >
                    {card.value}
                  </motion.h3>
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{card.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-8 flex-1">
              {/* Donut Chart */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
              >
                <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-4 border-b pb-3">Staff Distribution</h4>
                <CustomChart type="pie" data={[
                  { name: 'Filled Posts', value: 56 },
                  { name: 'Vacant Posts', value: 54 },
                  { name: 'Daily Wages', value: 9 },
                  { name: 'Visiting Staff', value: 2 }
                ]} />
              </motion.div>

              {/* Bar Chart */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
              >
                <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-4 border-b pb-3">Sanctioned vs Filled by Category</h4>
                <CustomChart type="bar" data={[
                  { name: 'Principal & Mgmt', sanctioned: 5, filled: 3 },
                  { name: 'Chief Instructors', sanctioned: 6, filled: 4 },
                  { name: 'Senior Instructors', sanctioned: 25, filled: 12 },
                  { name: 'Instructors', sanctioned: 50, filled: 28 },
                  { name: 'Supporting Staff', sanctioned: 27, filled: 9 }
                ]} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 9: Head-wise Financial Details */}
        <div id="slide-9" className="h-screen snap-start bg-[#F8F9FA]">
          <div className="h-full flex flex-col px-8 py-6">
            {/* Header */}
            <div className="text-center mb-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-[#0B5D3B] mb-2 tracking-tight uppercase"
              >
                Head-wise Allocation & Utilization Status
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-600 font-medium"
              >
                Non-Salary / Operating Expenses (FY 2025-26)
              </motion.p>
              <div className="w-32 h-1 bg-[#C9A227] mx-auto mt-2 rounded-full"></div>
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: "Total Allocation", value: "11,874,500", icon: <Building className="text-[#0B5D3B]" size={20} /> },
                { label: "Total Funds Received", value: "5,618,500", icon: <TrendingUp className="text-blue-600" size={20} /> },
                { label: "Total Utilized", value: "6,195,973", icon: <Briefcase className="text-orange-600" size={20} /> },
                { label: "Closing Balance", value: "1,108,721", icon: <CheckCircle2 className="text-green-600" size={20} /> }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-600 font-bold uppercase">{card.label}</p>
                    {card.icon}
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-2xl font-black text-[#0B5D3B]"
                  >
                    {card.value}
                  </motion.h3>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-2 gap-6 flex-1">
              {/* Head-wise Table */}
              <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-3 border-b pb-2">Head-wise Details</h4>
                <div className="overflow-y-auto max-h-96">
                  <table className="w-full text-xs">
                    <thead className="sticky top-0 bg-gray-50 text-[10px] font-bold text-gray-600 uppercase">
                      <tr>
                        <th className="px-2 py-2 text-left">Head</th>
                        <th className="px-2 py-2 text-right">Allocation</th>
                        <th className="px-2 py-2 text-right">Received</th>
                        <th className="px-2 py-2 text-right">Utilized</th>
                        <th className="px-2 py-2 text-right">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { head: "A031 - Fees", allocation: 3500000, received: 1800000, utilized: 1650000, balance: 150000 },
                        { head: "A032 - Communications", allocation: 450000, received: 220000, utilized: 285000, balance: -65000 },
                        { head: "A033 - Utilities", allocation: 2800000, received: 1350000, utilized: 1580000, balance: -230000 },
                        { head: "A038 - Travel & Transport", allocation: 650000, received: 310000, utilized: 420000, balance: -110000 },
                        { head: "A039 - General", allocation: 1200000, received: 580000, utilized: 680000, balance: -100000 },
                        { head: "Repairs & Maintenance", allocation: 1500000, received: 720000, utilized: 850000, balance: -130000 },
                        { head: "Placement Budget", allocation: 400000, received: 195000, utilized: 240000, balance: -45000 },
                        { head: "Development Funds", allocation: 800000, received: 385000, utilized: 410000, balance: -25000 },
                        { head: "Own Funds", allocation: 374500, received: 180000, utilized: 205973, balance: -25973 },
                        { head: "Others", allocation: 200000, received: 95500, utilized: 115000, balance: -19500 }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-2 py-2 font-semibold text-gray-700">{row.head}</td>
                          <td className="px-2 py-2 text-right font-medium">{row.allocation.toLocaleString()}</td>
                          <td className="px-2 py-2 text-right text-blue-600 font-medium">{row.received.toLocaleString()}</td>
                          <td className="px-2 py-2 text-right text-orange-600 font-bold">{row.utilized.toLocaleString()}</td>
                          <td className={`px-2 py-2 text-right font-bold ${row.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {row.balance.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Charts */}
              <div className="flex flex-col gap-6">
                {/* Donut Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex-1"
                >
                  <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-2 border-b pb-2">Financial Overview</h4>
                  <CustomChart type="pie" data={[
                    { name: 'Allocated', value: 11874500 },
                    { name: 'Utilized', value: 6195973 },
                    { name: 'Balance', value: 1108721 }
                  ]} />
                </motion.div>

                {/* Bar Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex-1"
                >
                  <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-2 border-b pb-2">Head-wise Utilization</h4>
                  <CustomChart type="bar" data={[
                    { name: 'Fees', value: 1650000 },
                    { name: 'Communications', value: 285000 },
                    { name: 'Utilities', value: 1580000 },
                    { name: 'Transport', value: 420000 },
                    { name: 'General', value: 680000 }
                  ]} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 10: Expenditure Analysis */}
        <div id="slide-10" className="h-screen snap-start bg-[#F8F9FA]">
          <div className="h-full flex flex-col px-8 py-6">
            {/* Header */}
            <div className="text-center mb-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-[#0B5D3B] mb-2 tracking-tight uppercase"
              >
                Expenditure Analysis (FY 2025-26)
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-600 font-medium"
              >
                Financial Performance Overview
              </motion.p>
              <div className="w-32 h-1 bg-[#C9A227] mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-6 gap-4 mb-6">
              {[
                { label: "Total Allocation", value: "11,874,500" },
                { label: "Funds Available", value: "7,304,694" },
                { label: "Total Utilized", value: "6,195,973" },
                { label: "Balance Remaining", value: "1,108,721" },
                { label: "Bank Balance", value: "7,854,779" },
                { label: "Reconciliation", value: "100%" }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-center"
                >
                  <p className="text-[10px] text-gray-600 font-bold uppercase mb-1">{card.label}</p>
                  <h3 className="text-lg font-black text-[#0B5D3B]">{card.value}</h3>
                </motion.div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-3 gap-6 flex-1">
              {/* Utilization Percentage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-center"
              >
                <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-6">Utilization %</h4>
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#E5E7EB"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#C9A227"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${(6195973 / 11874500) * 553} 553`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-black text-[#0B5D3B]">52%</span>
                    <span className="text-xs text-gray-500 font-semibold">Utilized</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-600 text-center">
                  Based on total allocation of PKR 11.87M
                </p>
              </motion.div>

              {/* Trend Analysis Chart */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-200"
              >
                <h4 className="font-bold text-[#0B5D3B] uppercase text-sm mb-4 border-b pb-3">Category-wise Analysis</h4>
                <CustomChart type="bar" data={[
                  { name: 'Operating Expenses', sanctioned: 5400000, filled: 3965000 },
                  { name: 'Placement Budget', sanctioned: 400000, filled: 240000 },
                  { name: 'Development Funds', sanctioned: 800000, filled: 410000 },
                  { name: 'Own Funds', sanctioned: 374500, filled: 205973 },
                  { name: 'Others', sanctioned: 200000, filled: 115000 }
                ]} />
              </motion.div>
            </div>

            {/* Financial Health Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4 bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border-l-4 border-green-500 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-green-600" size={24} />
              </div>
              <div>
                <h5 className="text-sm font-black text-green-700 uppercase">🟢 Financially Stable</h5>
                <p className="text-xs text-green-600 font-medium">Positive balance with 100% reconciliation status. All accounts verified and matched.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide 11: Enrollment Data */}
        <div id="slide-11" className="h-screen snap-start bg-[#F8F9FA]">
          <div className="h-full flex flex-col px-8 py-6">
            {/* Header */}
            <div className="text-center mb-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-[#0B5D3B] mb-2 tracking-tight uppercase"
              >
                Enrollment Data (2025-26)
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-600 font-medium"
              >
                Capacity & Enrollment Analysis (Morning, Evening & Short Courses)
              </motion.p>
              <div className="w-32 h-1 bg-[#C9A227] mx-auto mt-2 rounded-full"></div>
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-6 gap-3 mb-4">
              {[
                { label: "Total Single Capacity", value: "491" },
                { label: "Total Overall Capacity", value: "907" },
                { label: "Total Enrollment", value: "720" },
                { label: "1st Year Enrollment", value: "339" },
                { label: "2nd Year Enrollment", value: "151" },
                { label: "Short Courses", value: "230" }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-center"
                >
                  <p className="text-[10px] text-gray-600 font-bold uppercase mb-1">{card.label}</p>
                  <h3 className="text-2xl font-black text-[#0B5D3B]">{card.value}</h3>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              {/* Enrollment Table */}
              <div className="col-span-2 bg-white p-4 rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                <h4 className="font-bold text-[#0B5D3B] uppercase text-xs mb-3 border-b pb-2">Course-wise Enrollment Details</h4>
                <div className="overflow-y-auto max-h-80">
                  <table className="w-full text-[10px]">
                    <thead className="sticky top-0 bg-gray-50 text-[9px] font-bold text-gray-600 uppercase">
                      <tr>
                        <th className="px-2 py-2 text-left">Course</th>
                        <th className="px-1 py-2 text-center">Shift</th>
                        <th className="px-1 py-2 text-right">S.Cap</th>
                        <th className="px-1 py-2 text-right">T.Cap</th>
                        <th className="px-1 py-2 text-right">1st Yr</th>
                        <th className="px-1 py-2 text-right">2nd Yr</th>
                        <th className="px-1 py-2 text-right">6M-I</th>
                        <th className="px-1 py-2 text-right">6M-II</th>
                        <th className="px-1 py-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        { course: "DAE Electrical", shift: "M", sc: 48, tc: 96, yr1: 41, yr2: 18, b1: 0, b2: 0, total: 59 },
                        { course: "DAE Electrical", shift: "E", sc: 48, tc: 96, yr1: 42, yr2: 20, b1: 0, b2: 0, total: 62 },
                        { course: "DAE Mechanical", shift: "M", sc: 48, tc: 96, yr1: 41, yr2: 21, b1: 0, b2: 0, total: 62 },
                        { course: "DAE Mechanical", shift: "E", sc: 48, tc: 96, yr1: 40, yr2: 18, b1: 0, b2: 0, total: 58 },
                        { course: "DAE Auto", shift: "M", sc: 24, tc: 48, yr1: 19, yr2: 9, b1: 0, b2: 0, total: 28 },
                        { course: "DAE Auto", shift: "E", sc: 24, tc: 48, yr1: 18, yr2: 7, b1: 0, b2: 0, total: 25 },
                        { course: "DAE Civil", shift: "M", sc: 24, tc: 48, yr1: 20, yr2: 10, b1: 0, b2: 0, total: 30 },
                        { course: "DAE Civil", shift: "E", sc: 24, tc: 48, yr1: 22, yr2: 9, b1: 0, b2: 0, total: 31 },
                        { course: "DAE Electronics", shift: "M", sc: 24, tc: 48, yr1: 18, yr2: 8, b1: 0, b2: 0, total: 26 },
                        { course: "DAE Electronics", shift: "E", sc: 24, tc: 48, yr1: 20, yr2: 7, b1: 0, b2: 0, total: 27 },
                        { course: "DAE IT", shift: "M", sc: 24, tc: 48, yr1: 20, yr2: 8, b1: 0, b2: 0, total: 28 },
                        { course: "DAE IT", shift: "E", sc: 24, tc: 48, yr1: 19, yr2: 6, b1: 0, b2: 0, total: 25 },
                        { course: "Electrician (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 28, b2: 0, total: 28 },
                        { course: "Welder (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 27, b2: 0, total: 27 },
                        { course: "Plumber (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 25, b2: 0, total: 25 },
                        { course: "Auto Electrician (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 24, b2: 0, total: 24 },
                        { course: "Mobile Repairing (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 26, b2: 0, total: 26 },
                        { course: "AC Technician (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 22, b2: 0, total: 22 },
                        { course: "Solar Technician (6M)", shift: "M", sc: 15, tc: 30, yr1: 0, yr2: 0, b1: 23, b2: 0, total: 23 },
                        { course: "CNC Operator (3M)", shift: "M", sc: 12, tc: 48, yr1: 0, yr2: 0, b1: 0, b2: 28, total: 28 },
                        { course: "Domestic Tailor (3M)", shift: "M", sc: 10, tc: 40, yr1: 0, yr2: 0, b1: 0, b2: 27, total: 27 }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-2 py-2 font-semibold text-gray-700">{row.course}</td>
                          <td className="px-1 py-2 text-center">
                            <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${row.shift === 'M' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                              {row.shift}
                            </span>
                          </td>
                          <td className="px-1 py-2 text-right font-medium">{row.sc}</td>
                          <td className="px-1 py-2 text-right font-medium">{row.tc}</td>
                          <td className="px-1 py-2 text-right text-green-600 font-bold">{row.yr1 || '-'}</td>
                          <td className="px-1 py-2 text-right text-blue-600 font-bold">{row.yr2 || '-'}</td>
                          <td className="px-1 py-2 text-right text-orange-600 font-bold">{row.b1 || '-'}</td>
                          <td className="px-1 py-2 text-right text-purple-600 font-bold">{row.b2 || '-'}</td>
                          <td className="px-1 py-2 text-right text-[#0B5D3B] font-black">{row.total}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#0B5D3B] text-white font-black sticky bottom-0">
                        <td className="px-2 py-2" colSpan={2}>TOTAL</td>
                        <td className="px-1 py-2 text-right">491</td>
                        <td className="px-1 py-2 text-right">907</td>
                        <td className="px-1 py-2 text-right">339</td>
                        <td className="px-1 py-2 text-right">151</td>
                        <td className="px-1 py-2 text-right">175</td>
                        <td className="px-1 py-2 text-right">55</td>
                        <td className="px-1 py-2 text-right">720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Charts and Insights */}
              <div className="flex flex-col gap-4">
                {/* Enrollment Distribution Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 flex-1"
                >
                  <h4 className="font-bold text-[#0B5D3B] uppercase text-xs mb-2 border-b pb-2">Enrollment Distribution</h4>
                  <CustomChart type="pie" data={[
                    { name: '1st Year', value: 339 },
                    { name: '2nd Year', value: 151 },
                    { name: '6M Courses', value: 175 },
                    { name: '3M Courses', value: 55 }
                  ]} />
                </motion.div>

                {/* Insights Panel */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
                >
                  <h4 className="font-bold text-[#0B5D3B] uppercase text-xs mb-3 border-b pb-2">Key Insights</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-600 font-semibold">Capacity Utilization</span>
                      <span className="text-lg font-black text-green-600">79%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-600 font-semibold">Morning Shift</span>
                      <span className="text-sm font-bold text-blue-600">397 Students</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-600 font-semibold">Evening Shift</span>
                      <span className="text-sm font-bold text-purple-600">323 Students</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-[9px] text-gray-500 font-semibold mb-1">Highest Enrollment</p>
                      <p className="text-xs font-black text-[#0B5D3B]">DAE Electrical (Evening)</p>
                      <p className="text-[9px] text-gray-400">62 students enrolled</p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-[9px] text-gray-500 font-semibold mb-1">Short Courses Growth</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="text-green-600" size={16} />
                        <span className="text-sm font-bold text-green-600">+32%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 12: Enrollment Data (Vocational Programs) */}
        <div id="slide-12" className="h-screen snap-start bg-white">
          <div className="h-full flex flex-col p-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B5D3B] to-[#1e3a8a] text-white px-8 py-4 rounded-t-2xl">
              <h1 className="text-3xl font-black uppercase tracking-tight">ENROLLMENT DATA (2025-26)</h1>
              <p className="text-sm font-medium mt-1 opacity-90">Govt. Technical Training Institute, Rahim Yar Khan</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-6 my-6">
              {[
                { label: "Total Courses", value: "21", icon: <BookOpen className="text-[#0B5D3B]" size={32} /> },
                { label: "Total Capacity", value: "548", icon: <Users className="text-[#1e3a8a]" size={32} /> },
                { label: "Total Enrollment", value: "461", icon: <Award className="text-[#0B5D3B]" size={32} /> },
                { label: "Overall Utilization", value: "84%", icon: <TrendingUp className="text-green-600" size={32} /> }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mx-auto mb-3">{card.icon}</div>
                  <h3 className="text-4xl font-black text-gray-800">{card.value}</h3>
                  <p className="text-sm font-semibold text-gray-600 mt-2">{card.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-6 flex-1">
              {/* Course Table */}
              <div className="col-span-2 bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-y-auto max-h-96">
                  <table className="w-full text-xs">
                    <thead className="bg-[#1e3a8a] text-white sticky top-0">
                      <tr>
                        <th className="px-3 py-3 text-left font-bold">Course Name</th>
                        <th className="px-2 py-3 text-center font-bold">Nature</th>
                        <th className="px-2 py-3 text-center font-bold">Duration</th>
                        <th className="px-2 py-3 text-center font-bold">Shift</th>
                        <th className="px-2 py-3 text-right font-bold">Capacity</th>
                        <th className="px-2 py-3 text-right font-bold">Enrollment</th>
                        <th className="px-2 py-3 text-right font-bold">Variance</th>
                        <th className="px-2 py-3 text-right font-bold">Util %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { course: "Electrician", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 48, enrollment: 45 },
                        { course: "HVACR", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 22 },
                        { course: "Electronic Application", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 20 },
                        { course: "Fitter General", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 23 },
                        { course: "Machinist", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 21 },
                        { course: "Auto & Farm Machinery Mechanic", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 19 },
                        { course: "Welder Arc & Gas", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 24 },
                        { course: "Industrial Electronics", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 18 },
                        { course: "Computer Operator", nature: "Diploma", duration: "2Y", shift: "Morning", capacity: 24, enrollment: 22 },
                        { course: "Draftsman Civil", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 20 },
                        { course: "Electrician", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 48, enrollment: 46 },
                        { course: "Draftsman Mechanical", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 19 },
                        { course: "Auto & Farm Machinery Mechanic", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 17 },
                        { course: "Computer Operator", nature: "Diploma", duration: "2Y", shift: "Evening", capacity: 24, enrollment: 21 },
                        { course: "National Competency Standards Chef Level 2", nature: "NCS", duration: "1Y", shift: "Morning", capacity: 20, enrollment: 18 },
                        { course: "NVC Level 2 Auto Electrician (CBT&A)", nature: "NVC", duration: "1Y", shift: "Morning", capacity: 20, enrollment: 19 },
                        { course: "NVC Level 3 IT (Web Dev) (CBT&A)", nature: "NVC", duration: "1Y", shift: "Morning", capacity: 20, enrollment: 20 },
                        { course: "NVC Level 2 Electrical (6M)", nature: "NVC", duration: "6M", shift: "Morning", capacity: 30, enrollment: 28 },
                        { course: "NVC Level 2 Mechanical (Welder) (6M)", nature: "NVC", duration: "6M", shift: "Morning", capacity: 30, enrollment: 27 },
                        { course: "Aluminium & Steel Fabricator (3M)", nature: "Short", duration: "3M", shift: "Morning", capacity: 20, enrollment: 18 },
                        { course: "AI & Machine Learning (3M)", nature: "Short", duration: "3M", shift: "Morning", capacity: 20, enrollment: 20 }
                      ].map((row, index) => {
                        const variance = row.capacity - row.enrollment;
                        const utilization = ((row.enrollment / row.capacity) * 100).toFixed(0);
                        return (
                          <tr
                            key={index}
                            className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                          >
                            <td className="px-3 py-2 font-semibold text-gray-800">{row.course}</td>
                            <td className="px-2 py-2 text-center text-gray-600">{row.nature}</td>
                            <td className="px-2 py-2 text-center text-gray-600">{row.duration}</td>
                            <td className="px-2 py-2 text-center">
                              <span className={`px-2 py-1 rounded text-[10px] font-bold ${row.shift === 'Morning' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                                }`}>
                                {row.shift}
                              </span>
                            </td>
                            <td className="px-2 py-2 text-right font-bold text-gray-700">{row.capacity}</td>
                            <td className="px-2 py-2 text-right font-bold text-[#0B5D3B]">{row.enrollment}</td>
                            <td className={`px-2 py-2 text-right font-bold ${variance > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                              {variance}
                            </td>
                            <td className="px-2 py-2 text-right font-black text-gray-800">{utilization}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Enrollment Insights */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-black text-[#0B5D3B] mb-4 border-b-2 border-green-300 pb-2">Enrollment Insights</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-gray-600 uppercase mb-1">Highest Enrollment</p>
                    <p className="text-sm font-black text-[#0B5D3B]">Electrician (Evening)</p>
                    <p className="text-xs text-gray-600">46 students (96% capacity)</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-600 uppercase mb-1">Lowest Enrollment</p>
                    <p className="text-sm font-black text-orange-600">Auto & Farm Mach. Mech. (Eve)</p>
                    <p className="text-xs text-gray-600">17 students (71% capacity)</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-600 uppercase mb-2">Full Capacity Programs (2)</p>
                    <ul className="space-y-1">
                      <li className="text-xs text-gray-700">• Welder Arc & Gas (100%)</li>
                      <li className="text-xs text-gray-700">• NVC IT Web Dev (100%)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-600 uppercase mb-2">Below 80% Utilization (3)</p>
                    <ul className="space-y-1">
                      <li className="text-xs text-gray-700">• Industrial Electronics (75%)</li>
                      <li className="text-xs text-gray-700">• Auto & Farm Mech M (79%)</li>
                      <li className="text-xs text-gray-700">• Auto & Farm Mech E (71%)</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-3 mt-4">
                    <p className="text-xs font-bold text-gray-600 mb-2">Quick Stats</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Morning Shift:</span>
                      <span className="font-bold text-blue-700">303 students</span>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-600">Evening Shift:</span>
                      <span className="font-bold text-purple-700">158 students</span>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-600">Short Courses:</span>
                      <span className="font-bold text-green-700">93 students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-between items-center text-xs text-gray-500 border-t-2 border-gray-200 pt-3">
              <p className="font-semibold">© 2025-26 Govt. Technical Training Institute, Rahim Yar Khan</p>
              <p className="font-bold">Page 12 | Academic Year 2025-26</p>
            </div>
          </div>
        </div>

        {/* Slide 13: Future Plans */}
        <div id="slide-13" className="h-screen snap-start">
          <SlideLayout pageNumber={13} title="Future Institutional Roadmap">
            <div className="grid grid-cols-3 gap-8 h-full">
              {[
                { title: "Smart Campus 2025", desc: "Implementation of cloud-based LMS and digital administrative automation system.", icon: <Layout className="text-primary" /> },
                { title: "Center of Excellence", desc: "Upgrading the Automobile workshop to a 'Center of Excellence' for EV technology.", icon: <Award className="text-accent" /> },
                { title: "Solar Expansion", desc: "Expanding the solar grid to 150kW to achieve 100% energy independence.", icon: <ShieldCheck className="text-green-600" /> },
                { title: "Global Accreditation", desc: "Seeking ISO-29990 certification for non-formal education & training quality.", icon: <Target className="text-red-500" /> },
                { title: "Virtual Labs", desc: "Deploying VR-based simulation labs for dangerous high-voltage electrical training.", icon: <Building className="text-blue-500" /> },
                { title: "Alumni Network", desc: "Launching a dedicated digital platform for alumni job tracking and mentorship.", icon: <Users className="text-gray-700" /> }
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-4 border-primary/10 hover:border-primary"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                    {plan.icon}
                  </div>
                  <h5 className="font-heading font-bold text-primary mb-3 text-lg">{plan.title}</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                </motion.div>
              ))}
            </div>
          </SlideLayout>
        </div>

        {/* Slide 14: Challenges */}
        <div id="slide-14" className="h-screen snap-start">
          <SlideLayout pageNumber={14} title="Challenges & Recommendations">
            <div className="grid grid-cols-2 gap-12 h-full">
              <div className="space-y-6">
                <h4 className="flex items-center gap-2 text-red-600 font-bold uppercase text-sm mb-4">
                  <AlertTriangle size={20} /> Current Bottlenecks
                </h4>
                {[
                  "Aging machinery in CNC labs requires urgent replacement.",
                  "Fluctuating industrial market leads to job placement delays.",
                  "High attrition rate of contractual instructors due to market pay.",
                  "Limited hostel capacity restricting outstation student intake."
                ].map((c, i) => (
                  <div key={i} className="bg-red-50 p-6 rounded-2xl border border-red-100 flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</span>
                    <p className="text-sm font-medium text-red-800 leading-tight">{c}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h4 className="flex items-center gap-2 text-green-600 font-bold uppercase text-sm mb-4">
                  <CheckCircle2 size={20} /> Proposed Recommendations
                </h4>
                {[
                  "Approve Budget Re-appropriation for CNC Equipment (PKR 12M).",
                  "Formalize partnerships with Overseas Employment Agencies.",
                  "Proposal for regularizing specialized technical staff salaries.",
                  "Construction of a new 100-bed Vertical Hostel Wing."
                ].map((r, i) => (
                  <div key={i} className="bg-green-50 p-6 rounded-2xl border border-green-100 flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</span>
                    <p className="text-sm font-medium text-green-800 leading-tight">{r}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideLayout>
        </div>

        {/* Slide 15: Conclusion */}
        <div id="slide-15" className="h-screen snap-start">
          <div className="h-full bg-report-bg flex flex-col">
            <SlideLayout pageNumber={15} title="Final Summary & Conclusion">
              <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-8 mb-16 w-full">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h5 className="text-3xl font-black text-primary mb-1">94%</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Efficiency Rating</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h5 className="text-3xl font-black text-primary mb-1">A+</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Performance Grade</p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h5 className="text-3xl font-black text-primary mb-1">Zero</h5>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Safety Incidents</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <h2 className="text-5xl font-black text-primary uppercase tracking-tighter">Thank You</h2>
                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    "Striving to transform the workforce of Punjab through excellence in Technical Education and Vocational Training."
                  </p>
                  <div className="pt-12 border-t border-gray-100 flex justify-center gap-12 text-left">
                    <div>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Institutional Seal</p>
                      <div className="w-24 h-24 border-2 border-dashed border-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-300 font-bold uppercase text-center p-2">
                        Authorized Personnel Only
                      </div>
                    </div>
                    <div className="flex flex-col justify-end">
                      <div className="h-1 w-48 bg-gray-200 mb-2"></div>
                      <p className="text-xs font-bold text-primary uppercase">Office of the Principal</p>
                      <p className="text-[10px] text-gray-400 font-medium">Date: February 15, 2024</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SlideLayout>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-12 right-12 flex gap-4 no-print z-50">
        <button
          onClick={() => currentSlide > 1 && scrollToSlide(currentSlide - 1)}
          disabled={currentSlide === 1}
          className="px-6 py-3 bg-[#0B5D3B] text-white rounded-lg shadow-2xl border border-gray-100 hover:bg-[#0a4d30] transition-all disabled:opacity-30 disabled:cursor-not-allowed font-bold text-sm"
        >
          ← Back
        </button>
        <button
          onClick={() => currentSlide < 15 && scrollToSlide(currentSlide + 1)}
          disabled={currentSlide === 15}
          className="px-6 py-3 bg-[#0B5D3B] text-white rounded-lg shadow-2xl border border-gray-100 hover:bg-[#0a4d30] transition-all disabled:opacity-30 disabled:cursor-not-allowed font-bold text-sm"
        >
          Next →
        </button>
      </div>

      <div className="fixed bottom-6 right-12 text-xs font-bold text-gray-500 uppercase tracking-widest no-print z-40">
        Slide {currentSlide} of 15
      </div>
    </div>
  );
};

export default App;
