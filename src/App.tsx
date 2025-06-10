import React, { useState } from "react";
import {
  Play,
  Users,
  CheckCircle,
  MapPin,
  ShoppingCart,
  Brain,
  Shirt,
  X,
  AlertCircle,
  Package,
  Search,
  Heart,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    city: "",
    category: "",
  });

  const testimonials = [
    {
      id: 1,
      name: "Priya Chatterjee",
      business: "Handloom Sarees",
      location: "Located: Kolkata",
    },
    {
      id: 2,
      name: "Arjun Das",
      business: "Tech Solutions",
      location: "Located: Bangalore",
    },
    { id: 3, name: "Meera Roy", business: "Food Products", location: "Located: Delhi" },
    {
      id: 4,
      name: "Subham Ghosh",
      business: "Handicrafts",
      location: "Located: Mumbai",
    },
    {
      id: 5,
      name: "Ritu Banerjee",
      business: "Fashion Brand",
      location: "Located: Pune",
    },
    {
      id: 6,
      name: "Tanmay Roy",
      business: "Organic Tea",
      location: "Located: Darjeeling",
    },
    // { id: 7, name: 'Poulomi Chatterjee', business: 'Clay Pottery', location: 'Krishnanagar' },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      Sticky Header
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/01 (1).png"
                alt="BongPreneurs Logo"
                className="h-11 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "block";
                }}
              />
              <div className="hidden text-2xl font-bold">
                <span className="text-[#3C1A5B]">bong</span>
                <span className="text-[#FFF748]">preneurs</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-[#3C1A5B] transition-colors"
              >
                About
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-[#3C1A5B] transition-colors"
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#3C1A5B] transition-colors"
              >
                Stories
              </a>
              <a
                href="#founder"
                className="text-gray-700 hover:text-[#3C1A5B] transition-colors"
              >
                Founder
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="bg-[#FFF748] text-[#3C1A5B] px-6 py-2 rounded-full font-semibold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Join Now
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <a href="#about" className="block py-2 text-gray-700">
                About
              </a>
              <a href="#benefits" className="block py-2 text-gray-700">
                Benefits
              </a>
              <a href="#testimonials" className="block py-2 text-gray-700">
                Stories
              </a>
              <a href="#founder" className="block py-2 text-gray-700">
                Founder
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#3C1A5B] via-[#4A2268] to-[#5B2A75] flex items-center justify-center overflow-hidden pt-24">

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
  <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFF748] rounded-full animate-pulse"></div>
  <div className="absolute top-40 right-20 w-24 h-24 bg-[#FFF748] rounded-full animate-bounce delay-1000"></div>
  <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#FFF748] rounded-full animate-ping delay-2000"></div>
</div>

        

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          {/* Main Headlines */}
          <div className="mb-8 font-serif">
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              India's First{" "}
              <span className="text-[#FFF748]">Bengali Business Hub</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white/90 mb-8">
              — And Your Growth Starts Here.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 font-sans">
              Join A Community Where{" "}
              <span className="text-[#FFF748] font-semibold">'bishbash'</span>{" "}
              Builds Business.
            </p>
          </div>

          {/* Tagline Box */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                "Whether you make{" "}
                <span className="text-[#FFF748] font-semibold">
                  snacks, sarees, software, or solutions
                </span>{" "}
                — list once, be seen nationwide.
              </p>
              <p className="text-lg md:text-xl text-white leading-relaxed mt-2">
                Get verified. Get found. Get real leads —{" "}
                <span className="text-[#FFF748] font-semibold">
                  without paying a rupee to start.
                </span>
                "
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <div className="bg-transparent rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-none">
              <div className="w-full h-[500px] bg-gradient-to-br from-[#3C1A5B] to-[#2A1440] rounded-2xl flex items-center justify-center group cursor-pointer">
                {/* Remove this entirely or make it non-absolute */}
                {/* You can replace it with a subtle backdrop inside the inner content if needed */}

                <div className="relative z-10 text-center">
                  <div className="bg-[#FFF748] w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play
                      className="w-8 h-8 md:w-10 md:h-10 text-[#3C1A5B] ml-1"
                      fill="currentColor"
                    />
                  </div>
                  <p className="text-white text-lg md:text-xl font-semibold">
                    Watch Our Story
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-[#FFF748] text-[#3C1A5B] px-8 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[#FFF748]/25">
              Join the Network – Free Registration
              <br />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-gray-300">
            <br />
            <br />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>1000+ Entrepreneurs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>50+ Cities</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>100% Free to Start</span>
            </div>
          </div>
        </div>
      </section>
      {/* What is BongPreneurs Section */}
      {/* <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3C1A5B] mb-8">What is BongPreneurs</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                BongPreneurs is India's first Bengali-first business network — built for entrepreneurs who want more than just a listing. It's where saree sellers meet software founders, snack brands connect with national distributors, and trust grows through verified connections.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                We're not just another directory. We're a movement that celebrates Bengali entrepreneurship while connecting you to opportunities across India and beyond.
              </p>
              <button className="bg-[#3C1A5B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3C1A5B]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                I Want To Join This Ecosystem
              </button>
            </div>
          </div>
        </div>
        
      </section> */}
      <section id="join-form" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-6">
                  What is BongPreneurs
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    BongPreneurs is India's first Bengali-first business network
                    — built for entrepreneurs who want more than just a listing.
                    It's where saree sellers meet software founders, snack
                    brands connect with national distributors, and trust grows
                    through verified connections.
                  </p>
                  <p>
                    We understand the unique challenges Bengali entrepreneurs
                    face: from language barriers in business networking to
                    finding culturally aligned partners who truly understand
                    your market and values.
                  </p>
                  <p>
                    This isn't just another business directory. It's a movement
                    to unite Bengali entrepreneurship across India and beyond,
                    creating opportunities that honor our heritage while
                    embracing modern business growth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-brand-secondary">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Entrepreneurs</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-brand-secondary">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-brand-secondary">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Verified</div>
                </div>
              </div>

              <button
                onClick={() => {
                  const form = document.getElementById("join-form");
                  form?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FFF748] text-[#3C1A5B] px-14 py-4 rounded-full text-lg font-semibold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                I Want To Join This Ecosystem
              </button>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#3C1A5B] to-[#5B2A75] rounded-2xl p-8 md:p-10 text-white shadow-xl shadow-[#00000022]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">
                    The Bengali Business Revolution
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 mt-2 bg-[#FFF748] rounded-full flex-shrink-0"></div>
                      <p className="text-white text-lg">
                        Connect with entrepreneurs who share your cultural
                        values
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 mt-2 bg-[#FFF748] rounded-full flex-shrink-0"></div>
                      <p className="text-white text-lg">
                        Access markets that understand your products and
                        services
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 mt-2 bg-[#FFF748] rounded-full flex-shrink-0"></div>
                      <p className="text-white text-lg">
                        Build trust through community verification and
                        recommendations
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 mt-2 bg-[#FFF748] rounded-full flex-shrink-0"></div>
                      <p className="text-white text-lg">
                        Scale your business with culturally-aware mentorship
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                {/* <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#FFF748]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-6 w-16 h-16 bg-white/10 rounded-full blur-lg"></div> */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-[#FFF748]/10 rounded-full "></div>
  <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#FFF748]/10 rounded-full animate-ping delay-2000"></div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* Platform Benefits Grid */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3C1A5B] mb-4">
              Why Choose BongPreneurs
            </h2>
            <p className="text-xl text-gray-600">
              Six powerful reasons to join India's first Bengali business hub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#3C1A5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-4">
                Genuine Networking
              </h3>
              <p className="text-gray-600">
                Connect with real entrepreneurs who share your passion and
                cultural values
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-[#3C1A5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-4">
                Verified Visibility
              </h3>
              <p className="text-gray-600">
                Build instant trust with verified profiles that showcase your
                credibility
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-[#3C1A5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-4">
                Smart Listings
              </h3>
              <p className="text-gray-600">
                City + category listings help customers find you fast and easy
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-8 h-8 text-[#3C1A5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-4">
                Bulk Sales
              </h3>
              <p className="text-gray-600">
                Participate in seasonal auctions and bulk selling opportunities
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#3C1A5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-4">
                Growth Consulting
              </h3>
              <p className="text-gray-600">
                Access expert advice and VC circles to scale your business
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
              <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shirt className="w-8 h-8 text-[#3C1A5B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-4">
                Brand Merchandise
              </h3>
              <p className="text-gray-600">
                Launch your brand through Bengali-themed merchandise and
                products
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#FFF748] text-[#3C1A5B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Me Inside
            </button>
          </div>
        </div>
      </section>
      {/* Problem/Solution Block */}
      <section className="py-20 bg-gradient-to-br from-[#3C1A5B] to-[#4A2268]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            WHY YOU'RE STILL INVISIBLE
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#FFF748] mb-12">
            (AND HOW THAT ENDS NOW)
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <X className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Fake Inquiries
              </h4>
              <p className="text-white/80">
                Wasting time on leads that never convert
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <X className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                No Follow-up
              </h4>
              <p className="text-white/80">
                Connections that disappear after first contact
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <X className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                No Local Relevance
              </h4>
              <p className="text-white/80">
                Generic platforms that don't understand your market
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              BongPreneurs isn't just a listing site — it's a Bengali-first
              business community where real connections spark real growth.
            </p>
          </div>

          <button className="bg-[#FFF748] text-[#3C1A5B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg">
            I'm Ready for Meaningful Business
          </button>
        </div>
      </section>
      {/* Emotional Story Block */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C1A5B] mb-8 leading-tight">
            You've built your business with passion, grit, and long hours. But
            something's missing —
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Package className="w-16 h-16 text-[#FFF748] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-2">
                Real Exposure
              </h3>
              <p className="text-gray-600">
                Get seen by the right people at the right time
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Search className="w-16 h-16 text-[#FFF748] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-2">
                Serious Buyers
              </h3>
              <p className="text-gray-600">
                Connect with customers who are ready to buy
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Heart className="w-16 h-16 text-[#FFF748] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#3C1A5B] mb-2">
                Support & Mentorship
              </h3>
              <p className="text-gray-600">
                Get guidance from experienced entrepreneurs
              </p>
            </div>
          </div>

          <div className="bg-[#3C1A5B] text-white p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold italic">
              "Chhoto theke boro hote chai."
            </p>
            <p className="text-lg mt-2 opacity-90">
              We all want to grow from small to big.
            </p>
          </div>

          <button className="bg-[#FFF748] text-[#3C1A5B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg">
            Count Me In – I Want to Grow with Others
          </button>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3C1A5B] mb-4">
              REAL PEOPLE. REAL STORIES.
            </h2>
            <p className="text-xl text-gray-600">
              See how BongPreneurs is transforming businesses across India
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-[500px] bg-gradient-to-br from-[#3C1A5B] to-[#4A2268] flex items-center justify-center relative group cursor-pointer">
                    <div className="bg-[#FFF748] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="w-6 h-6 text-[#3C1A5B] ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#3C1A5B] mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{testimonial.business}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-[#3C1A5B] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3C1A5B]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                I Want Results Like This – Get Me In
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Story Section */}
      <section
        id="founder"
        className="py-20 bg-gradient-to-br from-[#3C1A5B] to-[#4A2268]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            AS SEEN AT IIT DELHI – THE ORIGIN STORY
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            This isn't a listing site. It's a movement... Built by insiders.
            Backed by community. Designed for scale.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-[#2A1440] to-[#1F0F30] rounded-2xl flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="bg-[#FFF748] w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Play
                    className="w-8 h-8 text-[#3C1A5B] ml-1"
                    fill="currentColor"
                  />
                </div>
                <p className="text-white text-lg font-semibold">
                  Watch Full IIT Delhi Interview
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#FFF748] text-[#3C1A5B] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg">
            I Want to Be Part of This
          </button>
        </div>
      </section>
      {/* Founding Member Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3C1A5B] mb-4">
              Ready to become a founding member?
            </h2>
            <p className="text-xl text-gray-600">
              Join India's first Bengali business hub and start your growth
              journey today
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#3C1A5B] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFF748] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-semibold text-[#3C1A5B] mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFF748] focus:border-transparent transition-all duration-300"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#3C1A5B] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFF748] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-[#3C1A5B] mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFF748] focus:border-transparent transition-all duration-300"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold text-[#3C1A5B] mb-2"
                  >
                    Category/Industry *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FFF748] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your industry</option>
                    <option value="food">Food & Beverages</option>
                    <option value="fashion">Fashion & Textiles</option>
                    <option value="technology">Technology</option>
                    <option value="handicrafts">Handicrafts</option>
                    <option value="services">Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>🎉 Founding Member Benefits:</strong>
                  <br />
                  • Lifetime free basic listing
                  <br />
                  • Priority customer support
                  <br />
                  • Early access to new features
                  <br />• Founding member badge
                </p>
              </div>
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-[#FFF748] text-[#3C1A5B] px-12 py-4 rounded-full text-lg font-bold hover:bg-[#FFF748]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Join the Network – It's Free
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Community Connect Section */}
      <section className="py-20 bg-[#3C1A5B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            CONNECT WITH US
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            We're already live in WhatsApp groups and founder circles across
            India. Let's make your business the next big story.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-white">
                <h3 className="font-semibold mb-2">WhatsApp Group</h3>
                <p className="text-sm opacity-80">(invite-only)</p>
              </div>
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-white">
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm opacity-80">@BongPreneurs</p>
              </div>
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-white">
                <h3 className="font-semibold mb-2">Facebook</h3>
                <p className="text-sm opacity-80">BongPreneurs Official</p>
              </div>
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-white">
                <h3 className="font-semibold mb-2">Twitter</h3>
                <p className="text-sm opacity-80">@BongPreneurs</p>
              </div>
            </a>
            <a
              href="mailto:hello@bongpreneurs.com"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-2"
            >
              <div className="text-white">
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm opacity-80">hello@bongpreneurs.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#2A1440] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="/01 (1).png"
              alt="BongPreneurs Logo"
              className="h-12 w-auto mx-auto mb-4"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling!.style.display = "block";
              }}
            />
            <div className="hidden text-3xl font-bold">
              <span className="text-white">bong</span>
              <span className="text-[#FFF748]">preneurs</span>
            </div>
          </div>
          <p className="text-white/80 mb-4">
            India's First Bengali Business Hub
          </p>
          <p className="text-white/60 text-sm">
            © 2024 BongPreneurs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
