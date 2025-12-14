import Header from "./Header";
import StatusBar from "./StatusBar";
import EmptyHomepage from "./EmptyHomepage";
import AddJob from "./AddJob";
import { useJob } from "../contexts/JobContext";
import Homepage from "./Homepage";

function AppContent() {
  const { toggleHomepage } = useJob();

  return (
    <div className="rounded-3xl">
      {/* Header */}
      <Header />

      {/* Main Content  */}
      <div className="p-10 flex flex-col">
        {toggleHomepage ? (
          <EmptyHomepage />
        ) : (
          <>
            <StatusBar /> <Homepage />
          </>
        )}
        <AddJob />
      </div>
    </div>
  );
}

export default AppContent;
