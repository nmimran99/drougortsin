import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function CommunicationDetails() {
    const t = useTranslations('Index');

    return (
        <>
            <div className="w-11/12">
                    <Link href="https://goo.gl/maps/4AecA7A1KKnpBXDp9" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <div 
                                className="flex text-white text-lg py-2 px-4"
                            >
                                <Image 
                                    src="/icons/MapPinWhite.svg"
                                    height="16"
                                    width="16"
                                    alt="Email Icon"
                                    className="w-7 h-7"
                                />
                                <div className="px-2 leading-6">
                                    {t("address")}
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="w-11/12">
                    <div 
                        className="flex text-white text-lg py-2 px-4"
                    >
                        <Image 
                            src="/icons/MailWhite.svg"
                            height="16"
                            width="16"
                            alt="Email Icon"
                            className="w-7 h-7"
                        />
                        <div className="px-2 leading-6">
                            dr.ougortsin@gmail.com
                        </div>
                    </div>
                </div>
                <div className="w-11/12">
                    <div 
                        className="flex text-white text-lg py-2 px-4"
                    >
                        <Image 
                            src="/icons/PhoneWhite.svg"
                            height="16"
                            width="16"
                            alt="Email Icon"
                            className="w-7 h-7"
                        />
                        <div className="px-2 leading-6">
                            {t("phone")}
                        </div>
                    </div>
                </div>
        </>
    )
}