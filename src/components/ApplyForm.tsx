// components/ApplyForm.tsx
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

type ApplyFormProps = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  homeLink?: string; // Optional prop for home link
};

const ApplyForm: React.FC<ApplyFormProps> = ({ showForm, setShowForm, homeLink }) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg max-w-lg w-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => {
                  // Close the form and redirect to home
                setShowForm(false);
                  router.push(homeLink ?? "/");
               }
              }
              
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">Apply For Me</h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Resume Link</label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Job Preferences</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyForm;
