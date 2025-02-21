import React from 'react';
import { Play, XCircle, Activity, Zap, UserCheck, Target, HeartHandshake, ClipboardCheck, Stethoscope, Award, Shield, Clock, Package, Users, Star, AlertCircle, Quote, User2, Award as Medal, ShieldCheck, HeartPulse, ChevronDown, ClipboardList, Facebook, Instagram, Twitter, Linkedin, ChevronRight, MapPin, Phone, Mail, Trophy, MessageCircle } from 'lucide-react';
import {  Heart, Timer, ArrowRight , Sparkles, Brain, CheckCircle2, ArrowUpRight } from 'lucide-react';

function App() {
  return (
    <main>
      {/* Hero Section - Kept exactly as is */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Experience Fast, Natural Healing
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Say goodbye to chronic pain with non-invasive laser therapy that accelerates your recovery and enhances your quality of life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button 
                  className="px-8 py-4 bg-[#FF4500] text-white rounded-lg font-semibold text-lg 
                            transition-all duration-300 hover:bg-[#FF4500]/90 hover:scale-105"
                >
                  Book Your Session Now
                </button>

                <button 
                  className="flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm 
                            text-white rounded-lg font-medium text-lg transition-all duration-300 
                            hover:bg-white/20"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10" />
      </div>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Problem Statement */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                Tired of Chronic Pain and Slow Recovery?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-[#FF4500]/10">
                    <XCircle className="w-6 h-6 text-[#FF4500]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Avoid invasive surgeries and heavy medications.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-[#FF4500]/10">
                    <Activity className="w-6 h-6 text-[#FF4500]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Experience lasting pain relief and improved mobility.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-[#FF4500]/10">
                    <Zap className="w-6 h-6 text-[#FF4500]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Accelerate healing naturally with advanced laser technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Solution Overview */}
            <div className="lg:pl-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80"
                  alt="Laser Therapy Treatment"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-lg leading-relaxed">
                    At Healios Laser Therapy, our state-of-the-art, non-invasive laser treatment targets the root cause of your pain and inflammation. We personalize each session to help you regain mobility, reduce discomfort, and return to a life you love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Healios Laser Therapy offers a comprehensive approach to pain management and accelerated healing. Our services include personalized consultations, targeted laser treatments, and ongoing support to help you achieve lasting results. Our treatments are designed to reduce pain, decrease inflammation, and stimulate cellular repair—all without invasive procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personalized Consultations */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#FF4500]/10 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Personalized Consultations
              </h3>
              <p className="text-gray-700">
                Every journey begins with a one-on-one consultation to assess your needs and design a tailored treatment plan.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" 
                alt="Consultation Session"
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Targeted Laser Treatments */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#FF4500]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Targeted Laser Treatments
              </h3>
              <p className="text-gray-700">
                Using the latest laser technology, we deliver focused energy to damaged tissues, promoting natural healing.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
                alt="Laser Treatment"
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>

            {/* Post-Treatment Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#FF4500]/10 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Post-Treatment Support
              </h3>
              <p className="text-gray-700">
                Our team provides continuous support to monitor your progress and adjust treatments as needed.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80" 
                alt="Patient Support"
                className="w-full h-48 object-cover rounded-lg mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Why Choose Healios Laser Therapy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Non-Invasive & Safe */}
            <div className="group flex flex-col items-start">
              <div className="w-14 h-14 mb-6 rounded-xl bg-[#FF4500]/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Non-Invasive & Safe
              </h3>
              <p className="text-gray-600">
                Our laser therapy avoids surgery and harsh medications, providing a gentle yet effective treatment.
              </p>
            </div>

            {/* Rapid Recovery */}
            <div className="group flex flex-col items-start">
              <div className="w-14 h-14 mb-6 rounded-xl bg-[#FF4500]/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Rapid Recovery
              </h3>
              <p className="text-gray-600">
                Experience faster healing with minimal downtime, so you can quickly return to your daily routine.
              </p>
            </div>

            {/* Tailored Treatment */}
            <div className="group flex flex-col items-start">
              <div className="w-14 h-14 mb-6 rounded-xl bg-[#FF4500]/10 flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Tailored Treatment
              </h3>
              <p className="text-gray-600">
                Every session is customized to your unique needs for optimal results.
              </p>
            </div>

            {/* Proven Success */}
            <div className="group flex flex-col items-start">
              <div className="w-14 h-14 mb-6 rounded-xl bg-[#FF4500]/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Proven Success
              </h3>
              <p className="text-gray-600">
                Our treatments are backed by real patient testimonials and measurable success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transparent & Affordable Pricing
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Main Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* 15 Minute Appointment */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-lg font-bold">15 Minute Appointment</h3>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#FF4500]">$69</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Small Focused Area (such as a finger or toe). This appointment is a 12-minute laser therapy session.
                </p>
                <button className="w-full py-3 bg-[#FF4500] text-white rounded-lg font-semibold 
                                 transition-all duration-300 hover:bg-[#FF4500]/90">
                  Book Now
                </button>
              </div>

              {/* 30 Minute Appointment */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-lg font-bold">30 Minute Appointment</h3>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#FF4500]">$99</span>
                </div>
                <p className="text-gray-600 mb-6">
                  One Body Part or Area. This appointment is a 25-minute laser therapy session. 
                  <span className="block mt-2 text-[#FF4500] font-semibold">NEW CLIENTS / FIRST TIME VISIT - Includes FREE 15-minute consultation.</span>
                </p>
                <button className="w-full py-3 bg-[#FF4500] text-white rounded-lg font-semibold 
                                 transition-all duration-300 hover:bg-[#FF4500]/90">
                  Book Now
                </button>
              </div>

              {/* 45 Minute Appointment */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-lg font-bold">45 Minute Appointment</h3>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#FF4500]">$149</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Multiple Areas or One Large Area (such as Sciatica). This appointment is a 40-minute laser therapy session.
                </p>
                <button className="w-full py-3 bg-[#FF4500] text-white rounded-lg font-semibold 
                                 transition-all duration-300 hover:bg-[#FF4500]/90">
                  Book Now
                </button>
              </div>

              {/* 60 Minute Appointment */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-lg font-bold">60 Minute Appointment</h3>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-[#FF4500]">$199</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Two or More Body Parts or Areas. This appointment is a 55-minute laser therapy session.
                </p>
                <button className="w-full py-3 bg-[#FF4500] text-white rounded-lg font-semibold 
                                 transition-all duration-300 hover:bg-[#FF4500]/90">
                  Book Now
                </button>
              </div>
            </div>

            {/* Package Discounts */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#FF4500]/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-xl font-bold">Package of 5 Sessions</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF4500]">SAVE BIG – 10% OFF</p>
              </div>

              <div className="bg-[#FF4500]/5 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-xl font-bold">Package of 10 Sessions</h3>
                </div>
                <p className="text-2xl font-bold text-[#FF4500]">SAVE BIGGER – 15% OFF</p>
              </div>
            </div>

            {/* Referral & Review Programs */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-xl font-bold">Referral Program</h3>
                </div>
                <p className="text-lg mb-2"><span className="font-bold text-[#FF4500]">GIVE $30 GET $30</span></p>
                <p className="text-gray-600">
                  Refer a new client for $30 OFF their first appointment & receive a $30 credit toward your next session.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-[#FF4500]" />
                  <h3 className="text-xl font-bold">Review Program</h3>
                </div>
                <p className="text-lg mb-2"><span className="font-bold text-[#FF4500]">REVIEW & SAVE</span></p>
                <p className="text-gray-600">
                  Write us a Google Review for a location you have visited and receive a $20 credit toward your next session. (Offer extends per each location visited.)
                </p>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-[#FF4500]" />
                <h3 className="text-xl font-bold">Cancellation / No-Show Policy</h3>
              </div>
              <p className="text-gray-600">
                Please cancel/reschedule all appointments 24+ hours in advance to avoid the $35 late cancel/no-show charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              How Our Laser Therapy Works
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Step 1 - Consultation */}
              <div className="group relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-none">
                    <div className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white">01</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="mb-6">
                      <ClipboardCheck className="w-7 h-7 text-[#FF4500]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      Consultation
                    </h3>
                    <p className="text-gray-600">
                      Discuss your health concerns with our expert team to craft a personalized treatment plan.
                    </p>
                  </div>
                </div>
                
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute right-0 top-[45%] w-full h-[1px] bg-[#FF4500]/10" />
              </div>

              {/* Step 2 - Customized Treatment */}
              <div className="group relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-none">
                    <div className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white">02</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="mb-6">
                      <Stethoscope className="w-7 h-7 text-[#FF4500]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      Customized Treatment
                    </h3>
                    <p className="text-gray-600">
                      Experience a targeted laser session designed to reduce pain and stimulate healing.
                    </p>
                  </div>
                </div>
                
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute right-0 top-[45%] w-full h-[1px] bg-[#FF4500]/10" />
              </div>

              {/* Step 3 - Recovery & Follow-Up */}
              <div className="group relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-none">
                    <div className="w-12 h-12 bg-[#FF4500] rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-white">03</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="mb-6">
                      <Award className="w-7 h-7 text-[#FF4500]" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      Recovery & Follow-Up
                    </h3>
                    <p className="text-gray-600">
                      Notice rapid improvement and receive ongoing support to ensure lasting results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Our Patients Are Saying
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Quote className="w-10 h-10 text-[#FF4500]/20 mb-6" />
              <p className="text-gray-600 mb-6 text-lg italic">
                "After just a few sessions, my chronic back pain was significantly reduced. I can now enjoy activities I thought I'd lost forever!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF4500]/10 rounded-full flex items-center justify-center">
                  <User2 className="w-6 h-6 text-[#FF4500]" />
                </div>
                <div>
                  <p className="font-semibold text-black">Sarah</p>
                  <p className="text-gray-500 text-sm">Age 42</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Quote className="w-10 h-10 text-[#FF4500]/20 mb-6" />
              <p className="text-gray-600 mb-6 text-lg italic">
                "The personalized care and state-of-the-art technology at Healios have truly changed my life. I feel like a new person."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF4500]/10 rounded-full flex items-center justify-center">
                  <User2 className="w-6 h-6 text-[#FF4500]" />
                </div>
                <div>
                  <p className="font-semibold text-black">James</p>
                  <p className="text-gray-500 text-sm">Age 38</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Quote className="w-10 h-10 text-[#FF4500]/20 mb-6" />
              <p className="text-gray-600 mb-6 text-lg italic">
                "I was skeptical at first, but the results speak for themselves. I highly recommend Healios Laser Therapy for anyone struggling with pain."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF4500]/10 rounded-full flex items-center justify-center">
                  <User2 className="w-6 h-6 text-[#FF4500]" />
                </div>
                <div>
                  <p className="font-semibold text-black">Emily</p>
                  <p className="text-gray-500 text-sm">Age 50</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-8 items-center">
              {/* Trust Signal 1 */}
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                  <Award className="w-12 h-12 text-[#FF4500] mb-3" />
                  <p className="text-sm font-semibold text-gray-600">Certified Excellence</p>
                </div>
              </div>

              {/* Trust Signal 2 */}
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                  <ShieldCheck className="w-12 h-12 text-[#FF4500] mb-3" />
                  <p className="text-sm font-semibold text-gray-600">Safety Assured</p>
                </div>
              </div>

              {/* Trust Signal 3 */}
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                  <Stethoscope className="w-12 h-12 text-[#FF4500] mb-3" />
                  <p className="text-sm font-semibold text-gray-600">Medical Excellence</p>
                </div>
              </div>

              {/* Trust Signal 4 */}
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                  <HeartPulse className="w-12 h-12 text-[#FF4500] mb-3" />
                  <p className="text-sm font-semibold text-gray-600">Patient Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-4">
              <button 
                className="w-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-6 rounded-xl flex items-center justify-between"
                onClick={() => {
                  const el = document.getElementById('faq-1');
                  if (el) {
                    const isExpanded = el.classList.contains('max-h-96');
                    el.classList.toggle('max-h-96');
                    el.classList.toggle('max-h-0');
                    el.classList.toggle('opacity-100');
                    el.classList.toggle('opacity-0');
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4500]/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[#FF4500]" />
                  </div>
                  <span className="font-semibold text-left">Is laser therapy painful?</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div 
                id="faq-1"
                className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-6 pt-2">
                  <p className="text-gray-600">Not at all. Most patients report only a mild warming sensation during treatment.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-4">
              <button 
                className="w-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-6 rounded-xl flex items-center justify-between"
                onClick={() => {
                  const el = document.getElementById('faq-2');
                  if (el) {
                    const isExpanded = el.classList.contains('max-h-96');
                    el.classList.toggle('max-h-96');
                    el.classList.toggle('max-h-0');
                    el.classList.toggle('opacity-100');
                    el.classList.toggle('opacity-0');
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4500]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#FF4500]" />
                  </div>
                  <span className="font-semibold text-left">How many sessions will I need?</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div 
                id="faq-2"
                className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-6 pt-2">
                  <p className="text-gray-600">The number of sessions varies based on your condition, but many patients experience significant relief within 3–6 sessions.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-4">
              <button 
                className="w-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-6 rounded-xl flex items-center justify-between"
                onClick={() => {
                  const el = document.getElementById('faq-3');
                  if (el) {
                    const isExpanded = el.classList.contains('max-h-96');
                    el.classList.toggle('max-h-96');
                    el.classList.toggle('max-h-0');
                    el.classList.toggle('opacity-100');
                    el.classList.toggle('opacity-0');
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4500]/10 flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-[#FF4500]" />
                  </div>
                  <span className="font-semibold text-left">What should I expect during a session?</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div 
                id="faq-3"
                className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-6 pt-2">
                  <p className="text-gray-600">Each session begins with a brief consultation, followed by the treatment, and concludes with post-treatment guidance tailored to your needs.</p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="mb-4">
              <button 
                className="w-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-6 rounded-xl flex items-center justify-between"
                onClick={() => {
                  const el = document.getElementById('faq-4');
                  if (el) {
                    const isExpanded = el.classList.contains('max-h-96');
                    el.classList.toggle('max-h-96');
                    el.classList.toggle('max-h-0');
                    el.classList.toggle('opacity-100');
                    el.classList.toggle('opacity-0');
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4500]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#FF4500]" />
                  </div>
                  <span className="font-semibold text-left">Are there any side effects?</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
              <div 
                id="faq-4"
                className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-6 pt-2">
                  <p className="text-gray-600">Laser therapy is non-invasive and safe, with minimal risk of side effects. Our team will address any concerns during your consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Refined with pale orange gradient */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F0] via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Healios Laser Therapy offers a comprehensive approach to pain management and accelerated healing. Our treatments are designed to reduce pain, decrease inflammation, and stimulate cellular repair—all without invasive procedures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards with white background and subtle shadow */}
            {[
              {
                icon: <UserCheck className="w-7 h-7 text-[#FF4500]" />,
                title: "Personalized Consultations",
                description: "Every journey begins with a one-on-one consultation to assess your needs and design a tailored treatment plan.",
                image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop&q=80"
              },
              {
                icon: <Sparkles className="w-7 h-7 text-[#FF4500]" />,
                title: "Targeted Laser Treatments",
                description: "Using the latest laser technology, we deliver focused energy to damaged tissues, promoting natural healing.",
                image: "https://images.unsplash.com/photo-1666214280583-c1b5d3f9520a?w=800&auto=format&fit=crop&q=80"
              },
              {
                icon: <Heart className="w-7 h-7 text-[#FF4500]" />,
                title: "Post-Treatment Support",
                description: "Our team provides continuous support to monitor your progress and adjust treatments as needed.",
                image: "https://images.unsplash.com/photo-1666214280520-aac1e0e6c61d?w=800&auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
                  <div className="bg-[#FFF5F0] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Improved timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">How Our Laser Therapy Works</h2>
          
          <div className="relative">
            {/* Timeline Line - Moved to the side */}
            <div className="absolute left-[calc(50%-0.5px)] h-full w-[1px] bg-gradient-to-b from-transparent via-[#FF4500]/20 to-transparent" />
            
            {/* Steps with improved spacing */}
            <div className="space-y-32">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-white" />,
                  title: "Consultation",
                  description: "Discuss your health concerns with our expert team to craft a personalized treatment plan."
                },
                {
                  icon: <Activity className="w-8 h-8 text-white" />,
                  title: "Customized Treatment",
                  description: "Experience a targeted laser session designed to reduce pain and stimulate healing."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-white" />,
                  title: "Recovery & Follow-Up",
                  description: "Notice rapid improvement and receive ongoing support to ensure lasting results."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-white p-1 rounded-full z-10">
                      <div className="bg-[#FF4500] rounded-full p-4">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-center max-w-lg mx-auto bg-white relative z-10">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Improved contrast */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">Why Choose Healios Laser Therapy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-[#FF4500]" />,
                title: "Non-Invasive & Safe",
                description: "Our laser therapy avoids surgery and harsh medications, providing a gentle yet effective treatment."
              },
              {
                icon: <Zap className="w-12 h-12 text-[#FF4500]" />,
                title: "Rapid Recovery",
                description: "Experience faster healing with minimal downtime, so you can quickly return to your daily routine."
              },
              {
                icon: <Users className="w-12 h-12 text-[#FF4500]" />,
                title: "Tailored Treatment",
                description: "Every session is customized to your unique needs for optimal results."
              },
              {
                icon: <Medal className="w-12 h-12 text-[#FF4500]" />,
                title: "Proven Success",
                description: "Our treatments are backed by real patient testimonials and measurable success stories."
              }
            ].map((benefit, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)]">
                  {benefit.icon}
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                  <div className="mt-6 flex items-center text-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Refined color usage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Transparent & Affordable Pricing</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-20">Choose the perfect treatment duration for your needs with our straightforward pricing options.</p>

          {/* Main Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                duration: "15",
                session: "12-min session",
                price: "69",
                description: "Small Focused Area (such as a finger or toe)."
              },
              {
                duration: "30",
                session: "25-min session",
                price: "99",
                description: "One Body Part or Area.",
                popular: true,
                extra: "NEW CLIENTS: Includes FREE 15-min consultation"
              },
              {
                duration: "45",
                session: "40-min session",
                price: "149",
                description: "Multiple Areas or One Large Area (such as Sciatica)."
              },
              {
                duration: "60",
                session: "55-min session",
                price: "199",
                description: "Two or More Body Parts or Areas."
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-8 transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] relative">
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-[#FF4500]/10 text-[#FF4500] text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="flex items-center justify-between mb-6">
                  <Timer className="w-8 h-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-500">{plan.session}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.duration} Minute Appointment</h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">${plan.price}</div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                {plan.extra && (
                  <div className="bg-[#FFF5F0] text-[#FF4500] text-sm p-3 rounded-lg mb-8">
                    {plan.extra}
                  </div>
                )}
                <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium">
                  Book Now
                </button>
              </div>
            ))}
          </div>

          {/* Package Deals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "Package of 5 Sessions",
                discount: "SAVE BIG – 10% OFF"
              },
              {
                title: "Package of 10 Sessions",
                discount: "SAVE BIGGER – 15% OFF"
              }
            ].map((package_, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4 mb-6">
                  <Star className="w-8 h-8 text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold">{package_.title}</h3>
                    <p className="text-[#FF4500] font-semibold">{package_.discount}</p>
                  </div>
                </div>
                <button className="w-full bg-[#FFF5F0] text-[#FF4500] py-3 rounded-xl hover:bg-[#FF4500] hover:text-white transition-colors font-medium">
                  Select Package
                </button>
              </div>
            ))}
          </div>

          {/* Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Users className="w-6 h-6 text-gray-400" />,
                title: "Referral Program",
                highlight: "GIVE $30 GET $30",
                description: "Refer a new client for $30 OFF their first appointment & receive a $30 credit toward your next session."
              },
              {
                icon: <Star className="w-6 h-6 text-gray-400" />,
                title: "Review Program",
                highlight: "REVIEW & SAVE",
                description: "Write us a Google Review for a location you have visited and receive a $20 credit toward your next session."
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4 mb-4">
                  {program.icon}
                  <h3 className="text-lg font-bold">{program.title}</h3>
                </div>
                <p className="text-[#FF4500] font-semibold mb-2">{program.highlight}</p>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            ))}
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Cancellation Policy:</span> Please cancel/reschedule all appointments 24+ hours in advance to avoid the $35 late cancel/no-show charge.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-xl font-bold mb-6">Healios</h3>
              <p className="mb-6">Advanced laser therapy solutions for pain relief and recovery.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[#FF4500]" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF4500] flex-shrink-0 mt-1" />
                  <span>123 Healing Street, Medical District, City, State 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF4500]" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF4500]" />
                  <a href="mailto:info@healios.com" className="hover:text-white transition-colors">
                    info@healios.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FF4500]" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Trust Signals */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Why Choose Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                  <Award className="w-8 h-8 text-[#FF4500] mb-2" />
                  <span className="text-sm">Certified</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                  <ShieldCheck className="w-8 h-8 text-[#FF4500] mb-2" />
                  <span className="text-sm">Trusted</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                  <Trophy className="w-8 h-8 text-[#FF4500] mb-2" />
                  <span className="text-sm">Proven</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                  <Heart className="w-8 h-8 text-[#FF4500] mb-2" />
                  <span className="text-sm">Caring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Healios. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="bg-[#FF4500] text-white p-4 rounded-full shadow-lg hover:bg-[#FF4500]/90 transition-all duration-300 flex items-center justify-center group"
          onClick={() => {
            // Add chat widget toggle functionality here
            alert('Chat widget will be implemented here');
          }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
            Chat with us
          </span>
        </button>
      </div>
    </main>
  );
}

export default App;