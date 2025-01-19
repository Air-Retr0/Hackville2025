import { Crumbs } from "@/components/breadcrumbs";
import Sidebar from "@/components/tempolabs/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Resdemics() {
  return (
    <>
      <Sidebar />
      <div className="ml-72">
        <Crumbs />
      </div>
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <Tabs
          defaultValue="links"
          className="w-[600px] rounded-3xl border border-gray-300 bg-white shadow-2xl overflow-hidden"
        >
          <TabsList className="grid grid-cols-3 bg-gray-200 text-lg font-semibold rounded-t-3xl">
            <TabsTrigger value="links" className="py-3 px-4 text-center">Links</TabsTrigger>
            <TabsTrigger value="stats" className="py-3 px-4 text-center">Stats</TabsTrigger>
            <TabsTrigger value="profile" className="py-3 px-4 text-center">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="links">
            <Card className="p-6 rounded-b-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Useful Links</CardTitle>
                <CardDescription className="text-lg">
                  Some helpful resources:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href="#"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Google
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="p-6 rounded-b-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">User Stats</CardTitle>
                <CardDescription className="text-lg">
                  Here's some dummy data:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">Total Views Today: 1,234</p>
                <p className="text-lg">Total Notes Taken: 456</p>
                <p className="text-lg">Assignments Done: 7,890</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="p-6 rounded-b-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Financial Aid</CardTitle>
                <CardDescription className="text-lg">
                  Your Student Information:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">Total Eligible Scholarships: xxx</p>
                <p className="text-lg">Total Eligible Scholarships:: xxx</p>
                <p className="text-lg">Status: 3rd Year Student</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12 text-lg rounded-lg">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
