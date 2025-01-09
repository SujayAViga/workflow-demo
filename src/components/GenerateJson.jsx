import { Handle, Position } from "@xyflow/react";

function GenerateJson() {
    const customNodeContainerStyle = {
        height:'fit-content',
        backgroundColor:'white',
        borderRadius:'5px',
        fontSize:'10px',
        display:'flex',
        flexDirection:'column',
        padding:'10px'
    }



  return (
    <div style={customNodeContainerStyle}>
        <Handle type="target" position={Position.Left} id="b"/>
      <label htmlFor="text" style={{fontWeight:'600'}}>Generate JSON</label>

    </div>
  )
}

export default GenerateJson