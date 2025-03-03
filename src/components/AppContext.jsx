import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function ContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [events, setEvents] = useState([
    {
      eventName: "Andrew's birthday",
      date: "2025-03-03",
      time: "19:00",
      description: "party with everyone",
      location: "Home",
    },
    {
      eventName: "Anthony's birthday",
      date: "2025-07-16",
      time: "20:00",
      description: "dknckde; ",
      location: "France",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        userName,
        setUserName,
        events,
        setEvents,
        showCreateForm,
        setShowCreateForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useVariable() {
  return useContext(AppContext);
}
