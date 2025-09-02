'use client';
import React from 'react'

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
const Form = () => {
  return (
    <div>
       <Card className="shadow-2xl border-0">
                      <CardHeader style={{ backgroundColor: "#F26B22", color: "white" }}>
                        <CardTitle className="text-center text-2xl font-bold">
                          GET A FREE MOVING QUOTE
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        <form className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="first-name" className="font-medium">First Name</Label>
                              <Input id="first-name" className="mt-1" />
                            </div>
                            <div>
                              <Label htmlFor="last-name" className="font-medium">Last Name</Label>
                              <Input id="last-name" className="mt-1" />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="email" className="font-medium">Your Email</Label>
                            <Input id="email" type="email" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="phone" className="font-medium">Your Phone Number</Label>
                            <Input id="phone" type="tel" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="move-from" className="font-medium">Moving From</Label>
                            <Input id="move-from" placeholder="Current address" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="move-to" className="font-medium">Moving To</Label>
                            <Input id="move-to" placeholder="Destination address" className="mt-1" />
                          </div>
                          
                          <div>
                            <Label htmlFor="move-date" className="font-medium">Moving Date</Label>
                            <Input id="move-date" type="date" className="mt-1" />
                          </div>
                          
                          <div>
                            {/* <Label htmlFor="bedrooms" className="font-medium">Bedrooms</Label>
                            <Select>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select number of bedrooms" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="studio">Studio</SelectItem>
                                <SelectItem value="1">1 Bedroom</SelectItem>
                                <SelectItem value="2">2 Bedrooms</SelectItem>
                                <SelectItem value="3">3 Bedrooms</SelectItem>
                                <SelectItem value="4">4+ Bedrooms</SelectItem>
                              </SelectContent>
                            </Select> */}
                          </div>
                          
                          <div>
                            <Label htmlFor="service-type" className="font-medium">Type of Moving Service</Label>
                            <Select>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="commercial">Commercial Moving</SelectItem>
                                <SelectItem value="international">International Moving</SelectItem>
                                <SelectItem value="long-distance">Junk Removal</SelectItem>
                                <SelectItem value="long-distance">Long Distance Moving</SelectItem>
                                <SelectItem value="long-distance">Packing Service</SelectItem>
                                <SelectItem value="residential">Residential Moving</SelectItem>
                                <SelectItem value="long-distance">Single Item Moving</SelectItem>
                                <SelectItem value="long-distance">Storage Solutions</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="additional-info" className="font-medium">Additional Information</Label>
                            <Textarea 
                              id="additional-info" 
                              placeholder="Tell us about any special requirements..."
                              className="mt-1"
                              rows={3}
                            />
                          </div>
                          
                          {/* <div>
                            <Label className="font-medium">What Kind of Quote Would You Like?</Label>
                            <Select>
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select quote type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="phone">Phone Quote</SelectItem>
                                <SelectItem value="email">Email Quote</SelectItem>
                                <SelectItem value="in-person">In-Person Assessment</SelectItem>
                              </SelectContent>
                            </Select>
                          </div> */}
                           <StyledWrapper2>
            <button className="btn !inline-block !w-full"> Get Quote
            </button>
          </StyledWrapper2>
                          {/* <Button className="w-full text-white py-3 font-semibold hover:bg-[#E66003]" style={{ backgroundColor: "#F26B22" }}>
                            
                          </Button> */}
                        </form>
                      </CardContent>
                    </Card>

    </div>
  )
}

export default Form