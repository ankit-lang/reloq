'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Truck, 
  Shield, 
  Star,
  CheckCircle,
  Users,
  Clock,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import TextType from '@/components/Type';
import SplitText from '@/components/Split';
import { motion } from 'framer-motion';
// import AnimatedContent, { TextAnimate } from '@/components/Culttext';
import FadeContent from '@/components/Fade';
import AnimatedContent from '@/components/Culttext';


import styled from 'styled-components';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';

const StyledWrapper = styled.div`
  .cssbuttons-io-button {
    background: #F26B22;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    // box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }`;
export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emily R.",
      location: "Calgary",
      rating: 5,
      text: "Reloq8U made our move to Calgary absolutely stress-free! The team was punctual, polite, and handled all our furniture with such care. Everything arrived on time and in perfect condition. Highly recommend them for a worry-free moving experience."
    },
    {
      name: "Robert L.",
      location: "Vancouver", 
      rating: 5,
      text: "From booking to unpacking, the entire process was seamless. The support team was always available for updates, and the movers were efficient and professional. Reloq8U turned what I thought would be a stressful day into a smooth transition."
    }, {
      name: "Anna W.",
      location: "Toronto", 
      rating: 5,
      text: "We had a fantastic experience with Reloq8U for our office relocation in Toronto. The crew worked quickly, protected all our equipment, and ensured we could set up at our new place without delay. Truly reliable service!"
    },
      {
      name: "Lisa M.",
      location: "Ottawa", 
      rating: 5,
      text: "I can’t thank Reloq8U enough for their dedication. The movers were courteous, well-prepared, and treated our belongings like their own. Moving to Ottawa felt effortless because of them. Absolutely recommend their services"
    },
    
    
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  
const StyledWrapper2 = styled.div`
  .btn {
   width: 6.5em;
   height: 2.3em;
   margin: 0.5em;
   background: #F26B22;
   color: white;
   border: none;
   border-radius: 0.625em;
   font-size: 20px;
   font-weight: bold;
   cursor: pointer;
   position: relative;
   z-index: 1;
   overflow: hidden;
  }

  button:hover {
   color: black;
  }

  button:after {
   content: "";
   background: white;
   position: absolute;
   z-index: -1;
   left: -20%;
   right: -20%;
   top: 0;
   bottom: 0;
   transform: skewX(-45deg) scale(0, 1);
   transition: all 0.5s;
  }

  button:hover:after {
   transform: skewX(-45deg) scale(1, 1);
   -webkit-transition: all 0.5s;
   transition: all 0.5s;
  }`;

  const StyledWrapper3 = styled.div`
  .card {
    width: 390px;
    height: 354px;
    border-radius: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
               -15px -15px 30px #ffffff;
  }`;
  return (
    <>
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Header */}
  <Header/>
      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative h-screen bg-gradient-to-r from-gray-900/70 to-gray-800/70"
        variants={fadeIn}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60" />
        
        <motion.div
          className="relative container mx-auto px-4 h-full flex items-center"
          variants={staggerContainer}
        >
          <motion.div className="mx-auto text-white" variants={fadeIn}>
            {/* <div className="mb-8"> */}
              {/* <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6"> */}
                {/* <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold mb-4 leading-tight">
                KRATOS MOVING INC.
              </h1> */}
              {/* <p className="text-2xl text-gray-300 mb-6 font-light tracking-wide">
                DONE AS PROMISED.
              </p> */}
            {/* </div> */}
            
            <div className="mb-8 max-w-4xl flex-col items-center justify-center ">
              <motion.h2 className="text-6xl font-bold mb-2" variants={fadeIn}>
                
                <SplitText
                  text=" Relocation Made Easy with Relo8U "
                  className="text-left md:text-center font-semibold "
                  delay={100}
                  duration={2}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                  // onLetterAnimationComplete={handleAnimationComplete}
/>
               <span style={{ color: "#F26B22" }}>Your Moving Partner.</span>
              
              </motion.h2>
              <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeIn}
            >
<TextType 
  text={[" We specialize in making relocations smooth and stress-free."]}
  typingSpeed={95}
  pauseDuration={500}
  showCursor={false}
  cursorCharacter="|"
/>
         
              </motion.p>
  </div>  
              <motion.div variants={fadeIn}>
                <StyledWrapper>
                   <a href="#quote"> 
      <button className="cssbuttons-io-button"  >
        
       Get A Quote 
        <div className="icon">
          <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
          </svg>
        </div>
      </button>
      </a>
    </StyledWrapper>
              {/* <Button
                size="lg"
                className="text-center mt-8 mx-auto text-white px-8 py-3 text-lg font-semibold"
                style={{ backgroundColor: "#F26B22" }}
              >
                Get a Free Quote
              </Button> */}
              </motion.div>
            </motion.div>
        </motion.div>
      </motion.section>

      {/* Quote Form Section */}
      <motion.section
        className="py-20 bg-gray-50"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        <motion.div className="container mx-auto px-4 md:px-32" variants={fadeIn}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
                  <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={true}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
              <div className="mb-8">
                <Badge className="text-white mb-4 text-sm px-3 py-1" style={{ backgroundColor: "#E66003" }}>
                  YOUR 5-STAR MOVING COMPANY!
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Redefining Trust in Moving and Storage Services
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
  <div>At Reloq8U, we go beyond being just a moving company—we’re your trusted partner in smooth, stress-free transitions. In a field where uncertainty is common, we stand out with reliability, transparency, and unmatched professionalism.
