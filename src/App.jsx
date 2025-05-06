import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, AlertTriangle } from "lucide-react";

export default function FireSafetyPortal() {
  return (
    <div className="min-h-screen bg-gray-50" lang="en">
      {/* Meta Tags for SEO */}
      <head>
        <title>Fire Safety Portal | Stay Safe from Fire Hazards</title>
        <meta name="description" content="Learn essential fire safety tips and report hazards to protect your home and loved ones." />
        <meta name="keywords" content="fire safety, fire prevention, fire emergency, report fire hazard" />
        <meta name="author" content="Fire Safety Portal Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between items-center" role="banner">
        <h1 className="text-2xl font-bold text-red-600">Fire Safety Portal</h1>
        <nav className="space-x-4" aria-label="Main navigation">
          <a href="#tips" className="text-gray-700 hover:text-red-600">Tips</a>
          <a href="#emergency" className="text-gray-700 hover:text-red-600">Emergency</a>
          <a href="#report" className="text-gray-700 hover:text-red-600">Report</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="bg-[url('/fire-safety.jpg')] bg-cover bg-center text-white py-24 px-8 text-center"
        aria-label="Hero section with fire safety message"
      >
        <h2 className="text-4xl font-bold mb-4 drop-shadow">Stay Safe from Fire Hazards</h2>
        <p className="mb-6 text-lg drop-shadow">Learn how to protect your home and loved ones.</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-lg">Get Started</Button>
        <img src="/fire-safety.jpg" alt="Firefighter extinguishing a blaze" className="hidden" />
      </section>

      {/* Fire Safety Tips */}
      <section id="tips" className="py-12 px-8" aria-labelledby="tips-heading">
        <h3 id="tips-heading" className="text-3xl font-semibold text-center text-red-600 mb-8">Fire Safety Tips</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Install Smoke Alarms</h4>
              <p>Place smoke alarms on every level of your home and test them monthly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Create an Escape Plan</h4>
              <p>Plan and practice a fire escape route with your family.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-2">Keep Extinguishers Ready</h4>
              <p>Ensure fire extinguishers are accessible and everyone knows how to use them.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section id="emergency" className="bg-red-100 py-12 px-8" aria-labelledby="emergency-heading">
        <h3 id="emergency-heading" className="text-3xl font-semibold text-center text-red-700 mb-8">Emergency Contacts</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-2xl" role="region" aria-label="Fire Department contact">
            <PhoneCall className="text-red-600 w-8 h-8" aria-hidden="true" />
            <div>
              <p className="text-lg font-medium">Fire Department</p>
              <p className="text-xl font-bold text-red-700">101</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white shadow-md p-6 rounded-2xl" role="region" aria-label="Emergency Helpline contact">
            <PhoneCall className="text-red-600 w-8 h-8" aria-hidden="true" />
            <div>
              <p className="text-lg font-medium">Emergency Helpline</p>
              <p className="text-xl font-bold text-red-700">112</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Fire Hazard Form */}
      <section id="report" className="py-12 px-8 bg-gray-100" aria-labelledby="report-heading">
        <h3 id="report-heading" className="text-3xl font-semibold text-center text-red-600 mb-8">Report Fire Hazard</h3>
        <form className="max-w-xl mx-auto bg-white shadow-md p-8 rounded-2xl space-y-4" aria-label="Fire hazard reporting form">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Your Name</label>
            <input id="name" type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="John Doe" />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="location">Location</label>
            <input id="location" type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="123 Main St, City" />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="description">Description of Hazard</label>
            <textarea id="description" className="w-full border border-gray-300 p-2 rounded" rows="4" placeholder="Describe the fire hazard in detail..."></textarea>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-2">Submit Report</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6" role="contentinfo">
        © 2025 Fire Safety Portal. All rights reserved.
      </footer>
    </div>
  );
}
