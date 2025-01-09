import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  MiniMap,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { initialNodes } from "./initialNode";
import Event from "./Event";
import Condition from "./Condition";
import Action from "./Action";
import { GlobalContext } from "../GlobalContainer";
import GenerateJson from "./GenerateJson";

const nodeTypes = {
  eventNode: Event,
  conditionNode: Condition,
  actionNode: Action,
  generateNode: GenerateJson
};

function Workflow() {
  const { email, orgId, wirId, Role, status, workflowData, setWorkflowData } =
    useContext(GlobalContext);

  useEffect(() => {
    console.log(orgId);
  }, [orgId]);

  const graphContainerStyle = {
    color: "black",
    border: "2px solid #000000",
    width: "80vw",
    height: "100vh",
  };
  const [edges, setEdges] = useState([]);
  const [nodes, setNodes] = useState(initialNodes);

  useEffect(() => {
    console.log(workflowData);
  }, [workflowData]);

  const generateJson = useCallback(
    (p) => {
      console.log("Source:", p.source);
      if (p.source === "1") {
        console.log("Source:", p.source);
        setWorkflowData((previousData) => [
          ...previousData,
          {
            id: "event_002",
            Type: "Event",
            Node: "event",
            order: "1",
            inputs: {
              wir_id: wirId,
              org_id: orgId,
            },
            outputs: [""],
          },
        ]);
      }
      if (p.source === "2") {
        console.log("Source:", p.source);
        setWorkflowData((previousData) => [
          ...previousData,
          {
            id: "condition_if_002",
            Type: "Condition",
            Node: "condition_if",
            order: "2",
            inputs: {
              status: status,
            },
            outputs: [""],
          },
        ]);
      }
      if (p.source === "3") {
        console.log("Source:", p.source);
        setWorkflowData((previousData) => [
          ...previousData,
          {
            "id": "action_assign_to_user_002",
            "Type": "Action",
            "Node": "assign_to_user",
            "order": "3",
            "inputs": {
                wir_id: wirId,
                email_id: email,
                role: Role
            },
            "outputs": [
                ""
            ]
        }
        ]);
      }
    },
    [orgId, wirId, email, Role, status]
  );

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge({ ...params, animated: true }, eds));
      generateJson(params);
    },
    [setEdges, generateJson]
  );

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <div style={graphContainerStyle}>
      <ReactFlow
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodes={nodes}
        edges={edges}
      >
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default Workflow;
