import React from 'react';
import { motion as Motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight, Code, Cpu, Database, ChevronRight, Globe, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logo from 'figma:asset/2c091447010877f07d62ec58f88c374cadf7cd01.png';

// Components
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Brelinx Logo" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a>
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#005a4e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <Motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#005a4e]/10 text-[#005a4e] rounded-full text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005a4e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005a4e]"></span>
            </span>
            Engineering the Future
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Next-Gen <br />
            <span className="text-[#005a4e]">Tech Solutions</span> <br />
            for Enterprise.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Brelinx empowers businesses with cutting-edge software development, 
            intelligent automation, and robust data engineering. We turn complex 
            challenges into seamless digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-200 text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
              View Our Work
            </button>
          </div>
        </Motion.div>

        <Motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYWJzdHJhY3QlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzAwNjA3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tech Background"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-3xl font-bold mb-1">99.9%</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Uptime Delivery</p>
              </div>
            </div>
          </div>
          {/* Floating cards */}
          <Motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[180px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#005a4e]/10 p-2 rounded-lg text-[#005a4e]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">Automation</span>
            </div>
            <p className="text-[10px] text-gray-500">Integrating AI-driven workflows for 40% more efficiency.</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Brelinx</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded at the intersection of innovation and execution, Brelinx is more than just a tech consultancy. We are your strategic partners in digital transformation, dedicated to building software that doesn't just work, but excels.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Innovation First', desc: 'Staying ahead of the curve with emerging technologies.' },
                { title: 'Global Standards', desc: 'Delivering quality that meets international benchmarks.' },
                { title: 'Client Centric', desc: 'Your vision, amplified by our technical expertise.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#005a4e] flex items-center justify-center text-white">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-4xl font-bold text-[#005a4e] mb-2">120+</h3>
                <p className="text-xs text-gray-500 uppercase font-semibold">Projects Completed</p>
              </div>
              <div className="bg-black p-8 rounded-3xl text-white text-center">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-xs opacity-60 uppercase font-semibold">Expert Engineers</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#005a4e] p-8 rounded-3xl text-white text-center">
                <h3 className="text-4xl font-bold mb-2">50%</h3>
                <p className="text-xs opacity-60 uppercase font-semibold">Faster Deployment</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-4xl font-bold text-black mb-2">4.9/5</h3>
                <p className="text-xs text-gray-500 uppercase font-semibold">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Software Development",
      desc: "Custom-built web and mobile applications tailored to your specific business needs and scale.",
      icon: <Code className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1742072594013-c87f855e29ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzAwNjQ5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Intelligent Automation",
      desc: "Streamline workflows and eliminate manual tasks with AI-powered robotics and process automation.",
      icon: <Cpu className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHJvYm90JTIwYXJtfGVufDF8fHx8MTc3MDEzOTU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Data Engineering",
      desc: "Harness the power of your data with robust pipelines, warehouse solutions, and real-time analytics.",
      icon: <Database className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1595134334453-46c042d486f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjBzZXJ2ZXIlMjByb29tfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Offerings</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We provide a comprehensive suite of technical services designed to scale with your ambition.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:shadow-[#005a4e]/5"
            >
              <div className="h-48 overflow-hidden relative">
                <ImageWithFallback 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-8">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-[#005a4e] shadow-sm -mt-16 relative z-10 mb-6 group-hover:bg-[#005a4e] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <button className="text-[#005a4e] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "UI/UX & Frontend",
      image: "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDk0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "AI Analysis Engine",
      category: "Data Engineering",
      image: "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDAyMTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzAwOTUxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-400 max-w-xl">A selection of recent projects where we've helped our clients achieve their technical goals.</p>
          </div>
          <button className="text-white border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-black transition-all font-bold">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-[#005a4e] text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <button className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#005a4e] rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to build the <br /> next big thing?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Join dozens of industry leaders who have already transformed their business with Brelinx engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#005a4e] px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
                Schedule a Consultation
              </button>
              <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <img src={logo} alt="Brelinx Logo" className="h-8 w-auto mb-8" />
            <p className="text-gray-500 max-w-xs mb-8 text-sm leading-relaxed">
              Accelerating technical innovation for forward-thinking companies. Specialized in high-performance software and data solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#005a4e] hover:border-[#005a4e] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#005a4e] hover:border-[#005a4e] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#005a4e] hover:border-[#005a4e] transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black">Development</a></li>
              <li><a href="#" className="hover:text-black">Automation</a></li>
              <li><a href="#" className="hover:text-black">Data Engineering</a></li>
              <li><a href="#" className="hover:text-black">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black flex items-center gap-2"><Mail className="w-4 h-4" /> hello@brelinx.tech</a></li>
              <li><a href="#" className="hover:text-black flex items-center gap-2"><Globe className="w-4 h-4" /> Global Support</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 Brelinx Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
