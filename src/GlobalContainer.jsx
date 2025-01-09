import { createContext, useState } from 'react'

// Create a context
const GlobalContext = createContext();

// Create a provider component
const GlobalProvider = ({ children }) => {
    const [wirId, setWirId] = useState()
    const [orgId, setOrgId] = useState()
    const [status, setStatus] = useState()
    const [email, setEmail] = useState()
    const [Role, setRole] = useState()
    const [conditionOutput, setConditionOutput] = useState()
    const [workflowData, setWorkflowData] = useState([]);

    const contextValue = {
        wirId, setWirId,
        orgId, setOrgId,
        status, setStatus,
        email, setEmail,
        Role, setRole,
        conditionOutput, setConditionOutput,
        workflowData, setWorkflowData
    }
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };