import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";
import Image from "next/image";


export default function DetailsCard({ className}) {
    const t = useTranslations('Index');

    return (
            <div className={cx(`flex border-2 border-blue-800 rounded-xl p-4 items-center w-max max-w-[380px]
            `,
            className
            )}>
                <Image
                    src="/images/DAD1.webp"
                    alt="dr.ougortsin"
                    width="200" height="200"
                    className="w-[80px] h-[80px] rounded-full object-cover shadow-xl
                    sm:w-[120px] sm:h-[120px]
                    "
                />
                <div className="my-auto w-[230px] pr-4">
                    <div className="text-xl font-semibold ">
                        {t("name")}
                    </div>
                    <div className="">
                        {t("nameDesc")}
                    </div>
                </div>
            </div>
    )
}