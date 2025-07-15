"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Heart,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Shield,
  Users,
  HelpCircle,
  Bug,
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  });

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "General Support",
      description: "Questions about features, account issues, or general help",
      response: "Within 24 hours",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: Bug,
      title: "Technical Issues",
      description: "App bugs, technical problems, or feature requests",
      response: "Within 48 hours",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: Users,
      title: "Community Issues",
      description: "Report inappropriate content or community concerns",
      response: "Within 12 hours",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      category: "general",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <header className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-4">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <h1 className="text-xl font-bold flex items-center space-x-2">
                <Mail className="w-6 h-6 text-orange-500" />
                <span>Contact Us</span>
              </h1>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Inner Balance
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">We're Here to Help</h2>
          <p className="text-gray-600">
            Have questions, feedback, or need support? We're committed to helping you on your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="general">General Support</option>
                    <option value="technical">Technical Issues</option>
                    <option value="community">Community Issues</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="privacy">Privacy & Security</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px]"
                    placeholder="Please describe your question or issue in detail..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How Can We Help?</CardTitle>
                <CardDescription>Choose the best way to reach us based on your needs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      option.urgent ? "border-red-200 bg-red-50" : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg ${option.color} flex items-center justify-center`}>
                        <option.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{option.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500">Response time: {option.response}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-600">support@innerbalance.app</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Help Center</p>
                    <p className="text-sm text-gray-600">Browse our FAQ and guides</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Community Forum</p>
                    <p className="text-sm text-gray-600">Connect with other users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Privacy Notice</h4>
                <p className="text-sm text-blue-700">
                  Your privacy is important to us. All communications are confidential and secure. We'll only use your
                  information to respond to your inquiry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
