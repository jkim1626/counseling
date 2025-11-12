"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp } from "lucide-react"

interface College {
  id: number
  name: string
  location: string
  state: string
  type: "Private" | "Public"
  avgGPA: number
  avgSAT: number
  tuition: number
  acceptanceRate: number
  interests: string[]
  ranking: number
  needBlind: boolean
}

interface CollegeMatchToolProps {
  studentType: "high-school" | "transfer"
}

export default function CollegeMatchTool({ studentType }: CollegeMatchToolProps) {
  const [gpa, setGpa] = useState("3.8")
  const [satScore, setSatScore] = useState("1450")
  const [interests, setInterests] = useState<string[]>(["STEM"])
  const [selectedColleges, setSelectedColleges] = useState<number[]>([])
  const [budget, setBudget] = useState([60000])
  const [acceptanceRange, setAcceptanceRange] = useState([0, 100])
  const [schoolTypes, setSchoolTypes] = useState<("Public" | "Private")[]>(["Public", "Private"])
  const [locations, setLocations] = useState<string[]>([])
  const [compareModalOpen, setCompareModalOpen] = useState(false)

  const colleges: College[] = [
    {
      id: 1,
      name: "Stanford University",
      location: "Stanford",
      state: "CA",
      type: "Private",
      avgGPA: 3.96,
      avgSAT: 1520,
      tuition: 60000,
      acceptanceRate: 3.3,
      interests: ["STEM", "Engineering", "Liberal Arts"],
      ranking: 4,
      needBlind: true,
    },
    {
      id: 2,
      name: "MIT",
      location: "Cambridge",
      state: "MA",
      type: "Private",
      avgGPA: 3.98,
      avgSAT: 1540,
      tuition: 60000,
      acceptanceRate: 2.7,
      interests: ["STEM", "Engineering", "Research"],
      ranking: 1,
      needBlind: true,
    },
    {
      id: 3,
      name: "University of Michigan",
      location: "Ann Arbor",
      state: "MI",
      type: "Public",
      avgGPA: 3.86,
      avgSAT: 1510,
      tuition: 32000,
      acceptanceRate: 16.5,
      interests: ["Engineering", "Business", "STEM"],
      ranking: 25,
      needBlind: false,
    },
    {
      id: 4,
      name: "UC Berkeley",
      location: "Berkeley",
      state: "CA",
      type: "Public",
      avgGPA: 3.88,
      avgSAT: 1530,
      tuition: 45000,
      acceptanceRate: 7.3,
      interests: ["STEM", "Engineering", "Research"],
      ranking: 15,
      needBlind: false,
    },
    {
      id: 5,
      name: "Duke University",
      location: "Durham",
      state: "NC",
      type: "Private",
      avgGPA: 3.95,
      avgSAT: 1510,
      tuition: 60000,
      acceptanceRate: 4.3,
      interests: ["STEM", "Business", "Liberal Arts"],
      ranking: 10,
      needBlind: true,
    },
    {
      id: 6,
      name: "Cornell University",
      location: "Ithaca",
      state: "NY",
      type: "Private",
      avgGPA: 3.92,
      avgSAT: 1520,
      tuition: 60000,
      acceptanceRate: 7.0,
      interests: ["Engineering", "STEM", "Agriculture"],
      ranking: 12,
      needBlind: true,
    },
    {
      id: 7,
      name: "Harvard University",
      location: "Cambridge",
      state: "MA",
      type: "Private",
      avgGPA: 3.98,
      avgSAT: 1530,
      tuition: 60000,
      acceptanceRate: 3.0,
      interests: ["Liberal Arts", "Law", "Business"],
      ranking: 2,
      needBlind: true,
    },
    {
      id: 8,
      name: "University of Texas at Austin",
      location: "Austin",
      state: "TX",
      type: "Public",
      avgGPA: 3.84,
      avgSAT: 1480,
      tuition: 28000,
      acceptanceRate: 18.2,
      interests: ["Engineering", "Business", "STEM"],
      ranking: 38,
      needBlind: false,
    },
    {
      id: 9,
      name: "Northwestern University",
      location: "Evanston",
      state: "IL",
      type: "Private",
      avgGPA: 3.96,
      avgSAT: 1510,
      tuition: 62000,
      acceptanceRate: 6.2,
      interests: ["Business", "Engineering", "Journalism"],
      ranking: 9,
      needBlind: true,
    },
    {
      id: 10,
      name: "University of Pennsylvania",
      location: "Philadelphia",
      state: "PA",
      type: "Private",
      avgGPA: 3.95,
      avgSAT: 1520,
      tuition: 61000,
      acceptanceRate: 3.2,
      interests: ["Business", "Engineering", "Medicine"],
      ranking: 6,
      needBlind: true,
    },
  ]

  const filteredColleges = colleges.filter((college) => {
    const gpaPassed = Number.parseFloat(gpa) >= college.avgGPA - 0.2
    const satPassed = Number.parseInt(satScore) >= college.avgSAT - 100
    const budgetPassed = college.tuition <= budget[0]
    const acceptancePassed =
      college.acceptanceRate >= acceptanceRange[0] && college.acceptanceRate <= acceptanceRange[1]
    const typePassed = schoolTypes.includes(college.type)
    const interestPassed = interests.length === 0 || interests.some((interest) => college.interests.includes(interest))
    const locationPassed = locations.length === 0 || locations.includes(college.state)

    return gpaPassed && satPassed && budgetPassed && acceptancePassed && typePassed && interestPassed && locationPassed
  })

  const toggleCollege = (id: number) => {
    setSelectedColleges((prev) => (prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]))
  }

  const toggleInterest = (interest: string) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const toggleSchoolType = (type: "Public" | "Private") => {
    setSchoolTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const toggleLocation = (state: string) => {
    setLocations((prev) => (prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]))
  }

  const selectedCollegeData = colleges.filter((c) => selectedColleges.includes(c.id))

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Filter Panel */}
        <Card className="lg:sticky lg:top-20 h-fit">
          <CardHeader>
            <CardTitle>Search Filters</CardTitle>
            <CardDescription>Refine your college search</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* GPA Filter */}
            <div>
              <Label htmlFor="gpa" className="font-semibold">
                Your GPA
              </Label>
              <Input
                id="gpa"
                type="number"
                step="0.01"
                max="4.0"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground mt-1">Shows schools within 0.2 of your GPA</p>
            </div>

            {/* SAT Score Filter */}
            <div>
              <Label htmlFor="sat" className="font-semibold">
                Your SAT Score
              </Label>
              <Input
                id="sat"
                type="number"
                value={satScore}
                onChange={(e) => setSatScore(e.target.value)}
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground mt-1">Shows schools within 100 points of your score</p>
            </div>

            {/* Budget Filter */}
            <div>
              <Label className="font-semibold mb-3 block">Budget (Annual Tuition)</Label>
              <Slider value={budget} onValueChange={setBudget} min={0} max={80000} step={5000} className="w-full" />
              <p className="text-sm font-medium mt-2">${budget[0].toLocaleString()}</p>
            </div>

            {/* Acceptance Rate Filter */}
            <div>
              <Label className="font-semibold mb-3 block">Acceptance Rate Range</Label>
              <Slider
                value={acceptanceRange}
                onValueChange={setAcceptanceRange}
                min={0}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-sm text-muted-foreground mt-2">
                {acceptanceRange[0]}% - {acceptanceRange[1]}%
              </p>
            </div>

            {/* School Type Filter */}
            <div>
              <Label className="font-semibold mb-3 block">School Type</Label>
              <div className="space-y-2">
                {["Public", "Private"].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <Checkbox
                      id={type}
                      checked={schoolTypes.includes(type as "Public" | "Private")}
                      onCheckedChange={() => toggleSchoolType(type as "Public" | "Private")}
                    />
                    <Label htmlFor={type} className="font-normal cursor-pointer">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Filter */}
            <div>
              <Label className="font-semibold mb-3 block">Interests</Label>
              <div className="space-y-2">
                {["STEM", "Engineering", "Business", "Liberal Arts", "Research", "Medicine"].map((interest) => (
                  <div key={interest} className="flex items-center gap-2">
                    <Checkbox
                      id={interest}
                      checked={interests.includes(interest)}
                      onCheckedChange={() => toggleInterest(interest)}
                    />
                    <Label htmlFor={interest} className="font-normal cursor-pointer text-sm">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <Label className="font-semibold mb-3 block">States</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {["CA", "MA", "MI", "NC", "NY", "IL", "PA", "TX"].map((state) => (
                  <div key={state} className="flex items-center gap-2">
                    <Checkbox
                      id={state}
                      checked={locations.includes(state)}
                      onCheckedChange={() => toggleLocation(state)}
                    />
                    <Label htmlFor={state} className="font-normal cursor-pointer text-sm">
                      {state}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{filteredColleges.length} Colleges Matched</h3>
              <p className="text-sm text-muted-foreground">
                {selectedColleges.length > 0
                  ? `${selectedColleges.length} selected for comparison`
                  : "Select colleges to compare"}
              </p>
            </div>
          </div>

          {filteredColleges.length > 0 ? (
            <>
              {filteredColleges.map((college) => (
                <Card
                  key={college.id}
                  className={`cursor-pointer transition-all ${
                    selectedColleges.includes(college.id) ? "border-2 border-primary bg-primary/5" : "hover:shadow-lg"
                  }`}
                  onClick={() => toggleCollege(college.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Checkbox
                        checked={selectedColleges.includes(college.id)}
                        onCheckedChange={() => toggleCollege(college.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-base">{college.name}</h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {college.location}, {college.state} • {college.type}
                            </p>
                          </div>
                          <Badge variant="outline" className="ml-2">
                            #{college.ranking}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-sm">
                          <div>
                            <p className="text-muted-foreground text-xs">Avg GPA</p>
                            <p className="font-semibold">{college.avgGPA}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Avg SAT</p>
                            <p className="font-semibold">{college.avgSAT}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Acceptance Rate</p>
                            <p className="font-semibold">{college.acceptanceRate}%</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-xs">Annual Tuition</p>
                            <p className="font-semibold">${(college.tuition / 1000).toFixed(0)}k</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {college.interests.map((interest) => (
                            <Badge key={interest} variant="secondary" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                          {college.needBlind && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                            >
                              Need Blind
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {selectedColleges.length > 0 && (
                <Button className="w-full" size="lg" onClick={() => setCompareModalOpen(true)}>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Compare Selected ({selectedColleges.length})
                </Button>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No colleges match your current filters</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your acceptance rate, budget, or interests
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Comparison Modal */}
      <Dialog open={compareModalOpen} onOpenChange={setCompareModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>College Comparison</DialogTitle>
            <DialogDescription>Compare {selectedCollegeData.length} colleges side by side</DialogDescription>
          </DialogHeader>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold sticky left-0 bg-muted">College</th>
                  {selectedCollegeData.map((college) => (
                    <th key={college.id} className="text-left p-3 font-semibold min-w-40">
                      {college.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Location</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      {college.location}, {college.state}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Type</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      {college.type}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Ranking</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3 font-semibold">
                      #{college.ranking}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Avg GPA</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      {college.avgGPA}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Avg SAT</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      {college.avgSAT}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Acceptance Rate</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      {college.acceptanceRate}%
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium bg-muted sticky left-0">Annual Tuition</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      ${college.tuition.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-medium bg-muted sticky left-0">Need Blind</td>
                  {selectedCollegeData.map((college) => (
                    <td key={college.id} className="p-3">
                      {college.needBlind ? "✓" : "—"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
