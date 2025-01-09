import { Handle, Position } from "@xyflow/react"
import { useCallback, useContext, } from "react";
import { GlobalContext } from "../GlobalContainer";

function Event() {
    const {setOrgId,setWirId} = useContext(GlobalContext)
    const customNodeContainerStyle = {
        height:'fit-content',
        backgroundColor:'white',
        borderRadius:'5px',
        fontSize:'10px',
        display:'flex',
        flexDirection:'column',
        padding:'10px'
    }

    const onChange = useCallback((evt) => {
        if(evt.target.name==="orgid"){
            setOrgId(evt.target.value)
            return;
        }
        setWirId(evt.target.value)
      }, []);
    
    
  return (
    <div style={customNodeContainerStyle}>
      <label htmlFor="text" style={{fontWeight:'600'}}>Event</label>
      <div style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="text">Org Id</label>
        <input id="text" name="orgid" onChange={onChange} className="nodrag" />
        <label htmlFor="text">WIR Id</label>
        <input id="text" name="wirid" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  )
}

export default Event