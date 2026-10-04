import {Navbar} from "@/app/components/navbar"
import {BugReportForm} from "@/app/components/newTicket"

export default function Home() {
  return (
    <div >
      <Navbar />
        <BugReportForm/>
    </div>
  );
}
