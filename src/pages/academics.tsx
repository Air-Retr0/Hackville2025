import Sidebar from "@/components/tempolabs/sidebar"
import { Crumbs } from "@/components/breadcrumbs"
import CardGrid from "@/components/cardgrid"


const Academic = () => {
  return (
    <>
      <div className="ml-72">
        <Crumbs />
      </div>
      <Sidebar />
      <div className="flex items-center justify-center">
        <CardGrid />
      </div>
    </>
  )
}

export default Academic 
