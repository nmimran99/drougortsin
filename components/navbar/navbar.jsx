'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import SideMenu from '@/components/navbar/SideMenu';
import HorizontalMenu from './HorizonalMenu';

export default function Navbar({ locale }) {
    const t = useTranslations('Navbar');
    const [scrollIsZero, setScrollIsZero] = useState(true);

    useEffect(() => {
		scrollListener();
	}, []);

	const scrollListener = useCallback(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY !== 0 && scrollIsZero) {
				setScrollIsZero(false);
			} else {
				setScrollIsZero(true);
			}
		});
	});

    const surgeries = [{
        name: "surgeriesDropdown.tibia",
        subname: "surgeriesDropdown.tibiaSub",
        href: "/surgeries/tb"
    }, {
        name: "surgeriesDropdown.aroundKneeAnkle",
        href: "/surgeries/aka"
    }, {
        name: "surgeriesDropdown.aroundFemurAnkle",
        href: "/surgeries/afa"
    }, {
        name: "surgeriesDropdown.ankleFoot",
        href: "/surgeries/af"
    }, {
        name: "surgeriesDropdown.children",
        href: "/surgeries/children"
    }, {
        name: "surgeriesDropdown.lateComplications",
        href: "/surgeries/lc"
    }];

    const links = [{
        name: "home",
        href: "/"
    }, {
        name: "about",
        href: "/about"
    }, {
        name: "surgeries",
        subunits: surgeries
    }, {
        name: "recommendations",
        href: "/recommendations"
    }, {
        name: "contact",
        href: "/contact"
    }]

    return (<>
        <div className={`w-screen h-16 fixed top-0 z-40 bg-gray-800 text-white font-Assistant flex items-end lg:h-max
            ${
				!scrollIsZero ?
				"trasnsition-all duration-300 shadow-xl":
                "trasnsition-all duration-300"
			}
        md:justify-start`}>
             <Image 
                    src="/images/LogoWhite.png"
                    height="400"
                    width="400"
                    alt="Logo"
                    className="m-4 hidden lg:block"
                />
            <div className="w-full h-full flex justify-between items-center lg:hidden">
                <div>
                    <SideMenu links={links} />
                </div>
                <button className="flex items-center align-center py-2 pl-4 ml-4 bg-green-500 rounded-full h-9 border border-2 border-white">
                    <Image
                        src={"icons/PhoneWhite.svg"}
                        width="22"
                        height="22"
                        alt="Phone Icon"
                        className="mt-0.5 mx-2 "
                    />
                    {t("contact")}
                </button>
            </div>
            <HorizontalMenu locale={locale} links={links} />
        </div>
    </>
    )
}
