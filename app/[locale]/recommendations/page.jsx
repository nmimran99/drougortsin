"use client"

import PageContainer from "../../../components/PageContainer";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";

export default function Recommendations() {

    const t = useTranslations("Index");

    const images = useMemo(() => [
        "/images/recommendations/1.webp",
        "/images/recommendations/2.webp",
        "/images/recommendations/3.webp",
        "/images/recommendations/4.webp",
        "/images/recommendations/5.webp",
        "/images/recommendations/6.webp",
        "/images/recommendations/7.webp",
        "/images/recommendations/8.webp",
    ], []);

    return (
        <PageContainer>
             <motion.div
                initial={{ opacity: 0, translateX: 20 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl py-8"
                >
                {t("patientsTell")}
                </motion.div>
                <motion.div 

                    className="rounded-xl"
                >
                    <iframe 
                        className="rounded-xl w-full lg:w-3/4 mx-auto"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/zGddnXLF8w8?si=-5SuNfHhqjBYLUv6" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    />
                </motion.div>
                <div className="w-full flex flex-wrap gap-4 my-4 px-8 relative">    
                    {
                        images.map((image, i) => 
                            <img
                                key={i} 
                                src={image}
                                height="400"
                                width="400"
                                className="rounded-xl object-contain w-full"

                            />
                        )
                    }
                </div>
                
        </PageContainer>
    )
}