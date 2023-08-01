'use client'

import { useTranslations } from 'next-intl';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { Sheet } from '@/components/ui/sheet';
import Image from 'next/image';

export default function Navbar({ locale }) {
    const t = useTranslations('Navbar');

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

    return (<>
        <div className="w-screen fixed top-0 z-50 bg-blue-800 text-white font-Assistant flex items-center md:justify-center h-16">
            <div className="w-full h-full flex justify-between items-center md:hidden">
                <button className="flex items-center align-center p-2">
                    <Image 
                        src={"icons/Burger.svg"}
                        width="40"
                        height="40"
                        alt="Menu Icon"
                        className="mx-2 my-auto "
                    />
                </button>
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
            <NavigationMenu
                dir={locale === "he" ? "rtl" : "ltr"}
                className="hidden md:flex items-center justify-center h-16 w-full"
            >
                <NavigationMenuList>
                    <NavigationMenuItem className="px-4 hover:bg-gray-200 hover:bg-opacity-30 rounded-lg py-2">
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className=" font-semibold">
                                {t("home")}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-4">
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className=" font-semibold">
                                {t("about")}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-md focus:text-white focus:bg-gray-200 focus:bg-opacity-30 hover:text-white hover:bg-gray-200 hover:bg-opacity-30 transition-none bg-transparent">{t("surgeries")}</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <ul role="list" className="grid gap-3 grid-cols-2 px-2 py-2 w-[600px]">
                                {surgeries.map((s, i) =>
                                    <li key={i} role="listitem" className="row-span-3 font-medium py-4 hover:bg-blue-800 hover:text-white px-2 rounded-md w-full">
                                        <NavigationMenuItem asChild className="w-full">
                                            <Link href={s.href} legacyBehavior passHref>
                                                {t(s.name)}
                                            </Link>
                                        </NavigationMenuItem>
                                    </li>
                                )}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-4">
                        <Link href="/articles" legacyBehavior passHref>
                            <NavigationMenuLink className=" font-semibold">
                                {t("articles")}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-4">
                        <Link href="/recommendations" legacyBehavior passHref>
                            <NavigationMenuLink className=" font-semibold">
                                {t("recommendations")}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-4">
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className=" font-semibold">
                                {t("contact")}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
        </>
    )
}
