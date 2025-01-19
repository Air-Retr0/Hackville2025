import Sidebar from "@/components/tempolabs/sidebar"
import { AcademicCalendar } from "@/components/calander"
import { Crumbs } from "@/components/breadcrumbs"

const Scheduling = () => {
  return (
    <>
      <div className="ml-72">
        <Crumbs />
      </div>
      <Sidebar />
      <AcademicCalendar />
    </>
  )
}

export default Scheduling 