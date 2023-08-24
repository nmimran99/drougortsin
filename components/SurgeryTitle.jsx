'use client'

import { useTranslations } from "next-intl";

export default function SurgeryTitle({ title }) {
    const t = useTranslations("Surgeries");

    return <div className="text-2xl font-normal pt-10 pb-6">
        {t(`${title}`)}
    </div>
}