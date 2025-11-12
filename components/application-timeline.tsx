"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Calendar, CheckCircle2, Circle, BarChart3, List } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface TimelineItem {
  id: string
  month: string
  task: string
  deadline: string
  description: string
  subtasks: string[]
  status: "completed" | "in-progress" | "pending"
  category: "research" | "essays" | "documents" | "submit" | "financial"
}

interface ApplicationTimelineProps {
  studentType: "high-school" | "transfer"
}

export default function ApplicationTimeline({ studentType }: ApplicationTimelineProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [completedSubtasks, setCompletedSubtasks] = useState<{ [key: string]: string[] }>({})
  const [viewType, setViewType] = useState<"timeline" | "checklist">("timeline")

  const highSchoolTimeline: TimelineItem[] = [
    {
      id: "sat-prep",
      month: "September",
      task: "Start SAT/ACT Prep",
      deadline: "Sep 30",
      description: "Begin standardized test preparation",
      subtasks: ["Register for test date", "Get practice materials", "Consider tutoring"],
      status: "completed",
      category: "research",
    },
    {
      id: "research",
      month: "September-October",
      task: "Research Colleges",
      deadline: "Oct 31",
      description: "Create list of target, match, and reach schools",
      subtasks: ["Make target school list", "Research campus culture", "Check admission stats"],
      status: "in-progress",
      category: "research",
    },
    {
      id: "essays",
      month: "October",
      task: "Write Common App Essays",
      deadline: "Oct 31",
      description: "Draft personal statements and supplemental essays",
      subtasks: ["Brainstorm essay topics", "Write first draft", "Get feedback", "Final revisions"],
      status: "in-progress",
      category: "essays",
    },
    {
      id: "rec-letters",
      month: "October",
      task: "Request Letters of Recommendation",
      deadline: "Oct 15",
      description: "Ask teachers and counselors for recommendation letters",
      subtasks: ["Choose 2-3 teachers", "Write request email", "Provide deadline reminders"],
      status: "pending",
      category: "documents",
    },
    {
      id: "early-decision",
      month: "November",
      task: "Submit Early Decision Applications",
      deadline: "Nov 1",
      description: "Apply early decision if binding commitment desired",
      subtasks: ["Create college accounts", "Fill out applications", "Submit before deadline"],
      status: "pending",
      category: "submit",
    },
    {
      id: "regular-apps",
      month: "December-January",
      task: "Submit Regular Decision Applications",
      deadline: "Jan 1",
      description: "Submit applications to most colleges",
      subtasks: ["Complete all applications", "Double-check essays", "Submit all by Jan 1"],
      status: "pending",
      category: "submit",
    },
    {
      id: "fafsa",
      month: "October-December",
      task: "Complete FAFSA & CSS Profile",
      deadline: "Dec 15",
      description: "Fill out Free Application for Federal Student Aid",
      subtasks: ["Gather tax documents", "Create FSA ID", "Submit FAFSA", "Submit CSS Profile if needed"],
      status: "pending",
      category: "financial",
    },
    {
      id: "decisions",
      month: "March-April",
      task: "Review Acceptance Decisions",
      deadline: "May 1",
      description: "Evaluate acceptance letters and make final decision",
      subtasks: ["Compare financial packages", "Revisit campuses", "Make final decision"],
      status: "pending",
      category: "research",
    },
  ]

  const transferTimeline: TimelineItem[] = [
    {
      id: "transcript",
      month: "June-July",
      task: "Gather Academic Records",
      deadline: "Jul 15",
      description: "Collect official transcripts and course descriptions",
      subtasks: ["Request official transcripts", "Get course descriptions", "Verify GPA"],
      status: "completed",
      category: "documents",
    },
    {
      id: "transfer-research",
      month: "June-August",
      task: "Research Transfer-Friendly Schools",
      deadline: "Aug 31",
      description: "Find schools with strong transfer acceptance rates",
      subtasks: ["Identify transfer requirements", "Check credit transfer policies", "Compare deadlines"],
      status: "in-progress",
      category: "research",
    },
    {
      id: "transfer-essays",
      month: "August",
      task: "Write Transfer Essays",
      deadline: "Aug 31",
      description: "Address why you're transferring and goals",
      subtasks: ["Explain transfer motivation", "Highlight achievements", "Get feedback"],
      status: "in-progress",
      category: "essays",
    },
    {
      id: "transfer-rec",
      month: "August",
      task: "Request Professor Recommendations",
      deadline: "Sep 1",
      description: "Get letters from college professors",
      subtasks: ["Select professors", "Send requests", "Confirm deadline"],
      status: "pending",
      category: "documents",
    },
    {
      id: "transfer-apps",
      month: "September",
      task: "Submit Transfer Applications",
      deadline: "Nov 1",
      description: "Apply to transfer schools with early fall deadline",
      subtasks: ["Complete applications", "Submit transcripts", "Submit before deadline"],
      status: "pending",
      category: "submit",
    },
    {
      id: "spring-apps",
      month: "September-October",
      task: "Submit Spring Transfer Applications",
      deadline: "Dec 1",
      description: "Apply to schools accepting spring transfers",
      subtasks: ["Identify spring options", "Complete applications", "Submit by Dec 1"],
      status: "pending",
      category: "submit",
    },
    {
      id: "transfer-eval",
      month: "February-March",
      task: "Evaluate Transfer Offers",
      deadline: "May 1",
      description: "Review transfer credits and aid packages",
      subtasks: ["Check credit equivalencies", "Compare aid offers", "Plan enrollment"],
      status: "pending",
      category: "financial",
    },
  ]

  const timelineItems = studentType === "high-school" ? highSchoolTimeline : transferTimeline

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  const toggleSubtask = (taskId: string, subtask: string) => {
    setCompletedSubtasks((prev) => ({
      ...prev,
      [taskId]: prev[taskId]?.includes(subtask)
        ? prev[taskId].filter((s) => s !== subtask)
        : [...(prev[taskId] || []), subtask],
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "in-progress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
      case "in-progress":
        return <Circle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      default:
        return <Circle className="w-5 h-5 text-gray-400" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "research":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
      case "essays":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
      case "documents":
        return "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"
      case "submit":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
      case "financial":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const completionPercentage = Math.round((completedTasks.length / timelineItems.length) * 100)

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Application Timeline & Checklist
          </h2>
          <p className="text-muted-foreground">
            Track key milestones and deadlines for your{" "}
            {studentType === "high-school" ? "college application" : "transfer"} journey
          </p>
        </div>

        {/* Progress Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">Overall Progress</span>
              <span className="text-lg font-bold text-primary">{completionPercentage}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              {completedTasks.length} of {timelineItems.length} tasks completed
            </p>
          </CardContent>
        </Card>

        {/* View Toggle */}
        <div className="flex gap-2">
          <Button
            variant={viewType === "timeline" ? "default" : "outline"}
            onClick={() => setViewType("timeline")}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Timeline View
          </Button>
          <Button
            variant={viewType === "checklist" ? "default" : "outline"}
            onClick={() => setViewType("checklist")}
            className="gap-2"
          >
            <List className="w-4 h-4" />
            Checklist View
          </Button>
        </div>
      </div>

      {/* Timeline/Checklist Content */}
      {viewType === "timeline" ? (
        // Timeline View
        <div className="space-y-4">
          {timelineItems.map((item, index) => (
            <Card key={item.id} className="relative">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="flex flex-col items-center">
                    {getStatusIcon(item.status)}
                    {index < timelineItems.length - 1 && <div className="w-1 h-32 bg-border mt-2"></div>}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="font-semibold text-base">{item.task}</h4>
                        <p className="text-sm text-muted-foreground">{item.month}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </Badge>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status === "completed"
                            ? "Completed"
                            : item.status === "in-progress"
                              ? "In Progress"
                              : "Pending"}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                    {/* Subtasks */}
                    <div className="mb-4 p-3 bg-muted/50 rounded-md">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Subtasks</p>
                      <div className="space-y-2">
                        {item.subtasks.map((subtask) => (
                          <div key={subtask} className="flex items-center gap-2">
                            <Checkbox
                              id={`${item.id}-${subtask}`}
                              checked={(completedSubtasks[item.id] || []).includes(subtask)}
                              onCheckedChange={() => toggleSubtask(item.id, subtask)}
                            />
                            <label
                              htmlFor={`${item.id}-${subtask}`}
                              className="text-sm cursor-pointer text-muted-foreground"
                            >
                              {subtask}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Calendar className="w-4 h-4" />
                        Deadline: {item.deadline}
                      </div>
                    </div>
                  </div>

                  {/* Main Task Checkbox */}
                  <Checkbox
                    checked={completedTasks.includes(item.id)}
                    onCheckedChange={() => toggleTask(item.id)}
                    className="mt-2"
                    aria-label={`Mark ${item.task} as complete`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // Checklist View
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              All Tasks Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Array.from(new Set(timelineItems.map((item) => item.category))).map((category) => {
                const categoryTasks = timelineItems.filter((item) => item.category === category)
                const categoryCompleted = categoryTasks.filter((item) => completedTasks.includes(item.id)).length
                const categoryPercentage = Math.round((categoryCompleted / categoryTasks.length) * 100)

                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(category)}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {categoryCompleted}/{categoryTasks.length} completed
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{categoryPercentage}%</span>
                    </div>
                    <Progress value={categoryPercentage} className="h-1.5 mb-3" />
                    <div className="space-y-2 ml-4">
                      {categoryTasks.map((item) => (
                        <div key={item.id} className="flex items-start gap-3">
                          <Checkbox
                            id={`checklist-${item.id}`}
                            checked={completedTasks.includes(item.id)}
                            onCheckedChange={() => toggleTask(item.id)}
                            className="mt-1"
                          />
                          <label htmlFor={`checklist-${item.id}`} className="flex-1 cursor-pointer">
                            <p
                              className={`text-sm font-medium ${completedTasks.includes(item.id) ? "line-through text-muted-foreground" : ""}`}
                            >
                              {item.task}
                            </p>
                            <p className="text-xs text-muted-foreground">Due: {item.deadline}</p>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
