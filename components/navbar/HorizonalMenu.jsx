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
import Image from 'next/image';
import { useState } from 'react';
import SideMenu from '@/components/navbar/SideMenu';

export default function HorizontalMenu({ locale, links }) {
    const t = useTranslations('Navbar');

    return (
        <NavigationMenu
            dir={locale === "he" ? "rtl" : "ltr"}
            className="hidden md:flex items-center justify-center h-16 w-full"
        >
            <NavigationMenuList>
                {
                    links.map((l, i) => {
                        if (l.subunits) {
                            return <NavigationMenuItem key={i}>
                                <NavigationMenuTrigger className="text-lg focus:text-white focus:bg-gray-200 focus:bg-opacity-30 hover:text-white hover:bg-gray-200 hover:bg-opacity-30 transition-none bg-transparent">{t("surgeries")}</NavigationMenuTrigger>
                                <NavigationMenuContent className="text-secondary bg-accent">
                                    <ul role="list" className="grid gap-3 grid-cols-2 px-2 py-2 w-[600px]">
                                        {l.subunits.map((s, i) =>
                                            <li key={i} role="listitem" className="row-span-3 font-medium py-4 hover:bg-primary hover:text-white px-2 rounded-md w-full">
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
                        }
                        return <NavigationMenuItem className="text-lg px-4 hover:bg-gray-200 hover:bg-opacity-30 rounded-lg py-2" key={i}>
                            <Link href={l.href} legacyBehavior passHref>
                                <NavigationMenuLink className=" font-semibold">
                                    {t(l.name)}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}
