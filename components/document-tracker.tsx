"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FileCheck, AlertCircle, Calendar, Edit2, Trash2 } from "lucide-react"

interface Document {
  id: number
  name: string
  category: "transcripts" | "test-scores" | "recommendations" | "financial" | "other"
  status: "pending" | "in-progress" | "submitted" | "sent"
  deadline: string
  notes: string
  requiredForColleges: string[]
  dateSubmitted?: string
}

export default function DocumentTracker() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      name: "Official Transcripts",
      category: "transcripts",
      status: "submitted",
      deadline: "Dec 1",
      notes: "Requested from school registrar",
      requiredForColleges: ["MIT", "Stanford", "Harvard", "Duke"],
      dateSubmitted: "Oct 15",
    },
    {
      id: 2,
      name: "SAT Scores",
      category: "test-scores",
      status: "sent",
      deadline: "Dec 1",
      notes: "Score: 1520 - Sent to 5 colleges",
      requiredForColleges: ["MIT", "Stanford", "Harvard", "Duke", "Northwestern"],
    },
    {
      id: 3,
      name: "ACT Scores",
      category: "test-scores",
      status: "pending",
      deadline: "Dec 15",
      notes: "Waiting for test results from Nov 5 test",
      requiredForColleges: ["Michigan", "Yale"],
    },
    {
      id: 4,
      name: "Teacher Recommendation - Math",
      category: "recommendations",
      status: "pending",
      deadline: "Dec 1",
      notes: "Mr. Johnson - Senior AP Calculus teacher",
      requiredForColleges: ["MIT", "Stanford", "Harvard", "Duke", "Northwestern"],
    },
    {
      id: 5,
      name: "Teacher Recommendation - English",
      category: "recommendations",
      status: "pending",
      deadline: "Dec 1",
      notes: "Ms. Williams - Junior year English Honors",
      requiredForColleges: ["MIT", "Stanford", "Harvard", "Duke", "Northwestern"],
    },
    {
      id: 6,
      name: "Counselor Recommendation",
      category: "recommendations",
      status: "in-progress",
      deadline: "Dec 1",
      notes: "Ms. Davis - College Counselor (70% complete)",
      requiredForColleges: ["All"],
    },
    {
      id: 7,
      name: "FAFSA - Free Application for Federal Student Aid",
      category: "financial",
      status: "in-progress",
      deadline: "Dec 15",
      notes: "75% complete - Waiting for tax documents",
      requiredForColleges: ["All"],
      dateSubmitted: "Oct 30",
    },
    {
      id: 8,
      name: "CSS Profile",
      category: "financial",
      status: "pending",
      deadline: "Jan 1",
      notes: "Required for select colleges only",
      requiredForColleges: ["Harvard", "Stanford", "Duke"],
    },
    {
      id: 9,
      name: "AP Score Reports",
      category: "transcripts",
      status: "pending",
      deadline: "Dec 10",
      notes: "Request official reports from College Board",
      requiredForColleges: ["MIT", "Stanford"],
    },
  ])

  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "in-progress" | "submitted" | "sent">("all")
  const [filterCategory, setFilterCategory] = useState<"all" | Document["category"]>("all")
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null)
  const [detailsOpen, setDetailsOpen] = useState(false)

  const filteredDocuments = documents.filter((doc) => {
    const statusMatch = filterStatus === "all" || doc.status === filterStatus
    const categoryMatch = filterCategory === "all" || doc.category === filterCategory
    return statusMatch && categoryMatch
  })

  const toggleDocumentStatus = (id: number) => {
    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === id) {
          const statusSequence: Document["status"][] = ["pending", "in-progress", "submitted", "sent"]
          const currentIndex = statusSequence.indexOf(doc.status)
          const nextStatus = statusSequence[(currentIndex + 1) % statusSequence.length]
          return {
            ...doc,
            status: nextStatus,
            dateSubmitted: nextStatus === "sent" ? new Date().toLocaleDateString() : doc.dateSubmitted,
          }
        }
        return doc
      }),
    )
  }

  const deleteDocument = (id: number) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id))
  }

  const getStatusColor = (status: Document["status"]) => {
    switch (status) {
      case "sent":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "submitted":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "in-progress":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const getCategoryIcon = (category: Document["category"]) => {
    const icons: { [key: string]: string } = {
      transcripts: "📄",
      "test-scores": "📊",
      recommendations: "💬",
      financial: "💰",
      other: "📎",
    }
    return icons[category] || "📎"
  }

  const getCategoryLabel = (category: Document["category"]) => {
    const labels: { [key: string]: string } = {
      transcripts: "Transcripts",
      "test-scores": "Test Scores",
      recommendations: "Recommendations",
      financial: "Financial Aid",
      other: "Other",
    }
    return labels[category] || "Other"
  }

  const completedCount = documents.filter((d) => d.status === "sent").length
  const completionPercentage = Math.round((completedCount / documents.length) * 100)

  const categoryStats = Array.from(new Set(documents.map((d) => d.category))).map((category) => {
    const categoryDocs = documents.filter((d) => d.category === category)
    const sentCount = categoryDocs.filter((d) => d.status === "sent").length
    return { category, total: categoryDocs.length, sent: sentCount }
  })

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-primary" />
          Document Tracker
        </h2>
        <p className="text-muted-foreground">
          Organize and track transcripts, recommendations, test scores, and financial aid forms
        </p>
      </div>

      {/* Progress Section */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <CardTitle>Overall Progress</CardTitle>
            <span className="text-2xl font-bold text-primary">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-3" />
          <p className="text-sm text-muted-foreground mt-3">
            {completedCount} of {documents.length} documents sent to colleges
          </p>
        </CardHeader>
      </Card>

      {/* Category Overview */}
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
        {categoryStats.map((stat) => {
          const percentage = Math.round((stat.sent / stat.total) * 100)
          return (
            <Card key={stat.category}>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{getCategoryLabel(stat.category)}</p>
                  <p className="text-2xl font-bold text-primary">
                    {stat.sent}/{stat.total}
                  </p>
                  <Progress value={percentage} className="h-1.5" />
                  <p className="text-xs text-muted-foreground">{percentage}% sent</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Tabs for filtering */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="status" onClick={() => setFilterStatus("all")}>
            By Status
          </TabsTrigger>
          <TabsTrigger value="category" onClick={() => setFilterCategory("all")}>
            By Category
          </TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Status View */}
        <TabsContent value="status" className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filterStatus === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("all")}
            >
              All
            </Button>
            {["pending", "in-progress", "submitted", "sent"].map((status) => (
              <Button
                key={status}
                variant={filterStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus(status as typeof filterStatus)}
                className="capitalize"
              >
                {status.replace("-", " ")}
              </Button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Checkbox
                        checked={doc.status === "sent"}
                        onCheckedChange={() => toggleDocumentStatus(doc.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2 gap-2">
                          <h4 className="font-semibold flex items-center gap-2">
                            <span>{getCategoryIcon(doc.category)}</span>
                            {doc.name}
                          </h4>
                          <Badge className={getStatusColor(doc.status)}>
                            {doc.status.replace("-", " ").charAt(0).toUpperCase() +
                              doc.status.replace("-", " ").slice(1)}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{doc.notes}</p>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex gap-4">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              📅 Deadline: {doc.deadline}
                            </span>
                            {doc.dateSubmitted && (
                              <span className="text-green-600 dark:text-green-400">✓ Sent: {doc.dateSubmitted}</span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                setSelectedDocument(doc)
                                setDetailsOpen(true)
                              }}
                            >
                              <Edit2 className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="ghost" onClick={() => deleteDocument(doc.id)}>
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No documents in this status</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        {/* Category View */}
        <TabsContent value="category" className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filterCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterCategory("all")}
            >
              All
            </Button>
            {["transcripts", "test-scores", "recommendations", "financial", "other"].map((category) => (
              <Button
                key={category}
                variant={filterCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterCategory(category as Document["category"])}
                className="capitalize"
              >
                {getCategoryLabel(category as Document["category"])}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {Array.from(new Set(filteredDocuments.map((d) => d.category))).map((category) => {
              const categoryDocs = filteredDocuments.filter((d) => d.category === category)
              return (
                <div key={category}>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span>{getCategoryIcon(category)}</span>
                    {getCategoryLabel(category)}
                  </h3>
                  <div className="space-y-2 ml-6">
                    {categoryDocs.map((doc) => (
                      <Card key={doc.id}>
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{doc.name}</p>
                              <p className="text-xs text-muted-foreground">{doc.notes}</p>
                            </div>
                            <Badge className={getStatusColor(doc.status)} className="shrink-0">
                              {doc.status.replace("-", " ").charAt(0).toUpperCase() +
                                doc.status.replace("-", " ").slice(1)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </TabsContent>

        {/* Timeline View */}
        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-3">
            {documents
              .sort((a, b) => {
                const deadlineA = new Date(a.deadline).getTime()
                const deadlineB = new Date(b.deadline).getTime()
                return deadlineA - deadlineB
              })
              .map((doc) => (
                <Card key={doc.id} className={doc.status === "sent" ? "border-green-200 dark:border-green-900/50" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${doc.status === "sent" ? "bg-green-600" : "bg-gray-400"}`}
                        />
                        <div className="w-0.5 h-16 bg-border" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-semibold">{doc.name}</h4>
                            <p className="text-sm text-muted-foreground">{doc.notes}</p>
                          </div>
                          <Badge className={getStatusColor(doc.status)}>
                            {doc.status.replace("-", " ").charAt(0).toUpperCase() +
                              doc.status.replace("-", " ").slice(1)}
                          </Badge>
                        </div>
                        <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {doc.deadline}
                          </span>
                          {doc.requiredForColleges.length > 0 && (
                            <span>Required for: {doc.requiredForColleges.join(", ")}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Reminders */}
      <Card className="border-l-4 border-l-secondary bg-secondary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-secondary" />
            Important Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-secondary">•</span>
              <span>Request recommendation letters at least 2-3 weeks before deadlines</span>
            </li>
            <li className="flex gap-2">
              <span className="text-secondary">•</span>
              <span>Send official transcripts directly from your school for accuracy</span>
            </li>
            <li className="flex gap-2">
              <span className="text-secondary">•</span>
              <span>Double-check test score recipients before submitting</span>
            </li>
            <li className="flex gap-2">
              <span className="text-secondary">•</span>
              <span>Complete FAFSA early to maximize financial aid eligibility</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Document Details Modal */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedDocument?.name}</DialogTitle>
            <DialogDescription>Document details and status</DialogDescription>
          </DialogHeader>
          {selectedDocument && (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Category</p>
                <p className="text-sm font-semibold">{getCategoryLabel(selectedDocument.category)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                <Badge className={getStatusColor(selectedDocument.status)}>
                  {selectedDocument.status.replace("-", " ").charAt(0).toUpperCase() +
                    selectedDocument.status.replace("-", " ").slice(1)}
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Deadline</p>
                <p className="text-sm font-semibold">{selectedDocument.deadline}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Notes</p>
                <p className="text-sm">{selectedDocument.notes}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Required for Colleges</p>
                <div className="flex flex-wrap gap-2">
                  {selectedDocument.requiredForColleges.map((college) => (
                    <Badge key={college} variant="outline">
                      {college}
                    </Badge>
                  ))}
                </div>
              </div>
              {selectedDocument.dateSubmitted && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Date Sent</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{selectedDocument.dateSubmitted}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
