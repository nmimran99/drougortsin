"use client"

import PageContainer from "@/components/PageContainer";
import SurgeryImages from "../../../../components/SurgeryImages";
import SurgeryPoints from "@/components/SurgeryPoints";
import SurgeryTitle from "@/components/SurgeryTitle";

const images = [{
    sub: "afa.subMajorReplacement",
    before: ["/images/subMajorReplacement/before.webp"],
    after: ["/images/subMajorReplacement/after.webp"]
}, {
    sub: "afa.subMajorRestoration",
    before: ["/images/subMajorRestoration/before.webp"],
    after: ["/images/subMajorRestoration/after1.webp", "/images/subMajorRestoration/after2.webp"]
}]

export default function AFA() {

    return (
        <PageContainer>
            <div className="px-4">
            <SurgeryTitle title={"afa.title"}/>
            <SurgeryPoints surgeryType={"afa"} numOfPoints={6} />
            <SurgeryTitle title={"afa.subTitle"}/>
            <SurgeryImages images={images} />
            </div>
        </PageContainer>
    )
}