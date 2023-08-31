"use client"

import PageContainer from "@/components/PageContainer";
import ImagesContainer from "../../../../components/ImagesContainer";
import SurgeryPoints from "@/components/SurgeryPoints";
import SurgeryTitle from "@/components/SurgeryTitle";
import { useTranslations } from "next-intl";

const obj = {
    sub: "laterComplications.boneless",
    before: ["/images/boneless/before1.webp"],
    during: ["/images/boneless/during.webp"],
    after: ["/images/boneless/after1.webp"]
}

export default function AF() {

    const t = useTranslations("Surgeries");

    return (
        <PageContainer>
            <div className="px-4">
            <SurgeryTitle title={"laterComplications.title"}/>
            <SurgeryPoints surgeryType={"laterComplications"} numOfPoints={3} />
            <SurgeryTitle title={"laterComplications.subTitle"}/>
            <div className="my-8 border-t border-b border-gray-300 md:border md:rounded-xl bg-accent shadow-xl">
                {obj.sub != "" && <div className="text-xl text-white bg-primary md:rounded-t-xl p-4 ">{t(obj.sub)}</div>}
                <div className="flex flex-wrap justify-start p-4 gap-3  md:grid md:grid-cols-2">
                    <ImagesContainer title={t("laterComplications.beforeTreatment")} images={obj.before} />
                    <ImagesContainer title={t("laterComplications.duringTreatment")} images={obj.during} />
                    <ImagesContainer title={t("laterComplications.afterTreatment")} images={obj.after} />
                </div>
                </div>
            </div>
        </PageContainer>
    )
}