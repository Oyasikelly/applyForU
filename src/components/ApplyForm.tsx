// components/ApplyForm.tsx
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

type ApplyFormProps = {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  homeLink?: string;
};

const ApplyForm: React.FC<ApplyFormProps> = ({
  showForm,
  setShowForm,
  homeLink,
}) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-md sm:max-w-xl relative overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl transition"
              onClick={() => {
                setShowForm(false);
                router.push(homeLink ?? "/");
              }}
              aria-label="Close"
            >
              &times;
            </button>

            <h3 className="text-3xl font-bold mb-6 text-center text-indigo-700">
              Apply For Me
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  Resume Link
                </label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  Job Preferences
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
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
