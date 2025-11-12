"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, AlertCircle, DollarSign, CheckCircle2, Clock } from "lucide-react"

interface TransferProgram {
  id: number
  ccName: string
  transferPartners: { name: string; acceptanceRate: number }[]
  credits: number
  minGPA: number
  maxGPA: number
  articulation: string
  majors: string[]
  completionTime: string
  transferAgreementType: "TAG" | "TAP" | "Articulation" | "Guarantee"
}

export default function TransferPathway() {
  const [gpaFilter, setGpaFilter] = useState([3.0])

  const transferPrograms: TransferProgram[] = [
    {
      id: 1,
      ccName: "Foothill College",
      transferPartners: [
        { name: "UC Berkeley", acceptanceRate: 8 },
        { name: "Stanford", acceptanceRate: 3 },
        { name: "San Jose State", acceptanceRate: 45 },
      ],
      credits: 60,
      minGPA: 2.8,
      maxGPA: 4.0,
      articulation: "Cal State Transfer Pathway",
      majors: ["Computer Science", "Engineering", "Mathematics", "Physics"],
      completionTime: "2 years",
      transferAgreementType: "TAG",
    },
    {
      id: 2,
      ccName: "De Anza College",
      transferPartners: [
        { name: "UCLA", acceptanceRate: 12 },
        { name: "UC San Diego", acceptanceRate: 28 },
        { name: "USC", acceptanceRate: 15 },
      ],
      credits: 60,
      minGPA: 2.9,
      maxGPA: 4.0,
      articulation: "UC Transfer Admission Guarantee",
      majors: ["Business", "Engineering", "Biological Sciences", "Computer Science"],
      completionTime: "2 years",
      transferAgreementType: "TAG",
    },
    {
      id: 3,
      ccName: "Santa Monica College",
      transferPartners: [
        { name: "UCLA", acceptanceRate: 11 },
        { name: "USC", acceptanceRate: 16 },
        { name: "Pepperdine", acceptanceRate: 33 },
      ],
      credits: 60,
      minGPA: 2.7,
      maxGPA: 4.0,
      articulation: "Transfer Alliance Program",
      majors: ["Liberal Arts", "Biological Sciences", "Business Administration"],
      completionTime: "2 years",
      transferAgreementType: "TAP",
    },
    {
      id: 4,
      ccName: "Diablo Valley College",
      transferPartners: [
        { name: "UC Davis", acceptanceRate: 38 },
        { name: "UC Irvine", acceptanceRate: 22 },
        { name: "Cal Poly San Luis Obispo", acceptanceRate: 26 },
      ],
      credits: 60,
      minGPA: 3.0,
      maxGPA: 4.0,
      articulation: "UC Transfer Pathway",
      majors: ["Engineering", "Agriculture", "Life Sciences"],
      completionTime: "2 years",
      transferAgreementType: "Guarantee",
    },
  ]

  const transferSteps = [
    {
      step: 1,
      title: "Research Transfer-Friendly Universities",
      description: "Look for schools with articulation agreements and transfer admission guarantees",
      tips: [
        "Check ASSIST.org for specific agreements",
        "Look for schools accepting 60+ credits",
        "Verify admission stats for transfer students",
      ],
    },
    {
      step: 2,
      title: "Enroll at Community College",
      description: "Start with courses aligned to your transfer major",
      tips: ["Take general education requirements", "Speak with transfer counselor", "Check prerequisite sequences"],
    },
    {
      step: 3,
      title: "Complete Prerequisite Courses",
      description: "Finish major-specific prerequisites at your CC",
      tips: ["Stay on track with course sequence", "Maintain organized records", "Track credit transfers"],
    },
    {
      step: 4,
      title: "Maintain Strong GPA",
      description: "Universities typically look for 3.0+ GPA for transfer admission",
      tips: [
        "Many schools have specific GPA requirements",
        "Some majors require higher GPA",
        "Build strong academic record",
      ],
    },
    {
      step: 5,
      title: "Submit Transfer Application",
      description: "Apply during transfer application periods (usually November-March)",
      tips: ["Meet early application deadlines", "Write transfer-specific essays", "Submit test scores if required"],
    },
    {
      step: 6,
      title: "Plan Final Two Years",
      description: "Complete upper-division courses at the university",
      tips: ["Understand graduation requirements", "Plan major-specific courses", "Explore internships and research"],
    },
  ]

  const financialAidTips = [
    {
      title: "FAFSA is Critical",
      description: "File FAFSA as soon as possible to maximize federal and state aid eligibility",
    },
    {
      title: "Transfer-Specific Scholarships",
      description: "Many universities offer scholarships specifically for transfer students",
    },
    {
      title: "Save on First Two Years",
      description: "Community college tuition is significantly lower than 4-year universities",
    },
    {
      title: "Check CC Financial Aid",
      description: "Your community college may have transfer grants and scholarships",
    },
  ]

  const transferAgreementTypes = [
    {
      type: "TAG (Transfer Admission Guarantee)",
      description: "Guaranteed admission if you meet GPA and course requirements",
      schools: "UC System",
      advantage: "Guaranteed admission with 3.0+ GPA",
    },
    {
      type: "TAP (Transfer Admission Program)",
      description: "For CSU transfer students, guarantees admission to specific campuses",
      schools: "Cal State System",
      advantage: "Priority admission to specific majors",
    },
    {
      type: "Articulation Agreements",
      description: "Specific course-by-course agreements between CC and 4-year school",
      schools: "Mixed (UC, CSU, Private)",
      advantage: "Clear pathway for credit transfer",
    },
    {
      type: "Transfer Partnerships",
      description: "Bilateral agreements granting priority to transfer students",
      schools: "Private Universities",
      advantage: "Higher acceptance rates for transfers",
    },
  ]

  const filteredPrograms = transferPrograms.filter(
    (program) => gpaFilter[0] >= program.minGPA && gpaFilter[0] <= program.maxGPA,
  )

  const resourceCategories = [
    {
      category: "Official Programs",
      resources: [
        { name: "UC Transfer Admission Guarantee (TAG)", url: "#", icon: "🎓" },
        { name: "Cal State Transfer Admission Program (TAP)", url: "#", icon: "🎓" },
        { name: "Community College Transfer Alliance", url: "#", icon: "🤝" },
      ],
    },
    {
      category: "Planning & Advising",
      resources: [
        { name: "ASSIST.org - Articulation Agreements", url: "#", icon: "📋" },
        { name: "Transfer Counselor Directory", url: "#", icon: "👨‍🏫" },
        { name: "Major-Specific Transfer Guides", url: "#", icon: "📚" },
      ],
    },
    {
      category: "Financial Support",
      resources: [
        { name: "Transfer Student Scholarships", url: "#", icon: "💰" },
        { name: "FAFSA for Transfer Students", url: "#", icon: "📝" },
        { name: "CSS Profile for Transfers", url: "#", icon: "📋" },
      ],
    },
    {
      category: "Success Resources",
      resources: [
        { name: "Transfer Student Services", url: "#", icon: "🎯" },
        { name: "Academic Planning Workshops", url: "#", icon: "📊" },
        { name: "Peer Mentor Programs", url: "#", icon: "🤝" },
      ],
    },
  ]

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          Transfer Student Pathways
        </h2>
        <p className="text-muted-foreground">
          Comprehensive resources and guidance for community college to university transfers
        </p>
      </div>

      <Tabs defaultValue="programs" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 overflow-x-auto">
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="agreements">Agreements</TabsTrigger>
          <TabsTrigger value="steps">Steps</TabsTrigger>
          <TabsTrigger value="financial">Financial Aid</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Transfer Programs Tab */}
        <TabsContent value="programs" className="space-y-4">
          <div className="space-y-4">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-base">Filter by GPA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Slider
                  value={gpaFilter}
                  onValueChange={setGpaFilter}
                  min={2.0}
                  max={4.0}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm font-semibold">
                  <span>Min GPA: 2.0</span>
                  <span className="text-primary">Your GPA: {gpaFilter[0].toFixed(1)}</span>
                  <span>Max GPA: 4.0</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((program) => (
                  <Card key={program.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <CardTitle>{program.ccName}</CardTitle>
                          <CardDescription>{program.completionTime} to completion</CardDescription>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {program.transferAgreementType}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">GPA Requirements</p>
                          <p className="font-semibold">
                            {program.minGPA} - {program.maxGPA}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">Required Credits</p>
                          <p className="font-semibold">{program.credits} credits</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Articulation Agreement</p>
                        <p className="text-sm">{program.articulation}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Popular Majors</p>
                        <div className="flex flex-wrap gap-2">
                          {program.majors.map((major) => (
                            <Badge key={major} variant="outline" className="bg-accent/10">
                              {major}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Transfer Partner Schools</p>
                        <div className="space-y-2">
                          {program.transferPartners.map((partner, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                              <span className="text-sm font-medium">{partner.name}</span>
                              <Badge variant="outline">{partner.acceptanceRate}% acceptance</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No programs match your GPA range</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Transfer Agreements Tab */}
        <TabsContent value="agreements" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {transferAgreementTypes.map((agreement, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{agreement.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{agreement.description}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground">Applies To</p>
                      <p className="font-semibold">{agreement.schools}</p>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-medium text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Key Advantage
                      </p>
                      <p>{agreement.advantage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Transfer Steps Tab */}
        <TabsContent value="steps" className="space-y-4">
          <div className="space-y-4">
            {transferSteps.map((item, index) => (
              <Card key={item.step}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      {index < transferSteps.length - 1 && <div className="w-1 h-32 bg-border mt-2"></div>}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="space-y-1">
                        {item.tips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Financial Aid Tab */}
        <TabsContent value="financial" className="space-y-4">
          <div className="grid gap-4">
            {financialAidTips.map((tip, i) => (
              <Card key={i} className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Cost Advantage:</strong> Completing your first 2 years at community college can save
              $40,000-$80,000 compared to attending a 4-year university for all 4 years.
            </AlertDescription>
          </Alert>

          <Card className="bg-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Transfer Timeline for Financial Aid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold text-primary">October 1</p>
                  <p className="text-sm text-muted-foreground">FAFSA becomes available</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">December 1</p>
                  <p className="text-sm text-muted-foreground">Early FAFSA deadline for priority aid</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">January 1</p>
                  <p className="text-sm text-muted-foreground">CSS Profile deadline (if required)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">March 2</p>
                  <p className="text-sm text-muted-foreground">FAFSA priority deadline</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          {resourceCategories.map((category, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {category.resources.map((resource, j) => (
                  <Card key={j} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">{resource.icon}</span>
                        <h4 className="font-semibold text-sm flex-1">{resource.name}</h4>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      {/* Quick Tips Section */}
      <Card className="border-l-4 border-l-accent bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            Transfer Success Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 md:grid-cols-2">
            <li className="flex gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Meet with your transfer counselor regularly</span>
            </li>
            <li className="flex gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Keep organized records of all courses taken</span>
            </li>
            <li className="flex gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Apply early in the transfer application window</span>
            </li>
            <li className="flex gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Build relationships with professors for recommendations</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
