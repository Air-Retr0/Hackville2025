import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function AIChat() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 w-20 rounded-lg bg-white p-4 shadow-md transition-all duration-300 ease-in-out">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>AI Chat</SheetTitle>
            <SheetDescription>Interact and get AI responses!</SheetDescription>
          </SheetHeader>

          <div className={`transition-all duration-300 ease-in-out ${isExpanded ? "w-96" : "w-20"}`}>
            <Textarea
              placeholder="Type your message here."
              className={`transition-all duration-300 ease-in-out ${isExpanded ? "h-40" : "h-10"}`}
            />

            {isExpanded && (
              <>
                <div className="flex justify-between mt-2 bg-white text-black hover:bg-black hover:text-white">
                  <Button>Send message</Button>
                  <Button
                    onClick={() => navigator.clipboard.writeText("Your message content here")}
                    className="bg-white text-black hover:bg-black hover:text-white"
                  >
                    Copy
                  </Button>
                </div>
              </>
            )}

            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 w-full bg-white text-black hover:bg-blue-400 hover:text-white transition-all"
            >
              {isExpanded ? "Minimize" : "Expand"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
