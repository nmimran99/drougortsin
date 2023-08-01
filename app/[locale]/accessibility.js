'use client'

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function Accessibilty() {
  const t = useTranslations('Accessibility');
  const listItems = [
    {
        title: t("close"),
        icon: "/icons/X.svg",
        action: () => close()
    },
    {
        title: t("increaseFont"),
        icon: "/icons/Plus.svg",
        action: () => increaseFont()
    },
    {
        title: t("decreaseFont"),
        icon: "/icons/Minus.svg",
        action: () => decreaseFont()
    },
    {
        title: t("blackAndWhite"),
        icon: "/icons/Sun.svg",
        action: () => blackAndWhite()
    },
    {
        title: t("linkEmphasis"),
        icon: "/icons/TextUnderline.svg",
        action: () => linkEmphasis()
    },
    {
        title: t("reset"),
        icon: "/icons/Reset.svg",
        action: () => reset()
    },
  ]
  const [open, setOpen] = useState(false);

  const increaseFont = () => {
    let fontSize = Math.round(Number(document.querySelector('html').style.fontSize.replace("%", "")) + 10);
    console.log(fontSize)
    document.querySelector('html').style.fontSize = `${fontSize}%`;
  }

  const decreaseFont = () => {
    let fontSize = Math.round(Number(document.querySelector('html').style.fontSize.replace("%", "")) - 10);
    console.log(fontSize)
    document.querySelector('html').style.fontSize = `${fontSize}%`;
  }

  const blackAndWhite = () => {
    document.querySelector('html').style.filter = `grayscale(100%)`;
  }

  const linkEmphasis = () => {
    document.querySelectorAll('label').forEach((item, i) => {
        item.style.borderBottom = "1px solid black";
    })
  }

  const reset = () => {
    document.querySelector('html').style.fontSize = `100%`;
    document.querySelector('html').style.filter = ``;
    document.querySelectorAll('label').forEach((item, i) => {
        item.style.borderBottom = "";
    })
  }

  const close = () => {
    setOpen(false);
  }

  return <div className="fixed top-24 left-0 z-50 flex items-start">
      <button onClick={() => setOpen(true)}>
            <Image 
                src="/icons/Accessibility.svg"
                width="50"
                height="50"
                alt="accessibility icon"
                className="rounded-r-lg border-b border-r border-t border-black"
            />
        </button>
        <div className={`bg-white shadow-xl rounded-br-xl w-52 ${!open && "hidden"}`}>
            <div className="bg-[#0015CF] text-white h-[51px] font-semibold px-3 py-3 border-b border-t border-black">{t("accessibilityMenu")}</div>
            <ul className="[&>*:last-child]:border-none" role="list">
                {listItems.map((l,i) => 
                <li className="border-b border-b-black p-1 flex align-center my-1 cursor-pointer" onClick={l.action} key={i} role="listitem">
                    <Image 
                        src={l.icon}
                        width="24"
                        height="24"
                        alt="accessibility icon"
                        className="mx-2 my-auto "
                    />
                        {l.title}
                </li>)}
            </ul>
        </div>
        
  </div>

}