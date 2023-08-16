import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetOverlay
} from "@/components/ui/sheet"
import Image from "next/image"
import DetailsCard from "../DetailsCard"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import CommunicationDetails from "../CommunicationDetails"

export default function SideMenu({ links }) {
    const tIndex = useTranslations('Index');
    const tNavbar = useTranslations('Navbar');

    return (
        <Sheet>
            <SheetOverlay className="backdrop-blur-xl" />
            <SheetTrigger asChild>
                <Button>
                    <Image
                        src={"icons/Burger.svg"}
                        width="40"
                        height="40"
                        alt="Menu Icon"
                        className="mx-2 my-auto "
                    />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-black bg-opacity-50 backdrop-blur-xl w-full border-none overflow-auto">
                <SheetHeader>
                    <SheetDescription className="py-12">
                        <div className="flex justify-start items-center w-full">
                            <Image
                                src="/images/LogoWhite.png"
                                alt="dr.ougortsin"
                                width="400" height="400"
                                className="w-11/12 pb-6"
                            />
                        </div>
                        <div className="border-b border-white my-5" />
                        <div>
                            <ul className="flex flex-col items-start px-4">
                                {
                                    links.map((l, i) => {
                                        if (l.subunits) {
                                            return (
                                                <li key={i}>
                                                    <Accordion collapsible className="w-full ">
                                                        <AccordionItem value="item-1" className="border-none">
                                                            <AccordionTrigger className="text-gray-200 text-xl py-2 font-normal justify-start underline-offset-8">{tNavbar(l.name)}</AccordionTrigger>
                                                            <AccordionContent>
                                                                <ul className="flex flex-col items-start">
                                                                    {l.subunits.map((sb, i) => {
                                                                        return (
                                                                            <li className="text-gray-200 text-lg pr-4 py-1 font-normal" key={i}>
                                                                                <Link href={sb.href}>
                                                                                    {tNavbar(sb.name)}
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </li>

                                            )
                                        }
                                        return (
                                            <li className="text-gray-200 text-xl py-2 font-normal" key={i}>
                                                <Link href={l.href}>
                                                    {tNavbar(l.name)}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter className="relative w-full bottom-0 pt-5 border-t border-white my-5">
                    <CommunicationDetails />
                    <SheetClose asChild className="text-white">

                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
