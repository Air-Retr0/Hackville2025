import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

const courses = [
  { code: "CSE 111", name: "Introduction to Programming" },
  { code: "CSE 212", name: "Data Structures and Algorithms" },
  { code: "CSE 321", name: "Operating Systems" },
  { code: "CSE 317", name: "Computer Networks" },
  { code: "CSE 433", name: "Database Systems" },
  { code: "CSE 412", name: "English Composition" },
]

export function CourseList() {
  return (
    <div className="mx-auto max-w-xl space-y-4">
      {courses.map((course, index) => (
        <div key={index} className="w-full">
          <Card className="h-24">
            <CardContent className="flex flex-col justify-center items-center h-full p-4">
              <span className="text-lg font-semibold">{course.code}</span>
              <span className="text-sm text-gray-500">{course.name}</span>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
