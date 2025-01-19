import { Crumbs } from "@/components/breadcrumbs"
import { Section } from "@/components/sections"
import Sidebar from "@/components/tempolabs/sidebar"
import { AIChat } from "@/components/textbox"

const Home = () => {
  return (
    <>
      <div className="ml-72">
        <Crumbs />
      </div>
      <Sidebar />
      <Section />
      <AIChat />
    </>
  )
}

export default Home