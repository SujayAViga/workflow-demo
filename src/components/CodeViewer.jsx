import React, { useContext, useState } from 'react';
import { GlobalContext } from '../GlobalContainer';

function CodeViewer({ initialCode }) {
    const {workflowData} = useContext(GlobalContext)
    const [code, setCode] = useState(JSON.stringify(workflowData) || ''); // Initialize with prop or empty string
    const [formattedCode, setFormattedCode] = useState('');
    const [error, setError] = useState(null);

    React.useEffect(() => {
        setCode(JSON.stringify(workflowData) || ''); // Update code when workflowData changes
    }, [workflowData]);

    React.useEffect(() => {
        if (code) {
            try {
                const parsedCode = JSON.parse(code);
                setFormattedCode(JSON.stringify(parsedCode, null, 2));
                setError(null); // Clear any previous errors
            } catch (err) {
                setFormattedCode(''); // Clear formatted code on error
                setError(err.message || "Invalid JSON");
            }
        } else {
          setFormattedCode('');
          setError(null);
        }
    }, [code]);

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div style={{overflow:'scroll'}}>
            {error && <div style={{ color: 'red' }}>Error: {error}</div>} {/* Display error message */}
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                {formattedCode}
            </pre>
        </div>
    );
}

export default CodeViewer;