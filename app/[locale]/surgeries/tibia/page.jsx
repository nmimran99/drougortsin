"use client"

import PageContainer from "@/components/PageContainer";
import SurgeryImages from "../../../../components/SurgeryImages"
import SurgeryPoints from "@/components/SurgeryPoints";
import SurgeryTitle from "@/components/SurgeryTitle";

const images = [{
    sub: "",
    before: ["/images/tibia/TIBIA_BEFORE.webp"],
    after: ["/images/tibia/TIBIA_AFTER1.webp", "/images/tibia/TIBIA_AFTER2.webp"]
}]

export default function Tibia() {

    return (
        <PageContainer>
            <div className="px-4">
            <SurgeryTitle title={"tibia.title"}/>
            <SurgeryPoints surgeryType={"tibia"} numOfPoints={2} />
            <SurgeryTitle title={"tibia.subTitle"}/>
            <SurgeryImages images={images} />
            </div>
        </PageContainer>
    )
}