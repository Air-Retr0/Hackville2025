import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = () => {
  const [code, setCode] = useState(`const hello = "world";`);
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = eval(code);
      setOutput(String(result));
    } catch (error) {
      setOutput(String(error));
    }
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ height: "400px", width: "600px", border: "1px solid gray" }}>
        <MonacoEditor
          language="javascript"
          value={code}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
            theme: "vs-dark",
          }}
          onChange={(newCode) => newCode !== undefined && setCode(newCode)}
        />
      </div>

      <button onClick={runCode} style={{ padding: "10px 20px", backgroundColor: "#007acc", color: "#fff", border: "none", cursor: "pointer" }}>
        Run Code
      </button>

      <div style={{ padding: "10px", border: "1px solid gray", backgroundColor: "#f4f4f4", height: "200px", overflow: "auto" }}>
        <h4>Output:</h4>
        <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
      </div>
    </div>
  );
};

export default Editor;
