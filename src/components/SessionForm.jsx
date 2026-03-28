import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SessionContext } from "../context/SessionContext";

export default function SessionForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { addSession, setIsFormVisible } = useContext(SessionContext);

    const onSubmit = (data) => {
        const newSession = { id: nanoid(), isCompleted: false, ...data };
        addSession(newSession);
        reset();
        setIsFormVisible(false);
    };

    return (
        <div
            id="modal"
            onClick={(e) => { if (e.target.id === "modal") setIsFormVisible(false); }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
            {/* Modal Panel */}
            <div className="w-full max-w-md bg-[#111] border border-[#2a2a2a] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">

                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f1f]">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-0.5">Study Planner</p>
                        <h2 className="text-lg font-black text-white tracking-tight">New Session</h2>
                    </div>
                    <button
                        onClick={() => setIsFormVisible(false)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#222] border border-transparent hover:border-[#333] transition-all duration-200"
                    >
                        <i className="ri-close-line text-base" />
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-5 flex flex-col gap-4">

                    {/* Topic */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Topic</label>
                        <input
                            type="text"
                            {...register("topic", { required: true })}
                            placeholder="e.g., React Context API"
                            className={`w-full bg-[#181818] border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200
                                focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30
                                ${errors.topic ? "border-red-500/60" : "border-[#2d2d2d]"}`}
                        />
                        {errors.topic && (
                            <span className="text-red-400 text-xs flex items-center gap-1">
                                <i className="ri-error-warning-line" /> Topic is required
                            </span>
                        )}
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Subject</label>
                        <select
                            {...register("subject", { required: true })}
                            className={`w-full bg-[#181818] border rounded-lg px-3 py-2.5 text-sm text-white outline-none transition-all duration-200
                                focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30
                                ${errors.subject ? "border-red-500/60" : "border-[#2d2d2d]"}`}
                        >
                            <option value="">Select a subject</option>
                            <option value="DSA">DSA</option>
                            <option value="Web Dev">Web Dev</option>
                            <option value="DBMS">DBMS</option>
                            <option value="OS">OS</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.subject && (
                            <span className="text-red-400 text-xs flex items-center gap-1">
                                <i className="ri-error-warning-line" /> Subject is required
                            </span>
                        )}
                    </div>

                    {/* Duration + Priority side by side */}
                    <div className="flex gap-3">
                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Duration (mins)</label>
                            <input
                                type="number"
                                {...register("duration", { required: true, min: 10 })}
                                placeholder="Min 10"
                                className={`w-full bg-[#181818] border rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200
                                    focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30
                                    ${errors.duration ? "border-red-500/60" : "border-[#2d2d2d]"}`}
                            />
                            {errors.duration && (
                                <span className="text-red-400 text-xs flex items-center gap-1">
                                    <i className="ri-error-warning-line" /> Min 10 mins
                                </span>
                            )}
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Priority</label>
                            <select
                                {...register("priority")}
                                className="w-full bg-[#181818] border border-[#2d2d2d] rounded-lg px-3 py-2.5 text-sm text-white outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30"
                            >
                                <option value="Low">🟢 Low</option>
                                <option value="Medium">🟠 Medium</option>
                                <option value="High">🔴 High</option>
                            </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col gap-1">
                        <label className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold">Date</label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className={`w-full bg-[#181818] border rounded-lg px-3 py-2.5 text-sm text-white outline-none transition-all duration-200
                                focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30
                                [color-scheme:dark]
                                ${errors.date ? "border-red-500/60" : "border-[#2d2d2d]"}`}
                        />
                        {errors.date && (
                            <span className="text-red-400 text-xs flex items-center gap-1">
                                <i className="ri-error-warning-line" /> Date is required
                            </span>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex gap-3 mt-1">
                        <button
                            type="button"
                            onClick={() => setIsFormVisible(false)}
                            className="flex-1 py-2.5 rounded-lg border border-[#2d2d2d] text-gray-400 text-sm font-semibold hover:border-[#444] hover:text-gray-200 transition-all duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-indigo-900/40 active:scale-[0.98]"
                        >
                            Add Session
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}