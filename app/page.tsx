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

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emily Turner",
      location: "Oakville, ON",
      rating: 5,
      text: "Kratos Moving Company provided outstanding professional service during our move to Oakville. David and his crew were friendly, efficient, and incredibly careful with our belongings. They handled everything with care, making our move stress-free and seamless. The entire team was punctual and respectful while in our home. I highly recommend Kratos Moving Company for anyone in need of a reliable and efficient moving service."
    },
    {
      name: "Robert Liu",
      location: "Vaughan, ON", 
      rating: 5,
      text: "Excellent choice within budgets. From the initial consultation to the final delivery, everything was handled professionally. The crew was punctual, efficient, and extremely careful with all our items. They provided clear communication at every step, and worked tirelessly to ensure everything was done right. I am thoroughly impressed with their service and would highly recommend Kratos Moving Company to anyone looking for a reliable moving service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Reloq8U</h1>
                <p className="text-sm text-orange-500 font-medium">Moving</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="font-medium">(+416) 301-2222</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-orange-500" />
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
          <nav className="hidden md:flex p-4 justify-center font-bold bg-orange-500 items-center space-x-8">
            <a href="#home" className="text-white font-medium">Home</a>
            <div className="relative group">
              <a href="#services" className="text-white font-medium">Services ˅</a>
              <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-lg mt-2">
                <ul className="text-gray-700 w-[12vw] text-sm">
            



                  <li><a href="#residential" className="block px-4 py-2 hover:bg-gray-100">Residential Moving</a></li>
                  <li><a href="#commercial" className="block px-4 py-2 hover:bg-gray-100">
Apartment & Condo Moving</a></li>
                  <li><a href="#long-distance" className="block px-4 py-2 hover:bg-gray-100">
Inter-Province Relocation</a></li>
                  <li><a href="#packing" className="block px-4 py-2 hover:bg-gray-100">
Packing Services</a></li>
                </ul>
              </div>
            </div>
            <a href="#locations" className="text-white font-medium">Locations (A-M)</a>
            <a href="#locations2" className="text-white font-medium">Locations (N-Z)</a>
            <a href="#about" className="text-white font-medium">About</a>
            <a href="#blog" className="text-white font-medium">Blog</a>
            <a href="#contact" className="text-white font-medium">Contact</a>
          </nav>

          <div id="mobile-menu" className="hidden md:hidden bg-orange-500 text-white">
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
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-gradient-to-r from-gray-900/70 to-gray-800/70">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60" />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="mx-auto text-white   ">
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
              <h2 className="text-6xl font-semibold mb-2">
                
               Relocation Made Easy with Relo8U  <span className="text-orange-500">Your Moving Partner.</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
          We specialize in making relocations smooth and stress-free
              </p>
              <Button size="lg" className="bg-orange-500 text-center mt-10 mx-auto hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
              Get a Free Quote
            </Button>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-32 ">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <Badge className="bg-orange-500 text-white mb-4 text-sm px-3 py-1">
                  YOUR 5-STAR MOVING COMPANY!
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Redefining Trust in Moving and Storage Services
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In an industry often clouded by uncertainty, Kratos Moving Company stands 
                  as a beacon of trust and reliability. We're not just movers; we're your 
                  partners in seamless transitions. Whether you're a local business seeking a 
                  dependable moving solution, a family embarking on a new adventure, or an 
                  individual planning a fresh start—our passion, let our passion and 
                  purpose. Our expert team brings unmatched professionalism and cost to 
                  every job.
                </p>
                
                <p>
                  From residential moves and commercial transitions to secure storage 
                  solutions and warehousing, we tailor our services to meet your unique 
                  needs. Our passion lies in making your move stress-free, handling every 
                  detail with precision, and creating your belongings as if they were our own.
                </p>
                
                <p>
                  Backed by the renowned Kratos Group of Companies, our commitment to 
                  excellence, transparency, and reliability reflects the strength and 
                  resilience of our brand. Every job with Kratos Moving, you're not just hiring 
                  movers—you're choosing peace of mind; rest up prime beat easy and worry-
                  free moving can be.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-2" />
                  Moving Internationally?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  International or moving from outside of Kratos Moving Company is best to make it happen! Moving Internationally can feel overwhelming, 
                  but with our expertise, it doesn't have to be. From handling logistics to ensuring your belongings are safely transported across borders, we take 
                  the stress out of global relocations.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Whether it's packing, paperwork, or customs clearance, our team has you covered every step of the way. Trust Kratos Moving to make your 
                  international move seamless and secure. Your new adventure starts here!
                </p>
              </div>
            </div>
            
            <div>
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-orange-500 text-white">
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
                          <SelectItem value="residential">Residential Moving</SelectItem>
                          <SelectItem value="commercial">Commercial Moving</SelectItem>
                          <SelectItem value="long-distance">Long Distance Moving</SelectItem>
                          <SelectItem value="international">International Moving</SelectItem>
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
                    
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold">
                      Get Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Process Section */}
      <section className="py-20 md:px-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional mover on phone"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Moving Process:</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">How Do We Work?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Booking and Setting the Schedule</h4>
                    <p className="text-gray-700">
                      Finalize your booking by confirming the moving date and time with us.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Packing and Ready-Made Preparations</h4>
                    <p className="text-gray-700">
                      Get to pack on your own or utilize our expert packing services for a professional touch.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Load-Up and Transit</h4>
                    <p className="text-gray-700">
                      Let our professional secure loading of your possessions into our vehicles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 p-[7px] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Arrival and Unpacking Assistance</h4>
                    <p className="text-gray-700">
                      We assist with unloading, unpacking, and arranging your items, getting your transition to your new space.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                Get More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5025671/pexels-photo-5025671.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        />
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900">Hear It From Our Customers!</h2>
            </div>
            <Badge className="bg-orange-500 text-white">Our Satisfied Clients</Badge>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-right">
                      <p className="font-semibold text-orange-500">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:px-32  bg-white">
        <div className="container mx-auto px-4">
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
                Our Mission: <span className="text-orange-500">Stress-Free Moving and Storage</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 text-center leading-relaxed">
                <p> 
                  At Kratos Moving Company, our promise to make your transition seamless and stress-free, providing top-quality services at competitive rates. Whether you're planning a local move or an organized moving experience, whether local or international, our dedicated team of experts ensures efficient and professional service, making your moving experience as smooth as the best prepared decision.
                </p>
                
                <p>
                  We handle all aspects of your move with meticulous care and attention to detail, including packing, secure storage, and single item moves. Our mission is to exceed your expectations by taking the stress out of the entire process. Our responsibility is to make you feel comfortable and well-informed throughout the moving process. Let us take the stress out of your move, allowing you to focus on the excitement of your new beginning!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
             <span className="text-orange-500">Why Choose Us ?</span>
          </h2>
          
          <div className="mt-16 grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reloq8U</h3>
              <p className="text-blue-500 font-semibold">PAINTING</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reloq8U</h3>
              <p className="text-green-500 font-semibold">CLEANING</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reloq8U</h3>
              <p className="text-orange-500 font-semibold">CONTRACTING</p>
            </div>
          </div>
        </div>
      </section>

      {/* Realtor Section */}
      <section className="py-20 md:px-32 text-center bg-white">
        <div className="container mx-auto px-4">
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
                Are you a <span className="text-orange-500">Realtor?</span>
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Connect with us today!</h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Realtors looking for a reliable, cost-effective moving company should consider partnering with Kratos Moving Company. Not only will you receive cash rewards for each successful move, but you'll also benefit from greater reach through our customer network.
                </p>
                
                <p>
                  Our dedicated partnership program is designed with <span className="text-blue-500 font-semibold">realtors in mind</span> — offering exclusive discounts for your clients, priority booking, and streamlined communication. When you recommend our service that reflects well on your brand. By partnering with Kratos Moving, you're not just recommending a mover — you're extending your client care beyond the closing table. Let us handle the heavy lifting while you continue to build trust and long-term relationships with every client you serve.
                </p>
              </div>
              
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
                Learn More!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <p className="text-gray-700 mb-2">
              AM – 8 PM, 7 Days a Week
              We are available  from 8 AM – 8 PM, 7 Days a Week for additional questions, you can call us
            </p>
            <p className="text-gray-700">
              at <span className="font-bold text-orange-500">(647) 295-6444</span> 
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#ff9902]   md:px-32 text-white py-16">
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
                <li><a href="#" className="hover:text-orange-200 ">Home</a></li>
                <li><a href="#" className="hover:text-orange-200">About Us</a></li>
                <li><a href="#" className="hover:text-orange-200">Testimonials</a></li>
                <li><a href="#" className="hover:text-orange-200">Moving Tips</a></li>
                <li><a href="#" className="hover:text-orange-200">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-200">Realtor Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-200">Residential Moving</a></li>
                <li><a href="#" className="hover:text-orange-200">Furniture Moving</a></li>
                <li><a href="#" className="hover:text-orange-200">Last Minute Moving</a></li>
                <li><a href="#" className="hover:text-orange-200">Packing Services</a></li>
                <li><a href="#" className="hover:text-orange-200">Condominium Moving</a></li>
                <li><a href="#" className="hover:text-orange-200">Commercial Moving</a></li>
                <li><a href="#" className="hover:text-orange-200">Long Distance Moving</a></li>
                <li><a href="#" className="hover:text-orange-200">Single Item</a></li>
                <li><a href="#" className="hover:text-orange-200">Junk Removal</a></li>
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
                  <p>+1 (416) 301-2222</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <p>relo8u8u@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
          <div className="border-t text-black/90 border-white/20  p-5 text-center text-lg">
            <p>Copyright © 2025 Reloq8U Company | <a href="#" className="underline">Privacy Policy</a></p>
            {/* <p className="mt-2">Made By <a href="#" className="underline">Reloq Group - Get a Quote for Web Design Development Services - across the Streets to Us</a></p> */}
          </div>
    </div>
  );
}