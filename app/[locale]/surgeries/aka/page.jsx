"use client"

import PageContainer from "@/components/PageContainer";
import SurgeryImages from "../../../../components/SurgeryImages";
import SurgeryPoints from "@/components/SurgeryPoints";
import SurgeryTitle from "@/components/SurgeryTitle";

const images = [{
    sub: "aka.patella",
    before: ["/images/patella/PATELLA_BEFORE.webp"],
    after: ["/images/patella/PATELLA_AFTER1.webp", "/images/patella/PATELLA_AFTER2.webp"]
}, {
    sub: "aka.tibialPlateau",
    before: ["/images/tibialPlateau/TIBIAL_PLATEAU_BEFORE.webp"],
    after: ["/images/tibialPlateau/TIBIAL_PLATEAU_AFTER1.webp", "/images/tibialPlateau/TIBIAL_PLATEAU_AFTER2.webp"]
}, {
    sub: "aka.diastalFemur",
    before: ["/images/diastalFemur/DIASTAL_FEMUR_BEFORE1.webp", "/images/diastalFemur/DIASTAL_FEMUR_BEFORE2.webp"],
    after: ["/images/diastalFemur/DIASTAL_FEMUR_AFTER1.webp", "/images/diastalFemur/DIASTAL_FEMUR_AFTER2.webp"]
}]

export default function AKA() {

    return (
        <PageContainer>
            <div className="px-4">
            <SurgeryTitle title={"aka.title"}/>
            <SurgeryPoints surgeryType={"aka"} numOfPoints={5} />
            <SurgeryTitle title={"aka.subTitle"}/>
            <SurgeryImages images={images} />
            </div>
        </PageContainer>
    )
}