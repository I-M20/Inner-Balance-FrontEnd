"use client";
import {useState} from "react";
import{
    Card,
    CardContent, 
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import{Input} from "@/components/ui/input";
import{TextArea} from "@/components/ui/textarea";
import{Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import{
    Tabs, 
    TabsContent, 
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import{
    ArrowLeft,
    Users,
    MessageCircle, 
    Heart,
    Share,
    Flag,
    Shield,
    Verified,
    Plus,
    Search,
    Filter,
} from "lucide-react";
import Link from "next/link";
export default function Community(){
    const[newPost, setNewPost] = useState("");
    const[selectGroup, setSelectedGroup]= useState("all");
    const supportGroups = [
        {id:"all", name: "All Posts",},
        {id:"anxiety", name: "Anxiety Support",},
        {id:"depression", name: "Depression Support",},
        {id:"meditation", name: "Meditation Group",},
        {id:"students", name: "Student Wellness",},
        {id:"workplace", name: "Workplace Mental Health",},
        {id:"parents", name: "Parental Support",},
    ];
    const handleLike = (postId) => {
        console.log(`Liked post ${postId}`);
    };
    const handleShare = (postID)=>{
        console.log('Post Shared ${postID}');
    };
    const handleReport = (postId) => {
        console.log(`Reported post ${postId}`);
    };
    return (
         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
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
                <Users className="w-6 h-6 text-blue-500" />
                <span>Community Support</span>
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
     {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Community Guidelines Banner */}
        <Card className="mb-6 bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Safe Space Guidelines</h3>
                <p className="text-sm text-green-700">
                  This is a supportive community. Be kind, respectful, and remember that everyone's journey is
                  different. Professional advice is available, but this doesn't replace therapy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Support Groups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {supportGroups.map((group) => (
                  <Button
                    key={group.id}
                    variant={selectedGroup === group.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setSelectedGroup(group.id)}
                  >
                    <span>{group.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {group.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Crisis Support */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Need Immediate Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">
                  If you're in crisis or having thoughts of self-harm, please reach out immediately.
                </p>
                <Button variant="outline" size="sm" className="w-full text-red-600 border-red-300 bg-transparent">
                  Crisis Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Community Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="feed" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="share">Share Your Story</TabsTrigger>
              </TabsList>

              {/* Community Feed Tab */}
              <TabsContent value="feed" className="space-y-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex space-x-2">
                      <div className="flex-1 relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input placeholder="Search posts..." className="pl-10" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts */}
                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={post.avatar} />
                            <AvatarFallback>
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold">{post.author}</span>
                              {post.verified && <Verified className="w-4 h-4 text-blue-500" />}
                              <Badge variant="secondary" className="text-xs">
                                {post.role}
                              </Badge>
                              <span className="text-sm text-gray-500">{post.time}</span>
                            </div>
                            <p className="text-gray-800 mb-3 leading-relaxed">{post.content}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLike(post.id)}
                                className="hover:text-red-500"
                              >
                                <Heart className="w-4 h-4 mr-1" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="hover:text-blue-500">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                {post.comments}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleShare(post.id)}
                                className="hover:text-green-500"
                              >
                                <Share className="w-4 h-4 mr-1" />
                                Share
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleReport(post.id)}
                                className="hover:text-orange-500 ml-auto"
                              >
                                <Flag className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Share Tab */}
              <TabsContent value="share" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Share Your Experience</CardTitle>
                    <CardDescription>
                      Your story might help someone else. Share your journey, ask for support, or offer encouragement.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="What's on your mind? Share your thoughts, experiences, or ask for support..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          #support
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          #progress
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          #question
                        </Badge>
                      </div>
                      <Button
                        disabled={!newPost.trim()}
                        className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Share Post
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Sharing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-blue-700 space-y-2">
                    <p>• Be respectful and supportive of others</p>
                    <p>• Avoid sharing personal identifying information</p>
                    <p>• Use content warnings for sensitive topics</p>
                    <p>• Remember this is peer support, not professional therapy</p>
                    <p>• Report any concerning content to moderators</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}