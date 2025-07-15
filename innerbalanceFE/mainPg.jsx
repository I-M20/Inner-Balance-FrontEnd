"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  Brain,
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Shield,
  Phone,
  MessageCircle,
  Zap,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState("")
  const [moodStreak, setMoodStreak] = useState(7)
  const [weeklyGoalProgress, setWeeklyGoalProgress] = useState(65)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])
  const hour = new Date().getHours()
  const greeting = hour<12 ?"Good Morning": hour<17 ? "Good Afternoon" : "Good Evening"
                {username ? username : "Guest"}

  const quickActions = [
    { icon: Heart, label: "Log Mood", href: "/mood", color: "bg-pink-500" },
    { icon: Brain, label: "Meditate", href: "/meditation", color: "bg-purple-500" },
    { icon: BookOpen, label: "Journal", href: "/journal", color: "bg-blue-500" },
    { icon: Users, label: "Community", href: "/community", color: "bg-green-500" },
  ]

  const todayInsights = [
    { title: "Mood Pattern", description: "You tend to feel more positive in the morning", icon: TrendingUp },
    { title: "Sleep Impact", description: "7+ hours of sleep improved your mood by 23%", icon: Brain },
    { title: "Social Connection", description: "Community interactions boosted your wellness score", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Inner Balance
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
                User Profile
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                Crisis Support
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        /* Welcome Section */
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                greeting 
                {/*check above to see if it works*/}
              </h2>
              <p className="text-gray-600">
                It's {currentTime} - How are you feeling today? Your mental wellness journey continues.
              </p>
            </div>

            {/* Crisis Support Banner */}
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-medium text-red-800">Need immediate support?</p>
                  <p className="text-sm text-red-600">24/7 crisis helpline and emergency resources available</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-red-600 border-red-300 bg-transparent">
                Get Help Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>Start your wellness routine with these personalized activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <Button
                      variant="outline"
                      className="h-20 flex-col space-y-2 hover:scale-105 transition-transform bg-transparent"
                    >
                      <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{action.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span>Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Weekly Goal</span>
                  <span className="text-sm text-gray-500">{weeklyGoalProgress}%</span>
                </div>
                <Progress value={weeklyGoalProgress} className="h-2" />
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Mood Streak</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {moodStreak} days
                </Badge>
              </div>

              <div className="text-center pt-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/progress">View Detailed Progress</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <span>Today's Insights</span>
            </CardTitle>
            <CardDescription>Personalized insights based on your wellness data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {todayInsights.map((insight, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <insight.icon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">{insight.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity & Community */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-500" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed 10-minute meditation</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Logged mood: Optimistic</p>
                    <p className="text-xs text-gray-500">This morning</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Wrote journal entry</p>
                    <p className="text-xs text-gray-500">Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span>Community Highlights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">SM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Sarah M.</span>
                    <Badge variant="secondary" className="text-xs">
                      Peer Support
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Just completed my first week of daily meditation! Feeling more centered."
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">DR</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Dr. Rodriguez</span>
                    <Badge variant="secondary" className="text-xs">
                      Professional
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Remember: Progress isn't always linear. Celebrate small wins!"
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/community">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join the Conversation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
