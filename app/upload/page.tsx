"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState("");

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt="uploaded image" />}
            <CldUploadWidget
                uploadPreset="cpj6ywds"
                onSuccess={(result) => {
                    const info = result.info as CloudinaryResult;
                    console.log("Uploaded Image Public ID:", info.public_id);
                    setPublicId(info.public_id);
                }}
            >
                {({ open }) => (
                    <button className="btn btn-primary" onClick={() => open()}>
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
