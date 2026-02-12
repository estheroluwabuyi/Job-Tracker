import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../contexts/AuthContext";
import { MdEdit } from "react-icons/md";

function Header() {
  const { user, signOut } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);
  const [newName, setNewName] = useState(user?.user_metadata?.name || "");
  const [loading, setLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error logging out. Please try again.");
    } finally {
      setLogoutLoading(false);
    }
  };

  const updateName = async () => {
    if (!newName.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: { name: newName.trim() },
      });

      if (error) throw error;

      //alert("Name updated successfully!");
toast.success("Name updated successfully!")
      
      setShowEditModal(false);
    } catch (error) {
      //alert(`Error updating name: ${error.message}`);
      toast.error(`Error updating name: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-blue flex justify-between items-center p-8 rounded-t-3xl relative z-1000">
        <h1 className="text-[2rem] font-semibold tracking-wide uppercase font-monda">
          <span className="xs:hidden text-[1.5rem]">Tracker</span>
          <span className="hidden xs:inline sm:hidden text-[1.7rem] ss:text-[2rem]">
            Job Tracker
          </span>
          <span className="hidden sm:inline">Job Application Tracker</span>
        </h1>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => {
                setNewName(user?.user_metadata?.name || "");
                setShowEditModal(true);
              }}
            >
              <div className="w-10.5 h-1.50 bg-white rounded-full grid place-items-center group-hover:bg-blue-100 transition relative">
                <span className="text-blue font-bold group-hover:text-blue-600 text-[1.7rem]">
                  {user?.user_metadata?.name?.[0]?.toUpperCase() || "U"}
                </span>
                <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-px right-0 text-black/70">
                  {" "}
                  <MdEdit />
                </div>
              </div>
            </div>
          </div>

          <button
            disabled={logoutLoading}
            onClick={handleLogout}
            className="px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition uppercase text-[1rem]  font-semibold"
          >
            {logoutLoading ? (
              <>
                <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging out...
              </>
            ) : (
              "Logout"
            )}
          </button>

          <button className="relative w-18 h-10 bg-gray rounded-3xl flex items-center shrink-0">
            <div className="w-9 h-9 bg-background rounded-full absolute right-0 mx-1"></div>
          </button>
        </div>
      </section>

      {/* Edit Name Modal */}
      {showEditModal && (
        <div
          className="fixed inset-0 bg-black/40  backdrop-blur-xs z-500 flex items-center justify-center p-4"
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Edit Your Name
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  autoFocus
                />
                <p className="text-sm text-gray-500 mt-1">
                  This will be displayed throughout the app
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={updateName}
                  disabled={loading || !newName.trim()}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition font-medium"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
