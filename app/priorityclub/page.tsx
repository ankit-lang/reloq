"use client"
import Cards from '@/components/Card'
import AnimatedContent from '@/components/Culttext'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Header from '@/components/Header'
import React from 'react'

const faqs = [
  {
    question: "What happens on moving day with Reloq8U?",
    answer:
      "Our crew arrives on time, conducts a quick walk-through, and then carefully wraps, packs, and loads your items. At your new home, we unload, unpack, and help arrange everything, keeping you updated every step of the way."
  },
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking at least 4–6 weeks in advance, especially during peak seasons. But don’t worry—our team often accommodates last-minute requests."
  },
  {
    question: "Does Reloq8U provide packing services?",
    answer:
      "Yes! Whether you need full packing, partial help, or just high-quality packing supplies, we’ve got you covered. Our expert packing ensures your belongings are safe and secure."
  },

];

const page = () => {
  return (
    <div>
      <Header/>
       <section className=" text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side - Content */}
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

        <div className="flex flex-col md:mt-20 text-justify text-black justify-center">
          <h2 className="text-3xl  md:text-4xl font-bold">
            <span className=" ">Reloq8U Priority Club       </span>
          </h2>
            <span className="text-orange-500">Exclusive Benefits for Frequent Movers</span>

          <p className="mt-6 text-gray-800 leading-relaxed">
          For those who move often, Reloq8U offers the Priority Club—a membership program designed to make every move smoother, faster, and more affordable.

          </p>

          <p className="mt-4 text-gray-800 leading-relaxed">
            As a member, you’ll enjoy:
      <ul >
            <li  >-Priority booking, even during peak seasons</li>
            <li>
-Exclusive discounts on moving and storage</li>
            <li>
-Faster, streamlined scheduling for added convenience</li>
      </ul>


          </p>
          <p className=' mt-10 text-gray-800 leading-relaxed'>
            The Reloq8U Priority Club takes the stress out of frequent relocations while saving you time and money. Join today and experience moving with unmatched convenience.
          </p>
        </div>
</AnimatedContent>

        {/* Right Side - Form */}
         <div className="">
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

          <Form/>
</AnimatedContent>
         </div>
      </div>
    </section>
    <div className="text-3xl font-bold text-center my-12">
      Why Choose Reloq8U for Residential Moves?

    </div>
    <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <Cards head="Extensive Residential Experience
" sub="Our team has handled thousands of home moves across Canada, giving us the expertise to anticipate challenges and solve them before they arise" />
      <Cards head="Personalized Moving Plans
" sub="Every move is unique. That’s why we create tailored plans based on your needs, timelines, and budget—so you only pay for what you need" />
      <Cards head={"Full-Service Solutions"} sub={"From professional packing and unpacking to furniture disassembly, secure transport, and setup in your new home—we manage it all."} />
      <Cards head={" High-Quality Packing & Protection"} sub={"We use premium packing materials and proven techniques to ensure your items are fully protected throughout the journey."} />
      <Cards head={"Reliable & Transparent Communication"} sub={"From professional packing and unpacking to furniture disassembly, secure transport, and setup in your new home—we manage it alWith punctual crews and real-time updates, you’ll always know what’s happening on moving day. No surprises, no stress."} />
    </div>
    <div className="md:mt-5 mt-2"></div>
    <FAQ  faqs={faqs} />
    <div className="">
      <Footer/>
    </div>
    </div>
  )
}

export default page