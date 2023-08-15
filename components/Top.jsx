import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion"

export default function Top() {
    const t = useTranslations('Index');

    return (
        <div className="text-white text-center flex flex-col items-center p-2 bg-primary w-screen h-screen
        md:h-[700px]
        ">
            <div
            className="flex items-end justify-center w-full"
            >   
                <motion.div
                    initial={{ opacity: 0, translateX: 40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image 
                        src="/images/vlad_surgeon3.jpg" 
                        alt="dr.ougortsin" 
                        width="1200" height="1200" 
                        className="hidden w-60 rounded-full my-8 border-4 border-transparent ring ring-2 ring-gray-300 mx-4 lg:block" 
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: -40 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Image 
                        src="/images/vlad_face.jpg" 
                        alt="dr.ougortsin" 
                        width="1200" height="1200" 
                        className="w-80 rounded-full my-8 border-4 border-transparent ring ring-2 ring-gray-300" 
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateX: -40 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Image 
                        src="/images/vlad_surgeon4.jpg" 
                        alt="dr.ougortsin" 
                        width="1200" height="1200" 
                        className="hidden w-60 rounded-full my-8 border-4 border-transparent ring ring-2 ring-gray-300 mx-4 lg:block" 
                    />
                </motion.div>
                
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: -40 }}
                animate={{ opacity: 1, translateY: 9 }}
                transition={{ duration: 0.5, delay: 0.6}}
                className="flex flex-col items-center"
            >
                <div className="font-semibold text-3xl">
                    {t("name")}
                </div>
                <div className="text-gray-300 text-lg pt-2 font-medium">
                    {t("nameDesc")}
                </div>
                <div className="w-3/4 text-gray-300">
                    {t("subDesc")}
                </div>
                <button className="flex items-center align-center py-2 pl-4 ml-4 bg-green-500 rounded-full h-12 border border-2 border-white my-8 text-lg">
                    <Image
                        src={"icons/PhoneWhite.svg"}
                        width="28"
                        height="28"
                        alt="Phone Icon"
                        className="mt-0.5 mx-2 "
                    />
                    {t("forDetails")}
                </button>
            </motion.div>
        </div>
    )
}