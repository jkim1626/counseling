"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bell, Calendar, AlertCircle } from "lucide-react"

interface DashboardProps {
  studentType: "high-school" | "transfer"
}

export default function Dashboard({ studentType }: DashboardProps) {
  const upcomingDeadlines = [
    { date: "Nov 15", task: "SAT Test Date", priority: "high", done: false },
    { date: "Nov 30", task: "Common App Essay Deadline", priority: "high", done: false },
    { date: "Dec 1", task: "Early Decision Deadline", priority: "high", done: false },
    { date: "Dec 15", task: "Request Letters of Recommendation", priority: "medium", done: false },
  ]

  const completionStats = {
    profile: 85,
    applications: 40,
    documents: 60,
    essays: 25,
  }

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Profile Complete</span>
                <span className="text-sm font-bold text-primary">{completionStats.profile}%</span>
              </div>
              <Progress value={completionStats.profile} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Applications Started</span>
                <span className="text-sm font-bold text-primary">{completionStats.applications}%</span>
              </div>
              <Progress value={completionStats.applications} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Documents Submitted</span>
                <span className="text-sm font-bold text-primary">{completionStats.documents}%</span>
              </div>
              <Progress value={completionStats.documents} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Essays Written</span>
                <span className="text-sm font-bold text-primary">{completionStats.essays}%</span>
              </div>
              <Progress value={completionStats.essays} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-secondary">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-secondary" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="text-xs font-bold text-secondary pt-1">{deadline.date}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{deadline.task}</p>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                        deadline.priority === "high"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {deadline.priority === "high" ? "Priority" : "Medium"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert className="border-l-4 border-l-primary bg-primary/5">
        <AlertCircle className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          Don't forget to request letters of recommendation at least 2-3 weeks before deadlines. Your teachers will
          appreciate the advance notice!
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-primary/10 to-transparent hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-base">Find Your Match</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Discover colleges that fit your profile and goals</p>
            <Button size="sm" className="w-full">
              Explore Tool
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/10 to-transparent hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-base">Essay Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Brainstorm ideas and refine your personal stories</p>
            <Button size="sm" className="w-full">
              Start Writing
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-transparent hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-base">Financial Aid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Calculate costs and explore scholarship options</p>
            <Button size="sm" className="w-full">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
