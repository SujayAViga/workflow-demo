import { Handle, Position } from "@xyflow/react";
import { useCallback, useContext } from "react";
import { GlobalContext } from "../GlobalContainer";

function Condition() {
  const {status, setStatus} = useContext(GlobalContext)
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
      if(evt.target.name==="status"){
        setStatus(evt.target.value)
          return;
      }
    }, []);


  return (
    <div style={customNodeContainerStyle}>
        <Handle type="target" position={Position.Left} id="b"/>
      <label htmlFor="text" style={{fontWeight:'600'}}>Condition</label>
      <div style={{display:'flex', flexDirection:'column'}}>
        <label htmlFor="text">Check for status</label>
        <input id="status" name="status" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Right} id="a" />
    </div>
  )
}

export default Condition