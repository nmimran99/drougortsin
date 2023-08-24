"use client";

import { useTranslations } from "next-intl";
import ImagesContainer from "./ImagesContainer";

export default function SurgeryImages({ images }) {
  const t = useTranslations("Surgeries");

  return (
    <div>
      {images.map((obj, i) => (
        <div key={i} className="my-8 border-t border-b border-gray-300 md:border md:rounded-xl bg-accent shadow-xl">
          {obj.sub != "" && <div className="text-xl text-white bg-primary md:rounded-t-xl p-4 ">{t(obj.sub)}</div>}
          <div className="flex flex-wrap justify-start p-4 gap-3  md:grid md:grid-cols-2">
            <ImagesContainer title={t("beforeSurgery")} images={obj.before} />
            <ImagesContainer title={t("afterSurgery")} images={obj.after} />
          </div>
        </div>
      ))}
    </div>
  );
}

