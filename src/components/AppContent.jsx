import Header from "./Header";
import StatusBar from "./StatusBar";
import EmptyHomepage from "./EmptyHomepage";
import AddJob from "./AddJob";
import { useJob } from "../contexts/JobContext";
import Homepage from "./Homepage";
import AddJobModal from "./AddJobModal";

function AppContent() {
  const { jobData, showModal, setShowModal } = useJob();

  return (
    <div className="rounded-3xl">
      {/* Header */}
      <Header />

      {/* Main Content  */}
      <div className="p-10 flex flex-col">
        {jobData.length === 0 ? (
          <EmptyHomepage />
        ) : (
          <>
            <StatusBar /> <Homepage />
          </>
        )}

        {showModal === true && <AddJobModal />}

        <AddJob />
      </div>
    </div>
  );
}

export default AppContent;