</div>
                  {/* <TextAnimate text=" " type="rollIn" /> */}

                 
                </p>
                
                <p>
                Whether you’re relocating your family to a new home, moving your office across town, or in need of safe and secure storage, our expert team tailors solutions to your unique needs. From residential and commercial moves to warehousing and storage, we handle every detail with precision and care.
                </p>
                
                <p>
                  Powered by innovation and guided by customer-first values, Reloq8U ensures your belongings are treated as if they were our own. With us, you don’t just hire movers—you gain peace of mind. Experience how effortless moving can truly be, with Reloq8U by your side.

                </p>
              </div>

</AnimatedContent>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2" />
                  Moving Abroad? Let Reloq8U Take You There
                </h3>
                <p className="text-gray-700 leading-relaxed">
                 Starting a new life in another country should be exciting—not stressful. At Reloq8U, we simplify international relocations so you can focus on your fresh start. From careful packing to managing logistics and safe transport across borders, our team ensures every step of your journey is seamless.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                 Customs clearance, paperwork, or handling delicate belongings—we’ve got it all covered with professionalism and care. With Reloq8U as your moving partner, you can trust that your transition overseas will be smooth, secure, and worry-free.
Your global adventure begins with us. Let Reloq8U make it effortless.

                </p>
              </div>
            </div>
            
                          <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
            <div id="quote">
             <Form/>
            </div>
            </AnimatedContent>
          </div>
        </motion.div>
      </motion.section>
            

      {/* Moving Process Section */}
      <motion.section
        className="py-20 md:px-32 bg-white"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        <motion.div className="container mx-auto px-4" variants={fadeIn}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional mover on phone"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0.1}>
  {/* Anything placed inside this container will be fade into view */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Process: </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Moving Made Simple</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" >
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Easy Booking & Schedule Confirmation </h4>
                    <p className="text-gray-700">
                     Secure your move in just a few clicks. Choose the date and time that works best for you, and we’ll lock it in.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" >
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Packing Options </h4>
                    <p className="text-gray-700">
                     Pack your way or leave it to us. Our expert packing services ensure your belongings are safe, organized, and move-ready.


                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" >
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Safe Loading & Smooth Transit </h4>
                    <p className="text-gray-700">
                  Our trained team handles your possessions with care, ensuring punctual pickup and secure transport to your new destination.
  </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 p-[7px] rounded-full flex items-center justify-center font-bold text-sm" >
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Unloading & Setup Support </h4>
                    <p className="text-gray-700">
                   Upon arrival, we don’t just drop off—we help unload, unpack, and arrange, making your transition into your new space stress-free.
 </p>
                  </div>
                </div>
              </div>
              
              {/* <Button className="mt-8 text-white px-6 py-2 hover:bg-[#E66003]" style={{ backgroundColor: "#F26B22" }}>
                Get More
              </Button> */}
            </div>
</FadeContent>
          </div>
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        <motion.div className="relative container mx-auto px-4 text-center" variants={fadeIn}>
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 mr-2" style={{ color: "#E66003" }} />
              <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say About Us</h2>
            </div>
            <Badge className="text-white" style={{ backgroundColor: "#E66003" }}>Our Satisfied Clients</Badge>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                 <StyledWrapper3>
      <div className="" />
   
                <Card key={index} className="bg-white card shadow-lg border-0 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#F26B22" }} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-right">
                      <p className="font-semibold" style={{ color: "#E66003" }}>{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </StyledWrapper3>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20 md:px-32  bg-white"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        <motion.div className="container mx-auto px-4" variants={fadeIn}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kratos team member"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Our Mission: <span style={{ color: "#E66003" }}>Moving with Care, Built on Trust</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 text-justify leading-relaxed">
                <SplitText
  text="     At Reloq8U, our mission is simple—to take the stress out of moving and storage. We believe every transition should feel seamless, whether it’s across the street or across the globe. By combining industry expertise with personalized service, we deliver moves that are efficient, secure, and worry-free.

               "
  className=" text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="lines"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  // onLetterAnimationComplete={handleAnimationComplete}
/>
               
               <SplitText
  text="       From packing and storage to delicate single-item handling, our skilled team approaches every job with meticulous care and attention to detail. With competitive pricing and uncompromised service quality, Reloq8U ensures your belongings are always in safe hands.

We don’t just move boxes—we move lives, and our goal is to give you peace of mind so you can focus on the excitement of your next chapter.  "
  className="text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="lines"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  // onLetterAnimationComplete={handleAnimationComplete}
/>
                
                <p>
          
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Logos Section */}
      <motion.section
        className="py-20 bg-gray-50"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        <motion.div className="container mx-auto px-4 text-center" variants={fadeIn}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
             <span style={{ color: "#F26B22" }}>The Reloq8U Promise - Why Choose Us ?</span>
          </h2>
          <p>With Reloq8U, you’re not just hiring movers—you’re choosing a partner who cares</p>
          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 items-center place-items-center justify-center  gap-12 max-w-4xl mx-auto">
             <StyledWrapperchoose>
      <div className="cardd   ">
        <p className="flex !mb-4 items-center !text-xl !text-white">
        Transparent pricing, no hidden fees
        </p>
       </div>
    </StyledWrapperchoose>
    <StyledWrapperchoose>
      <div className="cardd">
        <p className="flex items-center !text-xl !text-white">
     Trained professionals who treat your belongings like their own
        </p>
       </div>
    </StyledWrapperchoose>
    <StyledWrapperchoose>
      <div className="cardd">
        <p className="flex items-center !text-xl !text-white">
      Reliable service backed by punctuality and precision
        </p>
       </div>
    </StyledWrapperchoose>
    {/* <StyledWrapperchoose>
      <div className="cardd">
        <p className="flex items-center !text-xl !text-white">
       Flexible options for residential, commercial, and storage solutions
        </p>
       </div>
    </StyledWrapperchoose> */}
            {/* <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(to bottom right, #F26B22, #F26B22)" }}>
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reloq8U</h3>
              <p className="font-semibold" style={{ color: "#E66003" }}>PAINTING</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(to bottom right, #F26B22, #F26B22)" }}>
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reloq8U</h3>
              <p className="font-semibold" style={{ color: "#E66003" }}>CLEANING</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(to bottom right, #F26B22, #F26B22)" }}>
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reloq8U</h3>
              <p className="font-semibold" style={{ color: "#E66003" }}>CONTRACTING</p>
            </div> */}
          </div>
        </motion.div>
      </motion.section>

      {/* Realtor Section */}
      <motion.section
        className="py-20 md:px-32 text-center bg-white"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        <motion.div className="container mx-auto px-4" variants={fadeIn}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional realtor consultation"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Are you a <span style={{ color: "#E66003" }}>Realtor?</span>
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Connect with us today!</h3>
              
              <div className="space-y-4 text-gray-700  leading-relaxed mb-8">
                <p>
                  <SplitText
  text="Are you a realtor looking to add more value to your clients? Partner with Reloq8U to make moving day as smooth as closing day."
  className="text-justify"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="lines"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  // onLetterAnimationComplete={handleAnimationComplete}
