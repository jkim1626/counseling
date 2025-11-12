"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Lightbulb, BookOpen, CheckCircle2, AlertCircle, Target, Sparkles } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface EssayTip {
  title: string
  description: string
  icon: React.ReactNode
}

export default function EssayHelper() {
  const [essayText, setEssayText] = useState("")
  const [selectedPrompt, setSelectedPrompt] = useState("common-1")
  const [activeTab, setActiveTab] = useState("prompts")
  const [savedDrafts, setSavedDrafts] = useState<{ [key: string]: string }>({})

  const prompts = [
    {
      id: "common-1",
      category: "Common App",
      title: "Prompt 1: Background & Identity",
      text: "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.",
      wordLimit: 650,
      tips: [
        "Focus on what makes you unique",
        "Explain significance, not just description",
        "Show growth and self-awareness",
      ],
    },
    {
      id: "common-2",
      category: "Common App",
      title: "Prompt 2: Challenge & Failure",
      text: "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?",
      wordLimit: 650,
      tips: [
        "Be honest about the challenge",
        "Focus on your response and growth",
        "Show resilience and problem-solving",
      ],
    },
    {
      id: "common-3",
      category: "Common App",
      title: "Prompt 3: Beliefs & Ideas",
      text: "Reflect on a time when you questioned a belief or idea you previously held. What prompted your thinking? What was the outcome?",
      wordLimit: 650,
      tips: ["Show intellectual curiosity", "Demonstrate willingness to change", "Explain the reasoning process"],
    },
    {
      id: "common-4",
      category: "Common App",
      title: "Prompt 4: Problem-Solving",
      text: "Describe a problem you've solved or would like to solve. It can be an intellectual challenge, a research query, an ethical dilemma-anything that is of personal importance, no matter the scale.",
      wordLimit: 650,
      tips: ["Pick a problem meaningful to you", "Show your thought process", "Explain impact and implications"],
    },
    {
      id: "why-school",
      category: "Supplemental",
      title: "Why Do You Want to Attend?",
      text: "What specifically about [School Name] appeals to you? Please discuss your academic interests and any other aspects of the university that attract you.",
      wordLimit: 300,
      tips: [
        "Research the school thoroughly",
        "Be specific about programs/opportunities",
        "Connect school offerings to your goals",
      ],
    },
    {
      id: "leadership",
      category: "Supplemental",
      title: "Leadership & Contribution",
      text: "Tell us about a time you demonstrated leadership or made a meaningful contribution to a community.",
      wordLimit: 250,
      tips: ["Define your leadership style", "Show impact on others", "Reflect on lessons learned"],
    },
  ]

  const brainstormTips = [
    {
      title: "Personal Stories",
      description:
        "Think about moments that shaped who you are today. What challenges did you overcome? What are you proud of?",
    },
    {
      title: "Authenticity",
      description:
        "Choose stories only YOU can tell. Admissions officers want to know who you are, not who you think they want.",
    },
    {
      title: "Show, Don't Tell",
      description:
        "Use specific examples and dialogue. Instead of saying 'I'm hardworking,' describe a time you worked hard.",
    },
    {
      title: "Vulnerability",
      description:
        "It's okay to be vulnerable. Admissions officers appreciate honesty and self-reflection more than perfection.",
    },
    {
      title: "Avoid Clichés",
      description: "Stay away from overused topics like summer volunteer trips unless you have a unique angle.",
    },
    {
      title: "Voice & Style",
      description: "Let your personality shine through. Use your natural speaking style and humor if appropriate.",
    },
  ]

  const essayStructure = [
    {
      part: "Opening",
      tips: [
        "Start with a scene or moment",
        "Hook the reader immediately",
        "Avoid clichés like quotes or statistics",
        "Show personality from line one",
      ],
    },
    {
      part: "Body",
      tips: [
        "Develop your main idea with specific examples",
        "Use vivid details and dialogue",
        "Show reflection and growth",
        "Connect back to the prompt",
      ],
    },
    {
      part: "Closing",
      tips: [
        "End with insight or resolution",
        "Show how this experience shaped you",
        "Connect to your future goals",
        "Avoid summarizing or repeating",
      ],
    },
  ]

  const commonMistakes = [
    "Writing what you think admissions wants instead of your truth",
    "Using clichés or overused topics",
    "Making it too formal or stiff",
    "Including irrelevant personal details",
    "Not proofreading for grammar and spelling",
    "Exceeding word limits significantly",
    "Using thesaurus words that don't fit your voice",
  ]

  const wordCount = essayText.split(/\s+/).filter((word) => word.length > 0).length
  const currentPrompt = prompts.find((p) => p.id === selectedPrompt)
  const wordPercentage = currentPrompt ? Math.min((wordCount / currentPrompt.wordLimit) * 100, 100) : 0

  const saveCurrentDraft = () => {
    setSavedDrafts((prev) => ({
      ...prev,
      [selectedPrompt]: essayText,
    }))
  }

  const loadDraft = (promptId: string) => {
    setSelectedPrompt(promptId)
    setEssayText(savedDrafts[promptId] || "")
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6 text-primary" />
          Essay Helper & Writing Guide
        </h2>
        <p className="text-muted-foreground">
          Learn how to write compelling essays with brainstorming tools, structure guides, and expert tips
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="prompts" className="flex items-center gap-2">
            <Target className="w-4 h-4 hidden sm:inline" />
            <span className="hidden sm:inline">Prompts</span>
            <span className="sm:hidden">Prompts</span>
          </TabsTrigger>
          <TabsTrigger value="structure" className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 hidden sm:inline" />
            <span className="hidden sm:inline">Structure</span>
            <span className="sm:hidden">Build</span>
          </TabsTrigger>
          <TabsTrigger value="brainstorm" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 hidden sm:inline" />
            <span className="hidden sm:inline">Brainstorm</span>
            <span className="sm:hidden">Ideas</span>
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 hidden sm:inline" />
            <span className="hidden sm:inline">Tips</span>
            <span className="sm:hidden">Tips</span>
          </TabsTrigger>
          <TabsTrigger value="editor" className="flex items-center gap-2">
            <FileText className="w-4 h-4 hidden sm:inline" />
            <span className="hidden sm:inline">Write</span>
            <span className="sm:hidden">Write</span>
          </TabsTrigger>
        </TabsList>

        {/* Prompts Tab */}
        <TabsContent value="prompts" className="space-y-4">
          <div className="space-y-4">
            {["Common App", "Supplemental"].map((category) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-3 text-muted-foreground">{category}</h3>
                <div className="grid gap-3">
                  {prompts
                    .filter((p) => p.category === category)
                    .map((prompt) => (
                      <Card
                        key={prompt.id}
                        className={`cursor-pointer transition-all ${
                          selectedPrompt === prompt.id
                            ? "border-2 border-primary bg-primary/5"
                            : "hover:shadow-md hover:border-primary/50"
                        }`}
                        onClick={() => {
                          setSelectedPrompt(prompt.id)
                          setEssayText(savedDrafts[prompt.id] || "")
                        }}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h4 className="font-semibold">{prompt.title}</h4>
                            {savedDrafts[prompt.id] && (
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400"
                              >
                                Draft Saved
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-3">{prompt.text}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Word Limit: {prompt.wordLimit}</span>
                            {savedDrafts[prompt.id] && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  loadDraft(prompt.id)
                                  setActiveTab("editor")
                                }}
                              >
                                Load Draft
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Structure Tab */}
        <TabsContent value="structure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Essay Structure</CardTitle>
              <CardDescription>
                A proven framework to organize your thoughts and create a compelling narrative
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {essayStructure.map((section, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-semibold">{section.part}</h4>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Remember: The best essays have a clear beginning, middle, and end that tells a complete story about who
              you are.
            </AlertDescription>
          </Alert>
        </TabsContent>

        {/* Brainstorm Tab */}
        <TabsContent value="brainstorm" className="space-y-4">
          <div className="grid gap-4">
            {brainstormTips.map((tip, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    {tip.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tips Tab */}
        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="text-red-600 dark:text-red-400 font-bold min-w-fit">✕</span>
                    <span className="text-sm">{mistake}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Editing Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                {[
                  "Does your essay answer the prompt directly?",
                  "Is your personal voice evident throughout?",
                  "Did you use specific examples instead of generalizations?",
                  "Does every sentence serve a purpose?",
                  "Have you proofread for grammar and spelling?",
                  "Does it fit within the word limit?",
                  "Would this tell admissions something new about you?",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input type="checkbox" id={`check-${i}`} className="w-4 h-4 rounded" />
                    <label htmlFor={`check-${i}`} className="text-sm cursor-pointer">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Editor Tab */}
        <TabsContent value="editor" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <CardTitle>{currentPrompt?.title}</CardTitle>
                  <CardDescription>Based on: {currentPrompt?.category}</CardDescription>
                </div>
                <Badge variant="outline">{wordCount} words</Badge>
              </div>

              {currentPrompt && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Word Count Progress</span>
                    <span className="font-semibold text-primary">
                      {wordPercentage > 100
                        ? `${wordCount} (over by ${wordCount - currentPrompt.wordLimit})`
                        : `${wordCount}/${currentPrompt.wordLimit}`}
                    </span>
                  </div>
                  <Progress
                    value={wordPercentage}
                    className={wordCount > currentPrompt.wordLimit ? "bg-red-100" : ""}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {currentPrompt && (
                <div className="bg-secondary/5 p-4 rounded-lg border">
                  <p className="text-sm font-medium mb-2">Prompt:</p>
                  <p className="text-sm italic text-muted-foreground">{currentPrompt.text}</p>
                </div>
              )}

              {currentPrompt?.tips && (
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Tips for This Prompt
                  </p>
                  <ul className="text-sm space-y-1">
                    {currentPrompt.tips.map((tip, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Textarea
                placeholder="Start typing your essay here..."
                value={essayText}
                onChange={(e) => setEssayText(e.target.value)}
                className="min-h-96 resize-none"
              />

              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" onClick={saveCurrentDraft}>
                  Save Draft
                </Button>
                <Button>Submit for Review</Button>
                {Object.keys(savedDrafts).length > 0 && (
                  <div className="ml-auto text-sm text-muted-foreground pt-2">
                    {Object.keys(savedDrafts).length} draft(s) saved
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
