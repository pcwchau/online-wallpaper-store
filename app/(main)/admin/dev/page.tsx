"use client";
import { uploadInspirationImages } from "@/api/api";
import React, { useState } from "react";

export default function Page() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
      setUploadResult(null);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setUploadResult(null);

    const response = await uploadInspirationImages(selectedFiles);

    setUploading(false);

    if (response) {
      setUploadResult(response);
    } else {
      setUploadResult("Upload failed or timed out.");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div>Upload Inspiration Images</div>
      <input
        type="file"
        name="images"
        // webkitdirectory="true"
        // directory=""
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="border"
      />
      <button
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0}
        className="px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploadResult && (
        <p className="text-sm text-center text-gray-700">{uploadResult}</p>
      )}
    </div>
  );
}
