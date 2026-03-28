import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

export default function SessionCard({ session }) {
    const { deleteSession, toggleComplete } = useContext(SessionContext);

    const priorityConfig = {
        High: { bar: "bg-red-500", badge: "bg-red-500/10 text-red-400 border-red-500/20" },
        Medium: { bar: "bg-orange-400", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
        Low: { bar: "bg-emerald-500", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    };

    const p = priorityConfig[session.priority] || priorityConfig.Low;

    return (
        <div
            className={`group relative flex flex-col justify-between bg-[#141414] border border-[#232323] 
        hover:border-[#333] rounded-2xl p-5 h-full transition-all duration-200 
        hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5
        ${session.isCompleted ? "opacity-50" : ""}`}
        >
            {/* Top accent bar */}
            <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-b-full ${p.bar} opacity-70`} />

            {/* Card Top: Subject chip + Priority badge */}
            <div className="flex items-center justify-between mb-4 pt-1">
                <div className="flex gap-3 items-center">
                    <span className="text-xs bg-[#1e1e1e] border border-[#2d2d2d] text-gray-400 px-2.5 py-1 rounded-lg font-medium tracking-wide">
                        {session.subject}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${p.badge}`}>
                        {session.priority}
                    </span>
                </div>

                <div>
                    <button
                        onClick={() => toggleComplete(session.id)}
                        title={session.isCompleted ? "Mark incomplete" : "Mark complete"}
                        className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200  cursor-pointer 
              ${session.isCompleted
                                ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                                : "border-[#2d2d2d] text-gray-600 hover:border-emerald-500/50 hover:text-emerald-300"
                            }`}
                    >
                        <i className={`text-xl ${session.isCompleted ? "ri-checkbox-circle-fill" : "ri-checkbox-blank-circle-line"}`} />
                    </button>
                </div>
            </div>

            {/* Topic */}
            <div className="flex-1 mb-4">
                <h3 className={`text-xl font-bold leading-snug ${session.isCompleted ? "line-through text-gray-500" : "text-white"}`}>
                    {session.topic}
                </h3>
                {session.isCompleted && (
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-2 font-medium">
                        <i className="ri-checkbox-circle-fill" /> Completed
                    </span>
                )}
            </div>

            {/* Bottom row: meta + actions */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#1f1f1f]">
                {/* Meta */}
                <div className="flex items-center gap-2 text-[13px] text-gray-400">
                    <span className="flex items-center gap-1">
                        <i className="ri-time-line text-lg" /> {session.duration}m
                    </span>
                    <span className="text-gray-500">•</span>
                    <span>{session.date}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center">
                    <button
                        onClick={() => deleteSession(session.id)}
                        title="Delete"
                        className="w-7 h-7 rounded-full flex items-center justify-center border border-transparent 
              text-gray-600 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 
              transition-all duration-200 cursor-pointer "
                    >
                        <i className="ri-delete-bin-line text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}