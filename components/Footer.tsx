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
import Link from 'next/link';

const Footer = () => {
       const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div>
         <motion.footer
        className="md:px-32 text-white py-16"
        style={{ backgroundColor: "#F26B22" }}
        variants={fadeIn}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                {/* <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div> */}
                <div>
                  <h3 className="text-3xl font-bold">Reloq8U</h3>
                  <p className="text-sm"></p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Working Hours:</p>
                <p>8 AM – 8 PM, 7 Days a Week , every day</p>
              </div>
              <div className="flex space-x-3 mt-6">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold md:text-xl mb-6">Useful Links</h4>
              <ul className="space-y-3 text-sm">
                              <li><Link href="/" className="">Home</Link></li>
                <li><Link href="/aboutus" className="">About Us</Link></li>
                {/* <li><a href="#" className="hover:text-[#E66003]">Testimonials</a></li> */}
                <li><Link href="/contact" className="">Contact us</Link></li>
                {/* <li><a href="#" className="">FAQs</a></li> */}
                {/* <li><a href="#" className="">Realtor Program</a></li> */}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/residential" className="">Residential Moving</Link></li>
                <li><Link href="/furniture" className="">Furniture Moving</Link></li>
                <li><Link href="/lastminute" className="">Last Minute Moving</Link></li>
                <li><Link href="/packing" className="">Packing Services</Link></li>
                <li><Link href="/condominium" className="">Condominium Moving</Link></li>
                <li><Link href="/commercial" className="">Commercial Moving</Link></li>
                <li><Link href="/longdistance" className="">Long Distance Moving</Link></li>
                <li><Link href="/singleitemmoving" className="">Single Item</Link></li>
                <li><Link href="/junkremoval" className="">Junk Removal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                 
                    <p> Canada</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>+1 (548)-384-0444</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p>dev@reloq8U8U.com </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.footer>
         <div className="border-t text-black/90 border-white/20  p-5 text-center text-lg">
                  <p>Copyright © 2025 Reloq8U Company 
                        {/* <a href="#" className="underline hover:text-[#E66003]">Privacy Policy</a> */}
                        </p>
                  {/* <p className="mt-2">Made By <a href="#" className="underline">Reloq Group - Get a Quote for Web Design Development Services - across the Streets to Us</a></p> */}
                </div>
   
    </div>
  )
}

export default Footer