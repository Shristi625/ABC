import React from "react";
import html2pdf from "html2pdf.js";

const ShareDownload = ({ title = "Diary", elementId = "diary-content" }) => {
  const safeFilename = (s) => s.replace(/[^a-z0-9\-_.]/gi, "_");

  const handleDownload = async () => {
    try {
      const element = document.getElementById(elementId) || document.body;
      const opt = {
        margin: 0.5,
        filename: `${safeFilename(title)}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf().set(opt).from(element).save();
    } catch (e) {
      console.error("PDF generation failed", e);
      alert("Failed to generate PDF. Try again.");
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    const text = `${title} — Read my travel diary on TravelDiaries`;
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (e) {
        console.warn("Share canceled or failed", e);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard. You can paste it to share.");
      } catch (e) {
        console.warn("Clipboard write failed", e);
        prompt("Copy this link to share:", url);
      }
    } else {
      prompt("Copy this link to share:", url);
    }
  };

  return (
    <>
      <button className="action-btn secondary-btn" onClick={handleDownload}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
        </svg>
        Download PDF
      </button>

      <button className="action-btn share-btn" onClick={handleShare}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
        </svg>
        Share Story
      </button>
    </>
  );
};

export default ShareDownload;
