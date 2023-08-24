"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import PageContainer from "../../../components/PageContainer";

export default function About() {
  const t = useTranslations("About");

  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/vlad_surgery1.jpg"
          alt="vlad_surgery"
          height="1200"
          width="1200"
          className="lg:rounded-b-xl"
        />
      </motion.div>
      <div className="px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl py-8"
        >
          {t("aboutMe")}
        </motion.div>
        <motion.div
          className="
        lg:flex lg:justify-between
        "
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <section>
            <div className="my-1">{t("paragraphs.1")}</div>
            <div className="my-1">{t("paragraphs.2")}</div>
            <div className="my-1">
              {t("paragraphs.3")}
              <ol>
                {Array.from({ length: 3 }).map((n, i) => (
                  <li className="flex items-start my-2" key={i}>
                    <img
                      src="/icons/CheckCircle.svg"
                      alt="check"
                      width="28"
                      className="mx-2"
                    />
                    {t(`treatments.${i + 1}`)}
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <div
            className="w-full mx-4 bg-primary text-white rounded-xl shadow-xl p-4 mx-auto border border-gray-200 my-6
            lg:my-0 lg:mr-6 lg:h-max
          "
          >
            {Array.from({ length: 4 }).map((g, i) => (
              <div key={i} className="flex items-start my-4">
                <img
                  src="/icons/Info.svg"
                  alt="check"
                  width="28"
                  className="mx-2"
                />
                {t(`points.${i + 1}`)}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, translateX: 20 }}
         animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {t("self")}
        </motion.div>
        <motion.div
          className="my-6"
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-2xl py-2">{t("insurancesLabel")}</div>
          <div className="flex gap-1 flex-wrap justify-start">
            {["klal", "thePhoenix", "harel", "leumit", "private"].map(
              (l, i) => (
                <div
                  key={i}
                  className="bg-primary rounded-full px-6 text-white py-2 w-max text-lg"
                >
                  {t(`insurances.${l}`)}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
      </PageContainer>
  );
}
