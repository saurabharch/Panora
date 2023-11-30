import { MainNav } from "./components/main-nav"
import TeamSwitcher from "./components/team-switcher"
import { UserNav } from "./components/user-nav"
import { useState } from "react"
import JobsPage from "../jobs"
import ConnectionsPage from "../connections"
import MainPage from "../main-component"
import ConfigurationPage from "../configuration"
import ApiKeysPage from "../api-keys"
import QuickStartPage from "../quickstart"

export default function DashboardPage() {
  const [activePage, setActivePage] = useState('dashboard');

  let ContentComponent;
  switch (activePage) {
    case 'quickstart':
      ContentComponent = QuickStartPage;
      break;
    case 'jobs':
      ContentComponent = JobsPage;
      break;
    case 'connections':
      ContentComponent = ConnectionsPage;
      break;
    case 'configuration':
      ContentComponent = ConfigurationPage;
      break;
    case 'dashboard':
      ContentComponent = MainPage;
      break;
    case 'api-keys':
      ContentComponent = ApiKeysPage;
      break;
    default:
      ContentComponent = MainPage; // The default page content
  }
  return (
    <>
      <div className="flex">
        <div className="flex items-center lg:flex-col border-r fixed left-0 bg-opacity-90 backdrop-filter backdrop-blur-lg w-[200px] h-screen">
          <div className="flex lg:flex-col items-center py-4 space-y-4">
            <img src="logo.png" className="w-16"/> <span className="font-bold">Panora.</span>
            <TeamSwitcher className="w-40" />
            <MainNav className="flex lg:flex-col mx-auto w-[200px] space-y-0" onLinkClick={setActivePage} />
            <div className="ml-auto flex lg:flex-col items-center space-x-4 w-full">
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 pt-6 px-10 ml-[200px]">
          <ContentComponent/>
        </div>
      </div>
    </>
  )
}