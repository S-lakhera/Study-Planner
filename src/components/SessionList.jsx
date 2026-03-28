import { useContext, useState } from "react";
import SessionCard from "./SessionCard";
import { SessionContext } from "../context/SessionContext";

export default function SessionList() {
  const { sessions } = useContext(SessionContext);
  const [filterSubject, setFilterSubject] = useState("All");

  const subjects = ["All", "DSA", "Web Dev", "DBMS", "OS", "Other"];

  const filteredSessions =
    filterSubject === "All"
      ? sessions
      : sessions.filter((s) => s.subject === filterSubject);

  const completed = filteredSessions.filter((s) => s.isCompleted).length;

  return (
    <div className="w-full max-w-4xl 2xl:max-w-6xl mx-auto mt-4 px-4">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-black text-white tracking-tight">Your Sessions</h2>

        {/* Progress bar */}
        {filteredSessions.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>{completed} of {filteredSessions.length} completed</span>
              <span>{Math.round((completed / filteredSessions.length) * 100)}%</span>
            </div>
            <div className="w-full h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
              <div
                className="h-1 bg-indigo-500 rounded-full transition-all duration-700"
                style={{ width: `${(completed / filteredSessions.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Filter Pills */}
      {filteredSessions.length > 0 &&
        <div className="flex flex-wrap gap-2 mb-6">
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setFilterSubject(sub)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border
              ${filterSubject === sub
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/40"
                  : "bg-transparent border-[#2d2d2d] text-gray-500 hover:border-gray-500 hover:text-gray-200"
                }`}
            >
              {sub}
            </button>
          ))}
        </div>
      }

      {/* Card Grid */}
      {filteredSessions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredSessions.map((session, i) => (
            <div
              key={session.id}
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-fadeIn"
            >
              <SessionCard session={session} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🗂️</p>
          <p className="text-gray-500 text-sm">
            No sessions found at <span className="text-gray-300">{filterSubject}</span>.
          </p>
        </div>
      )}
    </div>
  );
}