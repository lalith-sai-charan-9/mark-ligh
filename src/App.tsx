import React, { useState } from 'react';
import { GraduationCap, Clock, Infinity, Star, Trophy, Users, ChevronDown, Scale, Target, Crown, Dumbbell, Activity, Sparkles } from 'lucide-react';

// Module Accordion Component
function ModuleAccordion({ title, content }: { title: string; content: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-300"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <ul className="list-disc list-inside space-y-2">
            {content.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-gray-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-t from-gray-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full py-6 px-8 backdrop-blur-lg bg-white/60 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <GraduationCap className="h-8 w-8 text-red-600 relative transform group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              J3 University
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-12 relative">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-lg rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="p-1.5 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-800 font-semibold text-sm">Level 1: Physique Essentials</p>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-[1.1]">
                The Science-Backed Framework for{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Contest Prep
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-red-200 to-orange-200 -z-10 skew-x-3"></span>
                </span>
                {' & '}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Offseason Success
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-red-200 to-orange-200 -z-10 -skew-x-3"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Master the science-backed principles of physique development with a system proven at every level—from beginners to IFBB Pros and Olympians.
              </p>
            </div>

            {/* CTA and Trust Indicators */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <button className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl leading-none flex items-center">
                    <span className="text-white font-semibold text-lg">Enroll Now</span>
                  </div>
                </button>

                <div className="flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-100">
                  <div className="flex -space-x-4">
                    {[...Array(3)].map((_, i) => (
                      <img
                        key={i}
                        src={`https://images.unsplash.com/photo-${1599566150163 + i}-29194dcaad36?w=50&h=50&fit=crop&auto=format`}
                        className="w-12 h-12 rounded-full border-4 border-white ring-2 ring-gray-100"
                        alt="Avatar"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">175,000+</p>
                    <p className="text-sm text-gray-600">Coaches worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-[2rem] blur-2xl"></div>
              
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/90">
                  <img 
                    src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&q=80"
                    alt="Fitness Professional"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -left-8 top-1/4 transform -translate-y-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                        <Trophy className="h-8 w-8 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Pro Level</p>
                        <p className="text-sm text-gray-600">Results</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="absolute -right-6 -top-6">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm font-medium mt-1 text-gray-900">4.9/5 Rating</p>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-4">
                    <div className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-gray-100">
                      <Clock className="h-6 w-6 text-red-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Self-paced</p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-gray-100">
                      <Infinity className="h-6 w-6 text-red-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Lifetime access</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-20">
              <p className="text-sm text-gray-500 mb-6">Trusted by leading brands</p>
              <div className="grid grid-cols-4 gap-12">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop&auto=format"
                      alt={`Partner Logo ${i + 1}`}
                      className="h-12 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 relative"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50"></div>
        <div className="relative container mx-auto px-8 py-24">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Master the Foundations of Building a{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Championship Physique</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-red-200 to-orange-200 -z-10"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Level 1: Physique Essentials course is designed for physique athletes, coaches, and enthusiasts who want to build a deep understanding of nutrition and training for contest prep and offseason growth. This program teaches the core principles of evidence-based physique development, equipping students with the knowledge and tools to optimize all variables for success in physique sport.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title: "Stay Lean in the Offseason",
                description: "Master strategies to extend productive periods and avoid excess fat gain.",
                icon: Scale
              },
              {
                title: "Achieve Stage Lean",
                description: "Learn how to manage fat loss rates and timelines for consistent, predictable results.",
                icon: Target
              },
              {
                title: "Perfect Your Peak",
                description: "Gain the knowledge to avoid flat or spilled looks on show day with effective peak week prep.",
                icon: Crown
              },
              {
                title: "Improve Weak Body Parts",
                description: "Learn how to set up targeted training to enhance lagging muscle groups and produce real results.",
                icon: Dumbbell
              },
              {
                title: "Optimize PED Use",
                description: "Understand effective dosing strategies for progress with fewer side effects.",
                icon: Activity
              },
              {
                title: "Understand Health Metrics",
                description: "Develop confidence in navigating lab testing and tracking health markers.",
                icon: Activity
              },
              {
                title: "Don't Blow the Offseason Post-Show",
                description: "Learn how to stay lean, recover effectively, and set yourself up for growth in the upcoming phase.",
                icon: Sparkles
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl w-fit mb-4">
                  <skill.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* What You'll Learn Section */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Structured into a step-by-step 9 module curriculum, this course guides you through physique coaching, contest prep, and offseason programming with both theory and real-world application.
              </p>
            </div>

            {/* Module Accordion */}
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  title: "Assessing Your Physique: The Key to Progress",
                  content: [
                    "Developing your personal and business growth in physique sport",
                    "Set up reliable tracking systems to monitor muscle growth and fat loss.",
                    "Analyze physique assessments to adjust training and nutrition.",
                    "How to be effective in athlete/client check ins and communication"
                  ]
                },
                {
                  title: "Maximizing Recovery for Faster Progress",
                  content: [
                    "Understand the key components of recovery and why it's essential for training adaptations",
                    "Learn about sleep, stress management, and their impact on muscle growth and fat loss.",
                    "Track and adjust recovery metrics to avoid overtraining.",
                    "Discover advanced recovery tools like heat vs cold therapy, dry needling, and much more."
                  ]
                },
                {
                  title: "Nutrition That Works: Fueling Your Physique",
                  content: [
                    "Learn how to track and stick to a diet plan",
                    "Implement timing, food source choice and periodization of fat, carbs and protein",
                    "Understand nutrient timing around training and how to rotate calories",
                    "Comprehensive application to fluid and electrolytes needs/adjustments for offseason to peaking",
                    "Explore the role of micronutrients and supplements in supporting training and recovery."
                  ]
                }
              ].map((module, index) => (
                <ModuleAccordion key={index} title={module.title} content={module.content} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: How the Program Works and Features */}
      <div className="w-full relative py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="relative container mx-auto px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              How the Program Works and{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Features</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-red-200 to-orange-200 -z-10"></span>
              </span>
            </h2>
          </div>

          {/* Program Features List */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-10">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Expert-Led Video Lectures */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert-Led Video Lectures</h3>
                  <p className="text-gray-600">9 High-quality modules, with in-depth lessons totaling over 50 hours of content from industry experts covering all aspects of physique development</p>
                </div>
              </div>

              {/* Comprehensive Course Materials */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Scale className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Course Materials</h3>
                  <p className="text-gray-600">Each module comes with downloadable PDFs, study guides, and structured lesson plans to reinforce learning.</p>
                </div>
              </div>

              {/* Self-Paced Learning */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Clock className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Self-Paced Learning with Lifetime Access</h3>
                  <p className="text-gray-600">Complete the course at your own speed, with lifetime access to revisit materials anytime, many complete in 60-90 days</p>
                </div>
              </div>

              {/* Expert Led Forum */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Users className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Led Forum</h3>
                  <p className="text-gray-600">24/7 support: Ask direct questions to John, Luke and the J3U Team in the forum around course materials or your own physique needs</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Quizzes & Knowledge Checks */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Target className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quizzes & Knowledge Checks</h3>
                  <p className="text-gray-600">Assess your understanding with interactive quizzes to reinforce key concepts.</p>
                </div>
              </div>

              {/* Certificate of completion */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Crown className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Certificate of completion</h3>
                  <p className="text-gray-600">At the end of each module is a quiz, complete all with 80% or better and obtain your level 1 certificate</p>
                </div>
              </div>

              {/* Desktop and Mobile */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Sparkles className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Desktop and Mobile</h3>
                  <p className="text-gray-600">Learn on the go or in the comfort of your home, view content anywhere, anytime</p>
                </div>
              </div>

              {/* Continuing Education Provider */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                  <Activity className="h-6 w-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Continuing Education Provider</h3>
                  <p className="text-gray-600">NASM Approved Provider: PRO-014118 and earn 1.9 CEUs upon completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <div className="inline-block group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                <a 
                  href="#" 
                  className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Take a Tour of J3U
                  <ChevronDown className="h-5 w-5 transform -rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Who Is This Program For? */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-gray-100 to-transparent rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-t from-gray-100 to-transparent rounded-full opacity-60 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-8 relative">
          {/* Centered Title Design */}
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-bold text-red-600 mb-4 tracking-wider px-4 py-2 bg-red-50 rounded-full">
              DISCOVER YOUR PATH
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-center mx-auto max-w-4xl leading-tight">
              <span className="block mb-2">Who Is This</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Program For?
              </span>
            </h2>
          </div>

          {/* Centered Grid Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Featured Item */}
            <div className="group mb-12">
              <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-10 overflow-hidden hover:shadow-[0_0_50px_rgba(251,113,133,0.15)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 mb-6">
                    <GraduationCap className="w-12 h-12 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Aspiring Coaches & Trainers</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    Looking to deepen their knowledge and confidently guide clients through contest prep and offseason phases.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Items */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="group">
                <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(251,113,133,0.15)] transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 mb-6">
                      <Trophy className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Physique Athletes & Competitors</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Wanting to optimize their training, nutrition, and peaking strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group">
                <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(251,113,133,0.15)] transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 mb-6">
                      <Users className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Fitness Professionals</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Seeking a structured, science-based approach to enhance their coaching toolkit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group">
                <div className="relative bg-white/60 backdrop-blur-lg rounded-3xl p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(251,113,133,0.15)] transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 mb-6">
                      <Dumbbell className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Dedicated Lifters & Enthusiasts</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Passionate about physique transformation and evidence-based strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The J3U Learning Pathway */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Interactive Pathway */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl blur-2xl"></div>
              <div className="relative space-y-8">
                {/* Level 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                      <Target className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Level 1: Physique Essentials</h3>
                      <p className="text-gray-600">Build the foundation with science-backed principles of contest prep and offseason programming.</p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="relative h-12 w-1 bg-gradient-to-b from-red-500 to-orange-500 mx-auto"></div>

                {/* Level 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
                      <Crown className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Level 2: Physique Mastery</h3>
                      <p className="text-gray-600">Apply these principles through real-world case studies and advanced problem-solving.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content and CTA */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">The J3U Learning Pathway</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  J3 University is designed as a progressive learning experience, giving students the tools to build a strong foundation before advancing into more complex, real-world applications. Our structured pathway ensures you gain both theoretical knowledge and practical skills needed to master physique development.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6 py-8 border-y border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Take Both for Full Mastery</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Sparkles className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="text-gray-700">Monthly VIP Live Calls – Exclusive Q&A sessions with expert insights</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Activity className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="text-gray-700">Level 2 Case Studies – Practical applications to reinforce what you've learned</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300">
                  Get Started with Level 1
                </button>
                <button className="flex-1 px-8 py-4 bg-white text-red-600 font-semibold rounded-xl border-2 border-red-100 hover:bg-red-50 hover:border-red-200 transition-all duration-300">
                  Upgrade to Full Mastery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What Makes J3U Different? */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Makes J3U Different?
            </h2>
            <p className="text-xl text-gray-600">
              J3U isn't just another course—it's a blueprint for long-term success in bodybuilding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Roadmap for Physique Development</h3>
                  <p className="text-gray-600 leading-relaxed">Whether you're natural or enhanced, male or female, competitor or coach, we give you the exact tools you need to optimize every phase: offseason, contest prep, peaking, and post-show recovery.</p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Infinity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Full Picture</h3>
                  <p className="text-gray-600 leading-relaxed">Most courses focus on just training, nutrition, or PEDs—we cover it all. You'll learn how to bring everything together in a complete system that maximizes muscle growth, fat loss, and health.</p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No Getting Lost in the Weeds</h3>
                  <p className="text-gray-600 leading-relaxed">We break down complex topics into actionable strategies. You won't get stuck in unnecessary nuance that doesn't move the needle.</p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Beyond the Basics</h3>
                  <p className="text-gray-600 leading-relaxed">We don't just tell you what to do—we teach you why. This means breaking down the science behind muscle growth, fat loss, PEDs, health management, and performance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proven, Practical Strategies</h3>
              <p className="text-gray-600">Everything comes from real-world experience at the highest level—what works for elite IFBB pros and dedicated bodybuilders.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Health-First, Longevity-Focused</h3>
              <p className="text-gray-600">Learn to track key health markers, manage stressors, and make decisions that support both performance and long-term well-being.</p>
            </div>

            {/* Feature 7 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lifetime Access, Always Evolving</h3>
              <p className="text-gray-600">Once you enroll, you'll have lifetime access to your modules, including future updates, so you stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Meet Your Instructors */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gray-900">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-red-600/5 to-transparent transform -skew-x-12"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-red-600/5 to-transparent transform skew-x-12"></div>
        </div>

        <div className="container mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Your Instructors
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Instructors Grid */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* John Jewett */}
            <div className="relative group">
              {/* Card Background with Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,0,0)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
              </div>
              
              {/* Main Content */}
              <div className="relative p-10">
                {/* Header Section */}
                <div className="flex items-start gap-8 mb-8">
                  {/* Profile Image Container */}
                  <div className="relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-28 h-28 bg-gray-900 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <svg className="w-14 h-14 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Name and Credentials */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                      John Jewett
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium tracking-wide">MS</span>
                      <span className="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium tracking-wide">RD</span>
                      <span className="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium tracking-wide">IFBB Pro</span>
                    </div>
                  </div>
                </div>

                {/* Biography with Quote Design */}
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-red-600/20 text-6xl font-serif">"</div>
                  <p className="text-gray-300 leading-relaxed pl-6 relative z-10">
                    John Jewett is an IFBB Professional Bodybuilder and Olympian, Registered Dietitian, coach, and educator with a Master's degree in Nutrition and extensive experience in contest prep and physique development. As the founder of J3 University, John has helped countless athletes optimize their training, nutrition, and peaking strategies through evidence-based methods. His science-driven approach has made him one of the most respected voices in physique coaching.
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-red-600/20 text-6xl font-serif transform rotate-180">"</div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/50 transition-colors duration-300"></div>
            </div>

            {/* Luke Miller */}
            <div className="relative group">
              {/* Card Background with Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,0,0)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
              </div>
              
              {/* Main Content */}
              <div className="relative p-10">
                {/* Header Section */}
                <div className="flex items-start gap-8 mb-8">
                  {/* Profile Image Container */}
                  <div className="relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-28 h-28 bg-gray-900 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <svg className="w-14 h-14 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Name and Credentials */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                      Luke Miller
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium tracking-wide">MS</span>
                      <span className="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium tracking-wide">PSL2</span>
                      <span className="px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-medium tracking-wide">CSCS</span>
                    </div>
                  </div>
                </div>

                {/* Biography with Quote Design */}
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-red-600/20 text-6xl font-serif">"</div>
                  <p className="text-gray-300 leading-relaxed pl-6 relative z-10">
                    Luke Miller is a respected coach, educator, and competitive bodybuilder with a reputation for driving results through a science-based and relentless approach to physique sport. Educated with a Masters degree in Exercise Science Luke has a deep understanding of biomechanics and performance-based training. Luke has worked with athletes at all levels to take beginners to win pro card and on to win pro shows. As a key educator at J3 University and coach for J3U Coaching Luke bridges the gap between theory and real-world application.
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-red-600/20 text-6xl font-serif transform rotate-180">"</div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/50 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Student Testimonials */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-50 to-transparent rounded-full transform rotate-12 opacity-60"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gray-100 to-transparent rounded-full transform -rotate-12 opacity-60"></div>
          </div>
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(220 38 38 / 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-8 relative">
          {/* Section Header with enhanced styling */}
          <div className="max-w-3xl mx-auto text-center mb-20 relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-red-50 rounded-full opacity-50 blur-2xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative">
              Student Testimonials
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600">
              Hear from our community of athletes, coaches, and professionals
            </p>
          </div>

          {/* Video Testimonials Placeholder with enhanced styling */}
          <div className="mb-20 relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-30 blur-2xl"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Video Testimonials</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/30 to-transparent"></div>
              <div className="relative text-gray-500">[Placeholder for video testimonial grid/carousel]</div>
            </div>
          </div>

          {/* Written Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Testimonial - Terrance Ruffin */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-500 transform rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>
                <div className="flex flex-col h-full">
                  <blockquote className="flex-1 text-gray-600 text-lg leading-relaxed mb-6">
                    "I just want to take a second and thank John Jewett for creating J3 University. It's definitely taken my coaching ability to another level. One of my core traits is the belief that we should always be striving to improve in every aspect of life and his course has helped me to do just that. John has definitely made the bodybuilding world a safer and more intelligent one."
                  </blockquote>
                  <footer>
                    <div className="font-bold text-gray-900 text-lg">Terrance Ruffin</div>
                    <div className="text-red-600">IFBB Pro Olympian and Prep Coach</div>
                  </footer>
                </div>
              </div>
            </div>

            {/* Wesley Vissers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "Just want to thank you for the incredible content you provide, John. Especially now considering how important proper knowledge is. Absolutely love the new contest prep lectures. I have learned a lot from the modules. You're a gem to the bodybuilding industry."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Wesley Vissers</div>
                <div className="text-red-600">IFBB Pro Olympian, Arnold Classic Champion</div>
              </footer>
            </div>

            {/* Kuba Sylvester */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "John has built something unique, a place for us bodybuilders and coaches that care about progression, if you truly want to level up and learn how to maximize every variable this is the place to be and it covers it all. This program teaches the core principles of evidence-based physique development, equipping students with the knowledge and tools to optimize all variables for success in physique sport."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Kuba Sylvester Cielen</div>
                <div className="text-red-600">IFBB Pro, Team MK Coaching</div>
              </footer>
            </div>

            {/* Chris Tuttle */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "Bro again your university program is unbelievable. That's every dollar worth it. This is actually priceless information. We've all done experimental/anecdotal stuff to ourselves and based that on progression. Until now of course. I see eye to eye on everything you're saying in these lectures. Hope a lot of newbies will take advice and not fall into the dogma that surrounds so much crap in the sport."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Chris Tuttle</div>
                <div className="text-red-600">IFBB Pro, Registered Dietitian, IFBB Pro Coach</div>
              </footer>
            </div>

            {/* Austin Karr - Featured */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <blockquote className="text-gray-600 mb-6">
                  "I've spent 5k on certifications that weren't remotely as valuable as J3. Best investment of my coaching career by far."
                </blockquote>
                <footer>
                  <div className="font-bold text-gray-900">Austin Karr</div>
                  <div className="text-red-600">IFBB Pro and Level Up Physiques Coach</div>
                </footer>
              </div>
            </div>

            {/* Jason Hebert */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "The information is absolutely priceless and the atmosphere they bring is remarkable how everyone is so engaged in absorbing, understanding, and learning what's being taught. If you're an athlete, competitor, coach, or just someone that wants to further their knowledge in nutrition and training, do yourself a favor and sign up"
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Jason Hebert</div>
                <div className="text-red-600">212 IFBB Pro and Coach</div>
              </footer>
            </div>

            {/* Dr. Alex PT */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "I have been involved in health and fitness for over 20 years, and J3U is the most eclectic, comprehensive, organized, and thorough program that I have ever come across. This program teaches the core principles of evidence-based physique development, equipping students with the knowledge and tools to optimize all variables for success in physique sport."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Dr. Alex PT</div>
                <div className="text-red-600">DTP, OCS, MTC</div>
              </footer>
            </div>

            {/* Shaun Hawley */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "I've been asked a lot: Is J3U worth it? The answer will ALWAYS be 'Hands down best money I've spent in a LONG time!' You have lifetime access to the modules you purchase, so you can review the info as often as you want."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Shaun Hawley</div>
                <div className="text-red-600">NPC Bodybuilder and Prep Coach</div>
              </footer>
            </div>

            {/* Tyler Flute */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "I've spent 5k on certifications that weren't remotely as valuable as J3. Best investment of my coaching career by far."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Tyler Flute</div>
                <div className="text-red-600">IFBB Pro and Level Up Physiques Coach</div>
              </footer>
            </div>

            {/* Firas Cobra */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <blockquote className="text-gray-600 mb-6">
                "One of the best education programs for a coach/competitor covering all aspects from recovery, health, bloodwork, training, PEDs, offseason, contest prep, and post-show the right way."
              </blockquote>
              <footer>
                <div className="font-bold text-gray-900">Firas Cobra</div>
                <div className="text-red-600">Contest Prep Coach and Competitor</div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Reasons to Join Now */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Join Now?
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full transition-all duration-300 hover:bg-gray-800/70">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Master Physique Development from Day One</h3>
                <p className="text-gray-400">Get expert-led education with real-world application, covering both contest prep and the offseason.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full transition-all duration-300 hover:bg-gray-800/70">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">More Than Just Theory</h3>
                <p className="text-gray-400">J3U teaches you how to apply what you learn with case studies, practical strategies, and proven methods.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full transition-all duration-300 hover:bg-gray-800/70">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Self-Paced Learning with Lifetime Access</h3>
                <p className="text-gray-400">Learn on your schedule and revisit the material anytime to stay ahead.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full transition-all duration-300 hover:bg-gray-800/70">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">The Most Comprehensive Course Available</h3>
                <p className="text-gray-400">Covering everything from training and nutrition to PEDs, health monitoring, and performance enhancement—all in one system.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full transition-all duration-300 hover:bg-gray-800/70">
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Join an Elite Community</h3>
                <p className="text-gray-400">Connect with like-minded coaches and athletes, engage with experts, and get ongoing support for your journey.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add keyframes for blob animation */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Section 10: Checkout & Payment Options */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 h-64 w-64 text-red-50 transform translate-x-1/3 -translate-y-1/4" fill="currentColor">
            <circle cx="32" cy="32" r="32" />
          </div>
          <div className="absolute left-0 bottom-0 h-64 w-64 text-red-50 transform -translate-x-1/3 translate-y-1/4" fill="currentColor">
            <circle cx="32" cy="32" r="32" />
          </div>
        </div>

        <div className="container mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Checkout & Payment Options
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Invest in your future as a physique coach with a science-backed, application-driven education. Whether you're an athlete, coach, or fitness professional, this program gives you the knowledge and tools to build evidence-based contest prep and offseason strategies."
            </p>
          </div>

          {/* Payment Options */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1: One-Time Payment */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-xl shadow-lg">
                  {/* Popular Badge */}
                  <div className="absolute -top-4 right-4">
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      Best Value
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">One-Time Payment</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-bold text-gray-900">$1095</span>
                      </div>
                      <p className="text-gray-600 text-sm">One-time investment—no recurring fees</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Full access to Level 1: Physique Essentials
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lifetime access to all course materials
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Save $55 compared to payment plan
                      </li>
                    </ul>

                    <button className="w-full bg-red-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg">
                      Select One-Time Payment
                    </button>
                  </div>
                </div>
              </div>

              {/* Option 2: Payment Plan */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white rounded-xl shadow-lg">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Payment Plan</h3>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-bold text-gray-900">$350</span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      <p className="text-gray-600 text-sm">For 3 months, total $1,050</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Instant access after first payment
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Lifetime access upon completion
                      </li>
                      <li className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Flexible option to fit your budget
                      </li>
                    </ul>

                    <button className="w-full bg-gray-800 text-white py-4 px-8 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 shadow-md hover:shadow-lg">
                      Select Payment Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                All payments are processed securely. By purchasing, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* Add keyframes for subtle background animation */}
        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Section 11: 90-Day Guarantee */}
      <section className="py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 transform -skew-x-12"></div>
          <svg className="absolute right-0 top-0 h-full w-1/3 text-gray-50 transform translate-x-1/2" fill="currentColor">
            <defs>
              <pattern id="guarantee-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" className="text-gray-200" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#guarantee-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Guarantee
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Guarantee Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-white/20">
                  {/* 90-day badge */}
                  <div className="absolute -top-6 -right-6 w-24 h-24">
                    <div className="absolute inset-0 bg-red-600 rounded-full transform rotate-12"></div>
                    <div className="absolute inset-0 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                      <div className="text-center">
                        <div className="text-2xl">90</div>
                        <div className="text-xs">DAYS</div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Guarantee</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    "We're confident that Level 1: Physique Essentials will provide you with the knowledge and tools to master physique coaching. That's why we offer a risk-free 90-day guarantee.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Go through the course, apply the principles, and if after 90 days you don't feel it's delivering value, simply reach out to us. We'll work with you to ensure you get the most out of your learning or provide a full refund. Your success is our priority."
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Trust Elements</h3>
                
                {/* Trust Element 1 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-300 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300"></div>
                  <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">100% Science-Backed, Expert-Led Curriculum</h4>
                        <p className="text-gray-600">Evidence-based methodologies taught by industry experts</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Element 2 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-300 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300"></div>
                  <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">Proven Frameworks for Physique Coaching</h4>
                        <p className="text-gray-600">Structured approach to build successful coaching strategies</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Element 3 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-300 rounded-lg opacity-0 group-hover:opacity-10 transition duration-300"></div>
                  <div className="relative bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-1">Lifetime Access – Learn at Your Own Pace</h4>
                        <p className="text-gray-600">Flexible learning schedule with unlimited content access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: FAQ */}
      <section className="py-24 relative bg-gradient-to-b from-white to-gray-50">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 top-0 h-64 w-64 text-red-50 transform translate-x-1/3 -translate-y-1/4" fill="currentColor">
            <circle cx="32" cy="32" r="32" />
          </svg>
          <svg className="absolute left-0 bottom-0 h-64 w-64 text-red-50 transform -translate-x-1/3 translate-y-1/4" fill="currentColor">
            <circle cx="32" cy="32" r="32" />
          </svg>
        </div>

        <div className="container mx-auto px-8 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about J3U Level 1: Physique Essentials
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Who is this course for?",
                a: "This course is designed for physique athletes, contest prep coaches, personal trainers, and fitness enthusiasts who want a structured, science-backed approach to physique development."
              },
              {
                q: "How long do I have access to the course?",
                a: "Lifetime access! Once you enroll, you'll have unlimited access to all course materials, allowing you to learn at your own pace and revisit the content whenever needed."
              },
              {
                q: "Is this course self-paced?",
                a: "Yes! You can go through the material at your own speed, making it easy to fit into your schedule."
              },
              {
                q: "Does this course cover PEDs?",
                a: "Yes! Unlike other courses, J3U Level 1: Physique Essentials includes a dedicated section on PED education, covering risk management, protocols, and health monitoring."
              },
              {
                q: "What if I'm not satisfied with the course?",
                a: "We offer a 90-day guarantee. If you complete the course, apply the strategies, and don't feel it's delivering value, simply contact us for a full refund."
              },
              {
                q: "What's the difference between Level 1 and Level 2?",
                a: "Level 1 focuses on building a strong foundation in physique coaching, while Level 2 incorporates real-world case studies, troubleshooting, and advanced coaching techniques."
              },
              {
                q: "Is there a certification?",
                a: "While this is an education-based program, not an accredited certification, you will receive a certificate of completion, demonstrating your knowledge of evidence-based physique coaching."
              },
              {
                q: "When will I get access to the course?",
                a: "You get instant access to the course and will receive and email with log in credentials for desktop and the app."
              },
              {
                q: "Do I have to follow lessons in order?",
                a: "No, you get instant access to the entire course and can start any module or lesson in any sequence, however each module does build on concepts from the previous one and is advised to go in order."
              },
              {
                q: "Do you have subtitles? Additional Languages?",
                a: "Yes! All of the lessons have subtitles in English, Spanish & Hindi"
              },
              {
                q: "How long does it take to complete the course?",
                a: "On average it takes between 60 & 90 days to complete the entire course."
              },
              {
                q: "Can I download the lessons?",
                a: "Yes you can download them in the app to keep on your phone."
              },
              {
                q: "Do you have an app?",
                a: "Yes, the J3University app is available on both iOS and Android."
              },
              {
                q: "Can I ask John a specific question?",
                a: "Yes! All students have 1 month free access to the student forums. VIP students get a live video call with John to ask questions face to face."
              }
            ].map((faq, index) => (
              <div key={index} className="group">
                <button 
                  className="w-full bg-white rounded-xl p-6 text-left shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    const icon = e.currentTarget.querySelector('.transform');
                    if (content?.classList.contains('max-h-0')) {
                      content.classList.remove('max-h-0', 'opacity-0');
                      content.classList.add('max-h-96', 'opacity-100');
                      icon?.classList.add('rotate-180');
                    } else {
                      content?.classList.remove('max-h-96', 'opacity-100');
                      content?.classList.add('max-h-0', 'opacity-0');
                      icon?.classList.remove('rotate-180');
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{faq.q}</h4>
                    </div>
                    <svg 
                      className="w-6 h-6 text-gray-400 transform transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-xl -mt-2 px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Support */}
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Still have questions? <a href="#contact" className="text-red-600 font-semibold hover:text-red-700">Contact our support team</a>
            </p>
          </div>
        </div>

        {/* Add styles for smooth transitions */}
        <style jsx>{`
          .max-h-0 {
            max-height: 0;
          }
          .max-h-96 {
            max-height: 24rem;
          }
        `}</style>
      </section>

      {/* Section 13: Final Banner - Support Contact */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-red-900 opacity-90"></div>
          {/* Animated background patterns */}
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        </div>

        <div className="container mx-auto px-8 relative">
          <div className="max-w-4xl mx-auto">
            {/* Content Container */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-200 leading-relaxed">
                  "If you have any questions about the course, enrollment, or whether Level 1: Physique Essentials is right for you, don't hesitate to reach out. Our team is happy to assist you in making the best decision for your physique coaching journey."
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Email Option */}
                <div className="group">
                  <a 
                    href="mailto:support@j3university.com"
                    className="block bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Email Support</h3>
                        <p className="text-red-300 group-hover:text-red-200 transition-colors duration-300">support@j3university.com</p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Chat Option */}
                <div className="group">
                  <button 
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300"
                    onClick={() => {
                      // Add chat widget open functionality here
                      console.log('Open chat widget');
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Live Chat</h3>
                        <p className="text-red-300 group-hover:text-red-200 transition-colors duration-300">Available on website bottom right</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Additional Text */}
              <div className="mt-10 text-center">
                <p className="text-gray-300">
                  Our support team typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Footer */}
      <footer className="bg-gray-900 pt-20 pb-10">
        {/* Decorative top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Logo Column */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl font-bold text-white">J3 University</div>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
                  Login
                </button>
              </div>

              {/* Programs */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Programs</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Level 1</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">AHO</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Female</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Olympia</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">X-Frame</a></li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Community</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Forums</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Find a Coach</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">T-Shirts</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Home</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Terms</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright */}
                <div className="text-gray-500 text-sm">
                  2025 J3 University. All rights reserved.
                </div>

                {/* Social Links */}
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a2.504 2.504 0 0 1-1.768-1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;