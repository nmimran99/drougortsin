"use client"

import PageContainer from "@/components/PageContainer";
import SurgeryImages from "../../../../components/SurgeryImages";
import SurgeryPoints from "@/components/SurgeryPoints";
import SurgeryTitle from "@/components/SurgeryTitle";

const images = [{
    sub: "children.ankle13",
    before: ["/images/ankle13/before1.webp", "/images/ankle13/before2.webp"],
    after: ["/images/ankle13/after1.webp", "/images/ankle13/after2.webp"]
}, {
    sub: "children.elbow3",
    before: ["/images/elbow3/before.webp"],
    after: ["/images/elbow3/after.webp"]
}, {
    sub: "children.forearm12",
    before: ["/images/forearm12/before1.webp", "/images/forearm12/before2.webp"],
    after: ["/images/forearm12/after1.webp", "/images/forearm12/after2.webp"]
}]

export default function ChildrenPage() {

    return (
        <PageContainer>
            <div className="px-4">
            <SurgeryTitle title={"children.title"}/>
            <SurgeryPoints surgeryType={"children"} numOfPoints={4} />
            <SurgeryTitle title={"children.subTitle"}/>
            <SurgeryImages images={images} />
            </div>
        </PageContainer>
    )
}