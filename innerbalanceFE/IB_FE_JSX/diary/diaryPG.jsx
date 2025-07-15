"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BookOpen,
  Plus,
  Search,
  Calendar,
  Lightbulb,
  Heart,
  Brain,
  Sparkles,
  Lock,
  Save,
} from "lucide-react"
import Link from "next/link"

export default function Journal() {
  const [currentEntry, setCurrentEntry] = useState("")
  const [entryTitle, setEntryTitle] = useState("")
  const [selectedPrompt, setSelectedPrompt] = useState (null)
//#region doweincludethis//
  const journalPrompts = [
    {
      id: 1,
      category: "Gratitude",
      prompt: "What are three things you're grateful for today, and why?",
      icon: Heart,
      color: "bg-pink-100 text-pink-700",
    },
    {
      id: 2,
      category: "Self-Reflection",
      prompt: "What emotion did you feel most strongly today? What triggered it?",
      icon: Brain,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 3,
      category: "Growth",
      prompt: "What's one thing you learned about yourself this week?",
      icon: Sparkles,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 4,
      category: "Mindfulness",
      prompt: "Describe a moment today when you felt fully present. What did you notice?",
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 5,
      category: "Challenges",
      prompt: "What challenge are you facing right now? How might you approach it differently?",
      icon: Brain,
      color: "bg-green-100 text-green-700",
    },
    {
      id: 6,
      category: "Future Self",
      prompt: "Write a letter to yourself one year from now. What do you want to remember?",
      icon: Sparkles,
      color: "bg-indigo-100 text-indigo-700",
    },
  ]

  const recentEntries = [
    {
      id: 1,
      title: "Morning Reflections",
      date: "Today, 9:30 AM",
      preview:
        "Started the day with meditation and felt more centered than usual. The breathing exercises really helped...",
      mood: "Calm",
      wordCount: 247,
    },
    {
      id: 2,
      title: "Work Stress",
      date: "Yesterday, 6:45 PM",
      preview: "Had a challenging day at work. The deadline pressure was intense, but I managed to stay focused...",
      mood: "Stressed",
      wordCount: 189,
    },
    {
      id: 3,
      title: "Weekend Gratitude",
      date: "2 days ago",
      preview: "Spent quality time with family today. Realized how important these moments are for my mental health...",
      mood: "Grateful",
      wordCount: 312,
    },
    {
      id: 4,
      title: "Self-Discovery",
      date: "3 days ago",
      preview: "Been thinking about my patterns and triggers. Notice I get anxious when I don't have control...",
      mood: "Reflective",
      wordCount: 156,
    },
  ]
  //#endregion

  const handleSaveEntry = () => {
    if (currentEntry.trim()) {
      // Save entry logic here
      console.log("Saving entry:", { title: entryTitle, content: currentEntry, prompt: selectedPrompt })
      setCurrentEntry("")
      setEntryTitle("")
      setSelectedPrompt(null)
      alert("Journal entry saved successfully!")
    }
  }

  const usePrompt = (prompt) => {
    setSelectedPrompt(prompt)
    setCurrentEntry(prompt + "\n\n")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
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
                <BookOpen className="w-6 h-6 text-orange-500" />
                <span>Personal Journal</span>
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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Privacy Notice */}
        <Card className="mb-6 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800">Your Privacy Matters</h3>
                <p className="text-sm text-blue-700">
                  Your journal entries are private and encrypted. Only you can access them. Optional AI insights are
                  processed anonymously to protect your privacy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="write" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="write">Write Entry</TabsTrigger>
            <TabsTrigger value="entries">My Entries</TabsTrigger>
            <TabsTrigger value="prompts">Writing Prompts</TabsTrigger>
          </TabsList>

          <TabsContent value="write" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Writing Area */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>New Journal Entry</CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{currentEntry.length} characters</span>
                        <Button onClick={handleSaveEntry} disabled={!currentEntry.trim()}>
                          <Save className="w-4 h-4 mr-2" />
                          Save Entry
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input
                      placeholder="Give your entry a title (optional)"
                      value={entryTitle}
                      onChange={(e) => setEntryTitle(e.target.value)}
                    />
                    <Textarea
                      placeholder="What's on your mind? Write freely about your thoughts, feelings, experiences, or anything you'd like to reflect on..."
                      value={currentEntry}
                      onChange={(e) => setCurrentEntry(e.target.value)}
                      className="min-h-[400px] resize-none"
                    />
                    {selectedPrompt && (
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Writing Prompt:</strong> {selectedPrompt}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Prompts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Prompts</CardTitle>
                    <CardDescription>Get inspired with these writing starters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {journalPrompts.slice(0, 3).map((prompt) => (
                      <div
                        key={prompt.id}
                        className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedPrompt(prompt.prompt)}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <prompt.icon className="w-4 h-4 text-gray-600" />
                          <Badge variant="outline" className="text-xs">
                            {prompt.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700">{prompt.prompt}</p>
                      </div>
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => document.querySelector('[value="prompts"]')?.click()}
                    >
                      View All Prompts
                    </Button>
                  </CardContent>
                </Card>

                {/* Writing Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Writing Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2 text-gray-600">
                    <p>• Write without judgment - let thoughts flow naturally</p>
                    <p>• Focus on how you feel, not just what happened</p>
                    <p>• Be honest with yourself - this is your safe space</p>
                    <p>• Don't worry about grammar or structure</p>
                    <p>• Try to write regularly, even if just a few sentences</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="entries" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search your entries..." className="pl-10" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Filter by Date
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Journal Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">23</div>
                  <div className="text-sm text-gray-600">Total Entries</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">1,247</div>
                  <div className="text-sm text-gray-600">Words Written</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">Calm</div>
                  <div className="text-sm text-gray-600">Most Common Mood</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Entries */}
            <div className="space-y-4">
              {recentEntries.map((entry) => (
                <Card key={entry.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{entry.title}</h3>
                        <p className="text-sm text-gray-500">{entry.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{entry.mood}</Badge>
                        <span className="text-xs text-gray-500">{entry.wordCount} words</span>
                      </div>
                    </div>
                    <p className="text-gray-700 line-clamp-2">{entry.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="prompts" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Writing Prompts</h2>
              <p className="text-gray-600">
                Explore different aspects of your mental wellness through guided reflection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journalPrompts.map((prompt) => (
                <Card key={prompt.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-lg ${prompt.color} flex items-center justify-center`}>
                        <prompt.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary">{prompt.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 mb-4 leading-relaxed">{prompt.prompt}</p>
                    <Button
                      size="sm"
                      onClick={() => {
                        setSelectedPrompt(prompt.prompt)
                        setCurrentEntry(prompt.prompt + "\n\n")
                        document.querySelector('[value="write"]')?.click()
                      }}
                      className="w-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Use This Prompt
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
