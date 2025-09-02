'use client';
import React from 'react'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaAngleRight } from "react-icons/fa6";
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
import Link from 'next/link';
const Header = () => {
      const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div>
        <motion.header
        className="bg-white shadow-sm border-b"
        variants={fadeIn}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#E66003" }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Reloq8U</h1>
                <p className="text-sm font-medium" style={{ color: "#E66003" }}>Moving</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" style={{ color: "#E66003" }} />
                <span className="font-medium">(+416) 301-2222</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" style={{ color: "#E66003" }} />
                <span>relo8u8u@gmail.com</span>
              </div>
            </div>

            <button
              className="md:hidden text-orange-500"
              onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
          <nav className="hidden md:flex p-4  justify-center font-bold items-center space-x-8" style={{ backgroundColor: "#F26B22" }}>
            <Link href="/" className="text-white font-medium">Home</Link>
            <div className="relative group">
              <a href="#services" className="text-white font-medium">Services ˅</a>
              <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-lg mt-0">
                <ul className="text-gray-700 w-[13vw] text-sm">
                  <li className="relative group/residential">
                    <Link href="/residential" className="block px-4 py-2 flex gap-2 items-center hover:bg-gray-100">
                      <span>Residential Moving</span>
                      <span className="inline"><FaAngleRight /></span>
                    </Link>
                    <div className="absolute hidden group-hover/residential:block bg-white shadow-lg rounded-lg left-[13vw] top-0">
                      <ul className="text-gray-700 w-[12vw] text-sm">
                        <li><Link href="/furniture" className="block px-4 py-2 hover:bg-gray-100">Furniture Moving</Link></li>
                        <li><Link href="/seniormoving" className="block px-4 py-2 hover:bg-gray-100">Senior Moving</ Link></li>
                        <li><Link href="/lastminute" className="block px-4 py-2 hover:bg-gray-100">Last Minute Moving</Link></li>
                        <li><Link href="/packing" className="block px-4 py-2 hover:bg-gray-100">Packing Services</Link></li>
                        <li><Link href="/condominium" className="block px-4 py-2 hover:bg-gray-100">Condominium Moving </Link></li>
                      </ul>
                    </div>
                  </li>
                  <li><Link href="/commercial" className="block px-4 py-2 hover:bg-gray-100">Commercial Moving </Link></li>
                  <li><Link href="/longdistance" className="block px-4 py-2 hover:bg-gray-100">Long-Distance Moving </Link></li>
                  <li><Link href="/internationalmoving" className="block px-4 py-2 hover:bg-gray-100">International Moving </Link></li>
                   <li><Link href="/singleitemmoving" className="block px-4 py-2 hover:bg-gray-100">Single-Item Moving  </Link></li>
                    <li><Link href="/junkremoval" className="block px-4 py-2 hover:bg-gray-100">Junk Removal  </Link></li>
                     <li><Link href="/priorityclub" className="block px-4 py-2 hover:bg-gray-100">Priority Club </Link></li>
                </ul>
              </div>
            </div>
            <a href="#locations" className="text-white font-medium">Locations (A-M)</a>
            <a href="#locations2" className="text-white font-medium">Locations (N-Z)</a>
            <a href="#about" className="text-white font-medium">About</a>
            <a href="#blog" className="text-white font-medium">Blog</a>
            <a href="#contact" className="text-white font-medium">Contact</a>
          </nav>

          <div id="mobile-menu" className="hidden md:hidden text-white" style={{ backgroundColor: "#F26B22" }}>
            <ul className="text-sm">
              <li><a href="#home" className="block px-4 py-2">Home</a></li>
              <li className="relative">
                <button
                  className="block px-4 py-2 w-full text-left"
                  onClick={(e) => e.currentTarget.nextElementSibling?.classList.toggle('hidden')}
                >
                  Services
                </button>
                <ul className="hidden bg-white text-gray-700 text-sm">
                  <li><a href="#residential" className="block px-4 py-2 hover:bg-gray-100">Residential Moving</a></li>
                  <li><a href="#commercial" className="block px-4 py-2 hover:bg-gray-100">Apartment & Condo Moving</a></li>
                  <li><a href="#long-distance" className="block px-4 py-2 hover:bg-gray-100">Inter-Province Relocation</a></li>
                  <li><a href="#packing" className="block px-4 py-2 hover:bg-gray-100">Packing Services</a></li>
                </ul>
              </li>
              <li><a href="#locations" className="block px-4 py-2">Locations (A-M)</a></li>
              <li><a href="#locations2" className="block px-4 py-2">Locations (N-Z)</a></li>
              <li><a href="#about" className="block px-4 py-2">About</a></li>
              <li><a href="#blog" className="block px-4 py-2">Blog</a></li>
              <li><a href="#contact" className="block px-4 py-2">Contact</a></li>
            </ul>
          </div>
      </motion.header>

    </div>
  )
}

export default Header