'use client'

import { cx } from 'class-variance-authority';
import {useTranslations} from 'next-intl';
import Image from 'next/image';
 
export default function Index() {
  const t = useTranslations('Index');

  const increase = () => {
    let fontSize = Math.round(Number(document.querySelector('#this').style.fontSize.replace("px", "")) * 1.1);
    console.log(fontSize)
    document.querySelector('#this').style.fontSize = `${fontSize}px`;
  }

  return <div className="h-screen w-screen mt-16" >
    <div className="flex flex-col items-center justify-center w-full xl:w-3/5 xl:mx-auto 2xl:w-2/5">
        <Image 
        src="/images/vlad_surgery1.jpg" 
        alt="dr.ougortsin" 
        width="200" height="200" 
        className="w-full xl:rounded-b-xl" 
        />
        <div className="text-gray-800 text-center my-6 flex flex-col items-center p-2">
            <div className="font-semibold text-3xl">
                {t("name")}
            </div>
            <div className="text-gray-600 text-lg pt-2 font-medium">
                {t("nameDesc")}
            </div>
            <div className="w-3/4">
                {t("subDesc")}
            </div>
        </div>
        <div className="mx-auto w-24 border-b border-black my-8"></div>
        <div className="py-6">
            <div className="font-semibold text-2xl text-center pb-6">
                {t("specializations.title")}
            </div>
            <div className="grid gap-4 grid-cols-2">
                <div className="h-32 w-32 border-2 border-blue-800 text-center flex flex-col items-center justify-around p-2 rounded-xl shadow-xl font-medium">
                    <Image 
                        src="/icons/LineSegments.svg" 
                        alt="Long Bone Breaks" 
                        width="40" height="40" 
                    />
                    {t("specializations.longBones")}
                </div>
                <div className="h-32 w-32 border-2 border-blue-800 text-center flex flex-col items-center justify-around p-2 rounded-xl shadow-xl font-medium">
                    <Image 
                        src="/icons/AlignCenterHorizontal.svg" 
                        alt="Long Bone Breaks" 
                        width="40" height="40" 
                    />
                    {t("specializations.femurNeck")}
                </div>
                <div className="h-32 w-32 border-2 border-blue-800 text-center flex flex-col items-center justify-around p-2 rounded-xl shadow-xl font-medium">
                    <Image 
                        src="/icons/ArrowClockwise.svg" 
                        alt="Long Bone Breaks" 
                        width="40" height="40" 
                    />
                    {t("specializations.aroundFemur")}
                </div>
                <div className="h-32 w-32 border-2 border-blue-800 text-center flex flex-col items-center justify-around p-2 rounded-xl shadow-xl font-medium">
                    <Image 
                        src="/icons/EscalatorUp.svg" 
                        alt="Long Bone Breaks" 
                        width="40" height="40" 
                    />
                    {t("specializations.aroundKnee")}
                </div>
                <div className="h-32 w-32 border-2 border-blue-800 text-center flex flex-col items-center justify-around p-2 rounded-xl shadow-xl font-medium">
                    <Image 
                        src="/icons/ArrowsInCardinal.svg" 
                        alt="Long Bone Breaks" 
                        width="40" height="40" 
                    />
                    {t("specializations.pika")}
                </div>
                <div className="h-32 w-32 border-2 border-blue-800 text-center flex flex-col items-center justify-around p-2 rounded-xl shadow-xl font-medium">
                    <Image 
                        src="/icons/SneakerMove.svg" 
                        alt="Long Bone Breaks" 
                        width="40" height="40" 
                    />
                    {t("specializations.ankleFoot")}
                </div>
            </div>
        </div>
        <div className="mx-auto w-24 border-b border-black my-12"></div>
        <div className="py-8 flex flex-col items-center">
            <div className="flex border-2 border-blue-800 rounded-xl p-4 items-center w-96">
                <Image 
                src="/images/DAD1.webp" 
                alt="dr.ougortsin" 
                width="200" height="200" 
                className="w-[120px] h-[120px] rounded-full object-cover border border-transparent border-2 outline outline-blue-800 outline-2" 
                />
                <div className="my-auto w-60 pr-4">
                    <div className="text-xl font-semibold ">
                        {t("name")}
                    </div>
                    <div className="">
                        {t("nameDesc")}
                    </div>
                </div>
            </div>
            <div className="py-4 w-11/12 xl:w-3/4">
                <div>
                    {t("shortAbout.first")}
                </div>
                <div className="py-2">
                    {t("shortAbout.second")}
                </div>
            </div>
        </div>
    </div>
  </div>;
}