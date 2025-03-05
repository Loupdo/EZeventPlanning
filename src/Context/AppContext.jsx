import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function ContextProvider({ children }) {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [userName, setUserName] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [events, setEvents] = useState([]);

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
