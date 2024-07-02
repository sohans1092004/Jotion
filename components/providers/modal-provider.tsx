"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../models/settings-modal";
import { CoverImageModal } from "@/components/models/cover-image-modal";

export const ModalProvider = () => {
    const [isMounted, setisMounted] = useState(false);

    useEffect(() => {
        setisMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    return (
        <>
            <SettingsModal />
            <CoverImageModal/>
        </>
    )
}