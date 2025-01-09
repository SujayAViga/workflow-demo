
export const initialNodes = [
    {
      id: "1",
      position: { x: -300, y: 0 },
      type:'eventNode',
      sourcePosition: "right",
      targetPosition: "left",
    },
    {
      id: "2",
      position: { x: 0, y: 0 },
      type:'conditionNode',
      sourcePosition: "right",
      targetPosition: "left",
    },
    {
      id: "3",
      position: { x: 300, y: 0 },
      type:'actionNode',
      sourcePosition: "right",
      targetPosition: "left",
    },
    {
      id: "4",
      position: { x: 700, y: 0 },
      type:'generateNode',
      sourcePosition: "right",
      targetPosition: "left",
    },
  ];