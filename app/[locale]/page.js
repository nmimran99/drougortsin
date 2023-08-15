'use client'

import DescriptionCard from '@/components/DescriptionCard';
import Media from '@/components/Media';
import MediaAppearance from '@/components/MediaAppearance';
import Specializations from '@/components/Specializations';
import {useTranslations} from 'next-intl';
import Top from "@/components/Top";

  
export default function Index() {
  const t = useTranslations('Index');

  return <div className="w-full mt-16" >
    <div className="flex flex-col items-center justify-center w-full xl:w-3/5 xl:mx-auto">
        <Top />
        <div className="mx-auto w-24 border-b border-black my-8"></div>
        <Specializations />
        <div className="mx-auto w-24 border-b border-black my-12"></div>
        <DescriptionCard />
        <div className="mx-auto w-24 border-b border-black my-12"></div>
        <MediaAppearance />
    </div>
  </div>;
}