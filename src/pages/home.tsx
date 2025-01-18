import { ColorChart } from "@/components/chart";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/tempolabs/sidebar";

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ColorChart />
    </>
  );
}

export default Home;
