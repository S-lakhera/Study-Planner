import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  // Initialize state with an empty array
  const [sessions, setSessions] = useState(() => JSON.parse(localStorage.getItem("sessions")) || [] );
  const [isFormVisible, setIsFormVisible] = useState(false)

  useEffect(() => {
    localStorage.setItem("sessions",JSON.stringify(sessions))
  }, [sessions])

  const addSession = (session) => {
    setSessions((prev) => [session, ...prev]);
  };

  const deleteSession = (id) => {
    const filteredSessionList = sessions.filter((elem) => elem.id !== id);
    setSessions(filteredSessionList);
  };

  // BONUS FEATURE: Toggle completion status
  const toggleComplete = (id) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === id ? { ...session, isCompleted: !session.isCompleted } : session
      )
    );
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession, deleteSession, toggleComplete, isFormVisible, setIsFormVisible }}>
      {children}
    </SessionContext.Provider>
  );
};