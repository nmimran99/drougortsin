"use client"
import { useTranslations } from "next-intl";
import DetailsCard from "./DetailsCard";
import Image from "next/image";
import Link from "next/link";
import CommunicationDetails from "./CommunicationDetails";

export default function Footer() {

    const t = useTranslations("Index")

    return (
        <div className="w-full h-96 bg-gray-800 flex flex-col items-center mt-12
            md:flex-row md:justify-center md:gap-6
        ">
            <div className="py-8">
                <DetailsCard className="text-white border-white"/>
            </div>
            <div className="w-[380px]">
                <CommunicationDetails />
            </div>
        </div>
    )
}