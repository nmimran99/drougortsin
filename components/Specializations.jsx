import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useInView, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const specs = [
  {
    icon: "/icons/CheckCircle.svg",
    name: "specializations.longBones",
    alt: "Long Bones Break",
    path: "/surgeries/tb",
  },
  {
    icon: "/icons/CheckCircle.svg",
    name: "specializations.femurNeck",
    alt: "Femur Neck Breaks",
    path: "/surgeries/afa",
  },
  {
    icon: "/icons/CheckCircle.svg",
    name: "specializations.aroundFemur",
    alt: "Around Femur Joint Breaks",
    path: "/surgeries/afa",
  },
  {
    icon: "/icons/CheckCircle.svg",
    name: "specializations.aroundKnee",
    alt: "Around Knee Joint Breaks",
    path: "/surgeries/aka",
  },
  {
    icon: "/icons/CheckCircle.svg",
    name: "specializations.pika",
    alt: "Knee Cap Breaks",
    path: "/surgeries/aka",
  },
  {
    icon: "/icons/CheckCircle.svg",
    name: "specializations.ankleFoot",
    alt: "Knee Cap Breaks",
    path: "/surgeries/af",
  },
];

export default function Specializations() {
  const t = useTranslations("Index");
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      console.log("In View");
      animate(
        "li",
        { opacity: 1, translateY: "10px" },
        { delay: 0.2, duration: 0.6 }
      );
    }
  }, [isInView]);

  return (
    <div className="py-6">
      <div className="font-semibold text-2xl text-center pb-6">
        {t("specializations.title")}
      </div>
      <ul className="grid gap-4 grid-cols-2 lg:grid-cols-3 " ref={scope}>
        {specs.map((s, i) => (
          <li key={i} className=" opacity-0">
            <Link
              href={s.path}
              className="h-40 w-40 border border-gray-200 text-center flex flex-col items-center justify-center p-2 rounded-xl shadow-xl font-medium text-secondary bg-[#fdfdfd]
                                md:h-48 md:w-48 md:justify-center
                                xl:h-60 xl:w-60 xl:text-lg
                            "
            >
              <Image
                src={s.icon}
                alt={s.alt}
                width="40"
                height="40"
                className="py-1
                                md:h-16 md:w-16
                                "
              />
              <div className="h-14 flex items-start">{t(s.name)}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
