import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Get in touch to start your interior design journey
        </p>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-400 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-start mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600">123 Design Street, Creative City, CC 12345</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone Number</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 765-4321</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Address</h4>
                  <p className="text-gray-600">info@designstudio.com</p>
                  <p className="text-gray-600">support@designstudio.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;