import { Handle, Position } from "@xyflow/react";
import { useCallback, useContext } from "react";
import { GlobalContext } from "../GlobalContainer";

function Action() {
    const {setEmail,wirId, setRole} = useContext(GlobalContext)
    const customNodeContainerStyle = {
        height:'fit-content',
        backgroundColor:'white',
        borderRadius:'5px',
        fontSize:'10px',
        display:'flex',
        flexDirection:'column',
        padding:'10px',
        gap:'10px'
    }

    const onChange = useCallback((evt) => {
      if(evt.target.name==="status"){
        setEmail(evt.target.value)
          return;
      }
      if(evt.target.name==="role"){
        setRole(evt.target.value)
          return;
      }
      if(evt.target.name==="email"){
        setEmail(evt.target.value)
          return;
      }
    }, []);

  return (
    <div style={customNodeContainerStyle}>
        <Handle type="target" position={Position.Left} id="b"/>
        
      <label htmlFor="text" style={{fontWeight:'600'}}>Assign to User</label>
      <div style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="text">Role</label>
        <input id="text" name="role" onChange={onChange} className="nodrag" />
        <label htmlFor="text">Email Id</label>
        <input id="text" name="email" onChange={onChange} className="nodrag" />
        <label htmlFor="text">WIR id</label>
        <input disabled id="text" name="wirid" onChange={onChange} value={wirId} className="nodrag" />
        <br/>
        <button>Generate full json</button>
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  )
}

export default Action