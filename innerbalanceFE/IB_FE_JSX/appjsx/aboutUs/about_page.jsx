"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Shield, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe mental wellness should be accessible, supportive, and judgment-free for everyone.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your personal journey is sacred. We protect your data with the highest security standards.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Healing happens in connection. Our community provides safe spaces for shared experiences.",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Our tools and approaches are grounded in scientific research and clinical best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <h1 className="text-xl font-bold">About Inner Balance</h1>
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Empowering Your Mental Wellness Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inner Balance was created to address the real challenges people face in their mental health journey. We
            believe everyone deserves access to quality mental wellness tools and supportive community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <span>Our Story</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Inner Balance was born from the recognition that existing mental wellness apps often fall short of
              addressing real-world needs. Too many platforms prioritize profit over people, hide essential features
              behind paywalls, or fail to provide adequate crisis support.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of mental health professionals, technologists, and individuals with lived experience came
              together to create something different. We built Inner Balance to be:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Accessible to everyone, regardless of financial situation</li>
              <li>Inclusive and welcoming to all backgrounds and experiences</li>
              <li>Focused on genuine support rather than engagement metrics</li>
              <li>Transparent about our methods and committed to user privacy</li>
            </ul>
            <p className="text-gray-700">
              Every feature in Inner Balance is designed with intention, backed by research, and tested with real users
              who understand the importance of mental wellness in daily life.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Mental wellness is a journey we're all on together. Whether you're just starting or well along your path,
              Inner Balance is here to support you with tools, community, and professional guidance when you need it.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Link href="/">Start Your Journey</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
