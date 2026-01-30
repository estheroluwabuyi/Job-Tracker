import Header from "./Header";
import StatusBar from "./StatusBar";
import EmptyHomepage from "./EmptyHomepage";
import AddJob from "./AddJob";
import { useJob } from "../contexts/JobContext";
import Homepage from "./Homepage";
import AddJobModal from "./AddJobModal";
import WelcomeBanner from "./WelcomeBanner";

function AppContent() {
  const { jobData, showModal } = useJob();

  return (
    <div className="rounded-3xl">
      <Header />

      <div className="p-10 flex flex-col">
        {jobData.length === 0 ? (
          <EmptyHomepage />
        ) : (
          <>
            <WelcomeBanner />
            <StatusBar />
            <Homepage />
          </>
        )}

        {showModal && <AddJobModal />}

        <AddJob />
      </div>
    </div>
  );
}

export default AppContent;
