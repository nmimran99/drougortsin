"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SurgeryPoints({ surgeryType, numOfPoints }) {
  const t = useTranslations("Surgeries");

  return (
    <div>
      {Array.from({ length: numOfPoints }).map((g, i) => (
        <div className="flex my-2 text-lg items-start" key={i}>
          <Image
            src="/icons/CheckCircle.svg"
            alt="checkIcon"
            width="24"
            height="24"
            className="mx-4 my-1"
          />
          <div>{t(`${surgeryType}.points.${i + 1}`)}</div>
        </div>
      ))}
    </div>
  );
}
