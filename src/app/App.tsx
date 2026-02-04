import { motion as Motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight, Code, Database, ChevronRight, Globe, Mail, Phone, MessageCircle, Cloud, Settings, Zap, BarChart3, Smartphone, Monitor, Shield, Cog, Send } from 'lucide-react';
import logo from '@/assets/brelinx-logo.svg';
import { useState } from 'react';
import WhatsAppFloat from '@/app/components/WhatsAppFloat';

// Components
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27m%20interested%20in%20your%20technology%20services.', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-white/20 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Brelinx - Leading Technology Solutions Provider" className="h-8 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#005a4e] transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#005a4e] transition-colors">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#005a4e] transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#005a4e] transition-colors">Contact</button>
          <button 
            onClick={handleContactClick}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 md:hidden">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-[#005a4e] transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-[#005a4e] transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 hover:text-[#005a4e] transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-[#005a4e] transition-colors">Contact</button>
              <button 
                onClick={handleContactClick}
                className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27m%20interested%20in%20your%20cutting-edge%20technology%20solutions.', '_blank');
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#005a4e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[#005a4e]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <Motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#005a4e]/10 text-[#005a4e] rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005a4e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005a4e]"></span>
            </span>
            Engineering the Future
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Next-Gen <br />
            <span className="text-[#005a4e] bg-gradient-to-r from-[#005a4e] to-[#007a66] bg-clip-text text-transparent">Tech Solutions</span> <br />
            for Enterprise.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Brelinx empowers businesses with cutting-edge software 
            development, intelligent automation, and robust data 
            engineering. We turn complex challenges into seamless 
            digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button 
              onClick={handleContactClick}
              className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all group transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-gray-400 hover:text-gray-900 transition-all transform hover:scale-105"
            >
              View Our Work
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#005a4e]" />
              <a href="tel:+27635722080" className="hover:text-[#005a4e] transition-colors">+27 63 572 2080</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#005a4e]" />
              <a href="https://wa.me/27785002274" className="hover:text-[#005a4e] transition-colors">WhatsApp Business</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#005a4e]" />
              <a href="mailto:brelinxtech@gmail.com" className="hover:text-[#005a4e] transition-colors">brelinxtech@gmail.com</a>
            </div>
          </div>
        </Motion.div>

        <Motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Large Black Card - Main Feature */}
          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
            
            {/* Tech Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="flex justify-between items-start">
                <div className="text-white/60 text-sm">
                  <Monitor className="w-6 h-6 mb-2" />
                  <p className="uppercase tracking-widest">System Status</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-white mb-4">
                  <p className="text-6xl font-bold mb-2">99.9%</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest">UPTIME DELIVERY</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">200+</p>
                    <p className="text-xs text-white/60">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">15+</p>
                    <p className="text-xs text-white/60">Engineers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-xs text-white/60">Support</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="text-white/60 text-xs">
                  <p>Last updated: Real-time</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Automation Card */}
          <Motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#005a4e]/10 p-2 rounded-lg text-[#005a4e]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">Automation</span>
            </div>
            <p className="text-[10px] text-gray-500">Integrating AI-driven workflows for 50% efficiency gains.</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27d%20like%20to%20learn%20more%20about%20your%20technology%20services.', '_blank');
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Brelinx</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded at the intersection of innovation and execution, Brelinx is more than 
              just a tech consultancy. We are your strategic partners in digital 
              transformation, dedicated to building software that doesn't just work, but 
              excels.
            </p>
            <div className="space-y-4 mb-8">
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
            <button 
              onClick={handleContactClick}
              className="bg-[#005a4e] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#004a42] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Learn More About Our Services
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-4xl font-bold text-[#005a4e] mb-2">120+</h3>
                <p className="text-xs text-gray-500 uppercase font-semibold">Projects Completed</p>
              </div>
              <div className="bg-[#005a4e] p-8 rounded-3xl text-white text-center shadow-xl">
                <h3 className="text-4xl font-bold mb-2">50%</h3>
                <p className="text-xs opacity-80 uppercase font-semibold">Faster Deployment</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-black p-8 rounded-3xl text-white text-center shadow-xl">
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-xs opacity-80 uppercase font-semibold">Expert Engineers</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                <h3 className="text-4xl font-bold text-[#005a4e] mb-2">4.9/5</h3>
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
      title: "Website Development",
      desc: "Custom responsive websites and web applications built with modern frameworks like React, Next.js, and Vue.js for optimal performance.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Custom Software Development",
      desc: "Tailored software solutions designed specifically for your business processes, built with scalable architecture and modern technologies.",
      icon: <Code className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1742072594013-c87f855e29ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzAwNjQ5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Mobile Applications",
      desc: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach and performance.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Data Engineering",
      desc: "Robust data pipelines, ETL processes, and data warehouse solutions using modern tools like Apache Spark, Kafka, and cloud platforms.",
      icon: <Database className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1595134334453-46c042d486f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjBzZXJ2ZXIlMjByb29tfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Data Analytics",
      desc: "Transform raw data into actionable insights with advanced analytics, machine learning models, and interactive dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Intelligent Automation",
      desc: "AI-powered process automation, robotic process automation (RPA), and workflow optimization to eliminate manual tasks.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHJvYm90JTIwYXJtfGVufDF8fHx8MTc3MDEzOTU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Cloud Solutions",
      desc: "Cloud migration, infrastructure setup, and management using AWS, Azure, and Google Cloud Platform for scalable, secure operations.",
      icon: <Cloud className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzAwOTUxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "IT Support & Maintenance",
      desc: "24/7 technical support, system monitoring, security updates, and proactive maintenance to ensure optimal system performance.",
      icon: <Settings className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljYWwlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "System Integration",
      desc: "Seamlessly connect disparate systems, APIs, and third-party services to create unified, efficient business workflows.",
      icon: <Cog className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBpbnRlZ3JhdGlvbiUyMG5ldHdvcmslMjBjYWJsZXN8ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Digital Transformation",
      desc: "Complete digital overhaul of business processes, from legacy system modernization to implementing cutting-edge digital strategies.",
      icon: <Monitor className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzAxMzk1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "SEO & Performance Enhancement",
      desc: "Technical SEO optimization, website performance tuning, and search engine ranking improvements for maximum online visibility.",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    const message = `Hello Brelinx! I'm interested in your ${serviceName} services. Could you provide more information?`;
    window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Offerings</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">We provide a comprehensive suite of technical services designed to scale with your business needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:shadow-[#005a4e]/5 cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              <div className="h-48 overflow-hidden relative">
                <ImageWithFallback 
                  src={service.image}
                  alt={`${service.title} - Professional technology services by Brelinx`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#005a4e]/20 group-hover:bg-[#005a4e]/40 transition-colors" />
              </div>
              <div className="p-8">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-[#005a4e] shadow-sm -mt-16 relative z-10 mb-6 group-hover:bg-[#005a4e] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <button className="text-[#005a4e] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Get Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27d%20like%20to%20discuss%20my%20technology%20needs.', '_blank')}
            className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl"
          >
            Contact us today for cutting-edge tech solutions
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Custom Software Development",
      description: "Full-stack e-commerce solution with payment integration",
      image: "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDk0NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Engineering & Analytics",
      description: "Real-time business intelligence and predictive analytics platform",
      image: "https://images.unsplash.com/photo-1716436329836-208bea5a55e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDAyMTk3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions & DevOps",
      description: "Complete AWS migration with 99.9% uptime achievement",
      image: "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzAwOTUxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application Development",
      description: "Secure fintech mobile application with biometric authentication",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Process Automation System",
      category: "Intelligent Automation",
      description: "RPA solution reducing manual processing time by 80%",
      image: "https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHJvYm90JTIwYXJtfGVufDF8fHx8MTc3MDEzOTU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Enterprise Website Redesign",
      category: "Website Development & SEO",
      description: "Modern responsive website with 300% improvement in search rankings",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handleProjectClick = (projectTitle: string) => {
    const message = `Hello Brelinx! I'm interested in learning more about your ${projectTitle} project. Could you share more details about similar solutions?`;
    window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-300 max-w-xl">A selection of recent projects where we've helped our clients achieve their technical goals.</p>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27d%20like%20to%20see%20more%20of%20your%20portfolio%20and%20discuss%20my%20project.', '_blank')}
            className="text-white border border-white/20 px-8 py-3 rounded-xl hover:bg-white hover:text-[#005a4e] transition-all font-bold flex items-center gap-2"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              <ImageWithFallback 
                src={project.image}
                alt={`${project.title} - ${project.category} project by Brelinx technology solutions`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{project.description}</p>
                <button className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-[#00ff88]">
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const message = `New Contact Form Submission:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ready to transform your business with cutting-edge technology? Contact us today for a free consultation and discover how our expert team can help you achieve your digital goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#005a4e]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#005a4e]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#005a4e]" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+27635722080" className="text-gray-600 hover:text-[#005a4e] transition-colors">+27 63 572 2080</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#005a4e]/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#005a4e]" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp Business</p>
                    <a href="https://wa.me/27785002274" className="text-gray-600 hover:text-[#005a4e] transition-colors">+27 78 500 2274</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#005a4e]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#005a4e]" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:brelinxtech@gmail.com" className="text-gray-600 hover:text-[#005a4e] transition-colors">brelinxtech@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-3xl text-white shadow-xl">
              <h4 className="text-xl font-bold mb-4">Why Choose Brelinx?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-green-400" />
                  <span>Expert team with 15+ years of experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-green-400" />
                  <span>200+ successful projects delivered</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-green-400" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-green-400" />
                  <span>Cutting-edge technology solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005a4e] focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005a4e] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005a4e] focus:border-transparent transition-all"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005a4e] focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005a4e] focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="Mobile Applications">Mobile Applications</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Intelligent Automation">Intelligent Automation</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                  <option value="System Integration">System Integration</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="SEO & Performance Enhancement">SEO & Performance Enhancement</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#005a4e] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#005a4e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004a42] transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleContactClick = () => {
    window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27m%20interested%20in%20your%20technology%20services.', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <img src={logo} alt="Brelinx - Leading Technology Solutions Provider" className="h-8 w-auto mb-8 filter brightness-0 invert" />
            <p className="text-gray-400 max-w-md mb-8 text-sm leading-relaxed">
              Brelinx is South Africa's premier technology consultancy, specializing in cutting-edge software development, 
              intelligent automation, cloud solutions, and digital transformation services that drive business growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#005a4e]" />
                <a href="tel:+27635722080" className="text-gray-400 hover:text-white transition-colors">+27 63 572 2080</a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#005a4e]" />
                <a href="https://wa.me/27785002274" className="text-gray-400 hover:text-white transition-colors">+27 78 500 2274 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#005a4e]" />
                <a href="mailto:brelinxtech@gmail.com" className="text-gray-400 hover:text-white transition-colors">brelinxtech@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => window.open('https://wa.me/27785002274?text=I%27m%20interested%20in%20Website%20Development%20services', '_blank')} className="hover:text-white transition-colors">Website Development</button></li>
              <li><button onClick={() => window.open('https://wa.me/27785002274?text=I%27m%20interested%20in%20Custom%20Software%20Development', '_blank')} className="hover:text-white transition-colors">Custom Software</button></li>
              <li><button onClick={() => window.open('https://wa.me/27785002274?text=I%27m%20interested%20in%20Mobile%20App%20Development', '_blank')} className="hover:text-white transition-colors">Mobile Applications</button></li>
              <li><button onClick={() => window.open('https://wa.me/27785002274?text=I%27m%20interested%20in%20Data%20Engineering%20services', '_blank')} className="hover:text-white transition-colors">Data Engineering</button></li>
              <li><button onClick={() => window.open('https://wa.me/27785002274?text=I%27m%20interested%20in%20Cloud%20Solutions', '_blank')} className="hover:text-white transition-colors">Cloud Solutions</button></li>
              <li><button onClick={() => window.open('https://wa.me/27785002274?text=I%27m%20interested%20in%20IT%20Support%20services', '_blank')} className="hover:text-white transition-colors">IT Support</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={handleContactClick} className="hover:text-white transition-colors">Get Quote</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024 Brelinx Technologies. All rights reserved. Leading provider of technology solutions in South Africa.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <button onClick={handleContactClick} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={handleContactClick} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={handleContactClick} className="hover:text-white transition-colors">Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Structured Data for SEO
const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechnologyCompany",
    "name": "Brelinx Technologies",
    "description": "Leading technology solutions provider specializing in software development, mobile applications, data engineering, cloud solutions, and digital transformation services.",
    "url": "https://brelinx.com",
    "logo": "https://brelinx.com/brelinx-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27-63-572-2080",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Gauteng"
    },
    "sameAs": [
      "https://wa.me/27785002274"
    ],
    "services": [
      "Website Development",
      "Custom Software Development", 
      "Mobile Application Development",
      "Data Engineering",
      "Data Analytics",
      "Intelligent Automation",
      "Cloud Solutions",
      "IT Support and Maintenance",
      "System Integration",
      "Digital Transformation",
      "SEO and Performance Enhancement"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function App() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen font-sans antialiased text-black">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}