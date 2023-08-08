import { useTranslations } from "next-intl";
import Image from "next/image";
import DetailsCard from "./DetailsCard";
import Link from "next/link";

const mediaLinks = [{
    name: "infomed",
    link: "https://www.infomed.co.il/experts/136211/"
}, {
    name: "hospitalWebsite",
    link: "https://www.sheba.co.il/%D7%95%D7%9C%D7%93%D7%99%D7%A1%D7%9C%D7%91-%D7%90%D7%95%D7%92%D7%95%D7%A8%D7%A6%D7%99%D7%9F"
}, {
    name: "refael",
    link: "https://www.raphaelhospitals.co.il/doctors/ougortsin-vladislav/"
}]

export default function DescriptionCard() {
    const t = useTranslations('Index');

    return (
        <div className="py-8 flex flex-col items-center
            md:border md:border-gray-200 md:rounded-xl md:w-3/4
        ">
            <DetailsCard />
            <div className="py-4 w-11/12 xl:w-3/4">
                <div>
                    {t("shortAbout.first")}
                </div>
                <div className="py-2">
                    {t("shortAbout.second")}
                </div>
            </div>
            <div className="flex flex-col items-center 
                md:flex-row md:justify-start md:w-11/12
                xl:w-3/4
            ">
                {
                    mediaLinks.map((m,i) => 
                        <Link href={m.link} passHref key={i} legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className="bg-blue-800 rounded-full px-4 py-1.5 text-white font-semibold flex items-center m-1 w-max">
                                    <Image 
                                        src="/icons/NewWindow.svg"
                                        height="16"
                                        width="16"
                                        alt={m.link}
                                        className="w-4 h-4"
                                    />
                                    <div className="px-2">
                                        {t(m.name)}
                                    </div>
                                    
                                </div>
                            </a>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}