"use client"

import PageContainer from "@/components/PageContainer";
import SurgeryImages from "../../../../components/SurgeryImages";
import SurgeryPoints from "@/components/SurgeryPoints";
import SurgeryTitle from "@/components/SurgeryTitle";

const images = [{
    sub: "ankleFoot.calcaneus",
    before: ["/images/calcaneus/before.webp"],
    after: ["/images/calcaneus/after1.webp", "/images/calcaneus/after2.webp"]
}, {
    sub: "ankleFoot.ankleFracture",
    before: ["/images/ankleFracture/before1.webp", "/images/ankleFracture/before2.webp"],
    after: ["/images/ankleFracture/after1.webp"]
}]

export default function AF() {

    return (
        <PageContainer>
            <div className="px-4">
            <SurgeryTitle title={"ankleFoot.title"}/>
            <SurgeryPoints surgeryType={"ankleFoot"} numOfPoints={6} />
            <SurgeryTitle title={"ankleFoot.subTitle"}/>
            <SurgeryImages images={images} />
            </div>
        </PageContainer>
    )
}