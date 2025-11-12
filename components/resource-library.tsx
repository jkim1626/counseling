"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Library, ExternalLink, BookOpen, DollarSign, Briefcase as BriefCase } from "lucide-react"

export default function ResourceLibrary() {
  const resources = {
    scholarships: [
      {
        name: "Fastweb",
        description: "Free scholarship database with personalized matches",
        url: "#",
        icon: DollarSign,
      },
      {
        name: "Scholarships.com",
        description: "Browse thousands of scholarships and grants",
        url: "#",
        icon: DollarSign,
      },
      {
        name: "College Board Scholarship Finder",
        description: "Official College Board scholarship search",
        url: "#",
        icon: DollarSign,
      },
    ],
    testPrep: [
      {
        name: "Khan Academy SAT Prep",
        description: "Free SAT preparation videos and practice problems",
        url: "#",
        icon: BookOpen,
      },
      {
        name: "Prep Scholar",
        description: "Comprehensive SAT and ACT study guides",
        url: "#",
        icon: BookOpen,
      },
      {
        name: "Official SAT Practice",
        description: "Practice tests from the College Board",
        url: "#",
        icon: BookOpen,
      },
    ],
    financialAid: [
      {
        name: "FAFSA.ed.gov",
        description: "Official Free Application for Federal Student Aid",
        url: "#",
        icon: DollarSign,
      },
      {
        name: "CSS Profile",
        description: "College financial aid profile application",
        url: "#",
        icon: DollarSign,
      },
      {
        name: "College Board Financial Aid",
        description: "Guide to financial aid and paying for college",
        url: "#",
        icon: DollarSign,
      },
    ],
    applications: [
      {
        name: "Common Application",
        description: "Universal college application platform",
        url: "#",
        icon: BriefCase,
      },
      {
        name: "Coalition App",
        description: "Alternative college application platform",
        url: "#",
        icon: BriefCase,
      },
      {
        name: "UC Application",
        description: "University of California application portal",
        url: "#",
        icon: BriefCase,
      },
    ],
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Library className="w-6 h-6 text-primary" />
          Resource Library
        </h2>
        <p className="text-muted-foreground">
          Curated links to scholarship databases, test prep, financial aid, and application portals
        </p>
      </div>

      <Tabs defaultValue="scholarships" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="testprep">Test Prep</TabsTrigger>
          <TabsTrigger value="financialaid">Financial Aid</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="scholarships" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.scholarships.map((resource, i) => (
            <ResourceCard key={i} resource={resource} />
          ))}
        </TabsContent>

        <TabsContent value="testprep" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.testPrep.map((resource, i) => (
            <ResourceCard key={i} resource={resource} />
          ))}
        </TabsContent>

        <TabsContent value="financialaid" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.financialAid.map((resource, i) => (
            <ResourceCard key={i} resource={resource} />
          ))}
        </TabsContent>

        <TabsContent value="applications" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resources.applications.map((resource, i) => (
            <ResourceCard key={i} resource={resource} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ResourceCardProps {
  resource: {
    name: string
    description: string
    url: string
    icon: React.ComponentType<{ className?: string }>
  }
}

function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = resource.icon

  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-start gap-2 text-base">
          <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <span>{resource.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
        <Button variant="outline" size="sm" className="w-full mt-auto bg-transparent">
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit
        </Button>
      </CardContent>
    </Card>
  )
}