/>
                  
                </p>
                

                <SplitText
  text="  Exclusive Benefits for Realtors: -Cash rewards for every successful referral,
-Special client discounts and priority scheduling,
-Guaranteed professional service that strengthens your reputation
."
  className=" text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="lines"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  // onLetterAnimationComplete={handleAnimationComplete}
/>
                <p>
               By teaming up with Reloq8U, you extend your care beyond the deal, helping clients settle into their new homes with ease. Together, let’s build lasting trust and stronger relationships.
                </p>
              </div>
              
                {/* <Button className="text-white px-6 py-3 hover:bg-[#E66003]" style={{ backgroundColor: "#F26B22" }}>
                  Learn More!
                </Button> */}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-12 bg-gray-100"
        variants={staggerContainer}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ...existing code... */}
        {/* <motion.div className="container mx-auto px-4 text-center" variants={fadeIn}>
          <div className="mb-8">
            <p className="text-gray-700 mb-2">
               8 AM – 8 PM, 7 Days a Week
              We are available  from 8 AM – 8 PM, 7 Days a Week for additional questions, you can call us
            </p>
            <p className="text-gray-700">
              at <span className="font-bold" style={{ color: "#E66003" }}>(647) 295-6444</span> 
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </motion.div> */}
      </motion.section>

      {/* Footer */}
       <Footer/>
    </motion.div>
    </>
  );
}
const StyledWrapperchoose = styled.div`
  .cardd {
    position: relative;
    z-index: 1;
    width: 190px;
    height: 164px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    overflow: hidden;
  }

  .cardd::before,
  .cardd::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding:10px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .cardd::before {
    left: -5px;
    margin: auto;
    width: 240px;
    height: 264px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -2;
  }

  .cardd::after {
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: scale(0.95);
    filter: blur(20px);
    z-index: -1;
  }

  .headingg {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    color:white;

  }

  .cardd p:not(.headingg) {
    font-size: 14px;
  }

  .cardd p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .cardd:hover::after {
    filter: blur(30px);
  }

  .cardd:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;
