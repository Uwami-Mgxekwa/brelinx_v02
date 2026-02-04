// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Populate services
  populateServices();
  
  // Populate portfolio
  populatePortfolio();
  
  // Initialize form handler
  initializeContactForm();
  
  // Add scroll animations
  initializeScrollAnimations();
});

// ===================================
// NAVIGATION
// ===================================
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  }
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  mobileMenu.classList.toggle('active');
  menuBtn.classList.toggle('active');
}

function handleContactClick() {
  window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27m%20interested%20in%20your%20technology%20services.', '_blank');
}

function handlePortfolioClick() {
  window.open('https://wa.me/27785002274?text=Hello%20Brelinx!%20I%27d%20like%20to%20see%20more%20of%20your%20portfolio%20and%20discuss%20my%20project.', '_blank');
}

function handleServiceContact(serviceName) {
  const message = `Hello Brelinx! I'm interested in your ${serviceName} services. Could you provide more information?`;
  window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
}

// ===================================
// SERVICES DATA & RENDERING
// ===================================
const servicesData = [
  {
    title: "Website Development",
    desc: "Custom responsive websites and web applications built with modern frameworks like React, Next.js, and Vue.js for optimal performance.",
    icon: "globe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnQlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions designed specifically for your business processes, built with scalable architecture and modern technologies.",
    icon: "code",
    image: "https://images.unsplash.com/photo-1742072594013-c87f855e29ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzAwNjQ5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Mobile Applications",
    desc: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach and performance.",
    icon: "smartphone",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Data Engineering",
    desc: "Robust data pipelines, ETL processes, and data warehouse solutions using modern tools like Apache Spark, Kafka, and cloud platforms.",
    icon: "database",
    image: "https://images.unsplash.com/photo-1595134334453-46c042d486f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjBzZXJ2ZXIlMjByb29tfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with advanced analytics, machine learning models, and interactive dashboards.",
    icon: "bar-chart-3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Intelligent Automation",
    desc: "AI-powered process automation, robotic process automation (RPA), and workflow optimization to eliminate manual tasks.",
    icon: "zap",
    image: "https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHJvYm90JTIwYXJtfGVufDF8fHx8MTc3MDEzOTU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud migration, infrastructure setup, and management using AWS, Azure, and Google Cloud Platform for scalable, secure operations.",
    icon: "cloud",
    image: "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NzAwOTUxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "IT Support & Maintenance",
    desc: "24/7 technical support, system monitoring, security updates, and proactive maintenance to ensure optimal system performance.",
    icon: "settings",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljYWwlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MDEzOTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "System Integration",
    desc: "Seamlessly connect disparate systems, APIs, and third-party services to create unified, efficient business workflows.",
    icon: "cog",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBpbnRlZ3JhdGlvbiUyMG5ldHdvcmslMjBjYWJsZXN8ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Digital Transformation",
    desc: "Complete digital overhaul of business processes, from legacy system modernization to implementing cutting-edge digital strategies.",
    icon: "monitor",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzAxMzk1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "SEO & Performance Enhancement",
    desc: "Technical SEO optimization, website performance tuning, and search engine ranking improvements for maximum online visibility.",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzcwMTM5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

function populateServices() {
  const servicesGrid = document.getElementById('servicesGrid');
  
  servicesData.forEach((service, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.style.animationDelay = `${index * 0.1}s`;
    serviceCard.onclick = () => handleServiceClick(service.title);
    
    serviceCard.innerHTML = `
      <div class="service-image-wrapper">
        <img src="${service.image}" alt="${service.title} - Professional technology services by Brelinx" class="service-image">
        <div class="service-image-overlay"></div>
      </div>
      <div class="service-content">
        <div class="service-icon-wrapper">
          <i data-lucide="${service.icon}" class="icon-lg"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.desc}</p>
        <div class="service-link">
          Get Quote <i data-lucide="arrow-right" class="icon-sm"></i>
        </div>
      </div>
    `;
    
    servicesGrid.appendChild(serviceCard);
  });
  
  // Re-initialize icons for dynamically added content
  lucide.createIcons();
}

function handleServiceClick(serviceName) {
  const message = `Hello Brelinx! I'm interested in your ${serviceName} services. Could you provide more information?`;
  window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
}

// ===================================
// PORTFOLIO DATA & RENDERING
// ===================================
const portfolioData = [
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

function populatePortfolio() {
  const portfolioGrid = document.getElementById('portfolioGrid');
  
  portfolioData.forEach((project) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';
    portfolioItem.onclick = () => handleProjectClick(project.title);
    
    portfolioItem.innerHTML = `
      <img src="${project.image}" alt="${project.title} - ${project.category} project by Brelinx technology solutions" class="portfolio-image">
      <div class="portfolio-overlay"></div>
      <div class="portfolio-content">
        <p class="portfolio-category">${project.category}</p>
        <h3 class="portfolio-title">${project.title}</h3>
        <p class="portfolio-description">${project.description}</p>
        <div class="portfolio-link">
          View Details <i data-lucide="arrow-right" class="icon-sm"></i>
        </div>
      </div>
    `;
    
    portfolioGrid.appendChild(portfolioItem);
  });
  
  // Re-initialize icons for dynamically added content
  lucide.createIcons();
}

function handleProjectClick(projectTitle) {
  const message = `Hello Brelinx! I'm interested in learning more about your ${projectTitle} project. Could you share more details about similar solutions?`;
  window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
}

// ===================================
// CONTACT FORM
// ===================================
function initializeContactForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value
    };
    
    // Create WhatsApp message
    const message = `New Contact Form Submission:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}`;
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submitText');
    const originalText = submitText.textContent;
    submitText.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/27785002274?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form after a short delay
    setTimeout(() => {
      form.reset();
      submitText.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe service cards
  document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
  
  // Observe portfolio items
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(item);
  });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
  
  lastScroll = currentScroll;
});
