'use client'

import DescriptionCard from '@/components/DescriptionCard';
import Media from '@/components/Media';
import MediaAppearance from '@/components/MediaAppearance';
import Specializations from '@/components/Specializations';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

  
export default function Index() {
  const t = useTranslations('Index');

  return <div className="w-full mt-16" >
    <div className="flex flex-col items-center justify-center w-full xl:w-3/5 xl:mx-auto">
        <Image 
        src="/images/vlad_surgery1.jpg" 
        alt="dr.ougortsin" 
        width="1200" height="1200" 
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
        <Specializations />
        <div className="mx-auto w-24 border-b border-black my-12"></div>
        <DescriptionCard />
        <div className="mx-auto w-24 border-b border-black my-12"></div>
        <MediaAppearance />
    </div>
  </div>;
}