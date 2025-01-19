import { Card, CardContent } from "@/components/ui/card"
import { PChart } from "@/components/chart"

const courses = [
  { code: "CS101", name: "Introduction to Computer Science" },
  { code: "MATH201", name: "Discrete Mathematics" },
  { code: "PHYS102", name: "Physics for Engineers" },
  { code: "CHEM103", name: "General Chemistry" },
  { code: "HIST201", name: "World History" },
  { code: "ENGL102", name: "English Composition" },
]

export function Section() {
  return (
    <div className="p-6 space-y-8">
      <h2 className="text-lg text-black">Academics</h2>
      <div className="max-w-xl mx-auto space-y-4">
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

      <div className="max-w-xl mx-auto">
        <PChart />
      </div>
    </div>
  )
}
