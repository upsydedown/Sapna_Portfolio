import React, { useState } from "react";
import "./DownloadButton.css";

function DownloadButton() {
  const [fileName, setFileName] = useState("Sapna Gupta (UI/UX).pdf"); // Replace with your actual file name and extension

  const handleClick = async () => {
    const resumeBlob = await fetch("./Sapna_Gupta (UIUX Designer).pdf"); // Replace with your resume URL or data

    if (!resumeBlob.ok) {
      throw new Error("Failed to fetch resume");
    }

    const blobUrl = URL.createObjectURL(await resumeBlob.blob());
    const link = document.createElement("a");

    link.href = blobUrl;
    link.setAttribute("download", fileName);
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(blobUrl);
  };

  return <button onClick={handleClick}>Resume</button>;
}

export default DownloadButton;
