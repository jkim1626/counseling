"use client"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { BookOpen, GraduationCap, MapPin, FileText, CheckCircle2, Users, Library, Home } from "lucide-react"

interface NavigationProps {
  studentType: "high-school" | "transfer"
  setStudentType: (type: "high-school" | "transfer") => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ studentType, setStudentType, activeTab, setActiveTab }: NavigationProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "college-match", label: "College Match", icon: MapPin },
    { id: "timeline", label: "Timeline", icon: CheckCircle2 },
    { id: "essays", label: "Essays", icon: FileText },
    { id: "documents", label: "Documents", icon: Users },
    { id: "transfer", label: "Transfer Pathways", icon: GraduationCap },
    { id: "resources", label: "Resources", icon: Library },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
            <h1 className="text-2xl font-bold text-primary-foreground">College Compass</h1>
          </div>
          <ToggleGroup
            type="single"
            value={studentType}
            onValueChange={(v) => v && setStudentType(v as "high-school" | "transfer")}
            className="border border-primary-foreground/30 rounded-lg p-1"
          >
            <ToggleGroupItem
              value="high-school"
              aria-label="High School"
              className="text-primary-foreground data-[state=on]:bg-primary-foreground/20"
            >
              High School
            </ToggleGroupItem>
            <ToggleGroupItem
              value="transfer"
              aria-label="Transfer Student"
              className="text-primary-foreground data-[state=on]:bg-primary-foreground/20"
            >
              Transfer Student
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex gap-1 overflow-x-auto pb-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 text-sm whitespace-nowrap ${
                  activeTab === item.id
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
