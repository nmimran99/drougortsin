"use client";

import PageContainer from "../../../components/PageContainer";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useRef } from "react";

export default function Recommendations() {
  const t = useTranslations("Contact");
  const tPhone = useTranslations("Index")("phone");

  const copyToClipboard = (type, input) => () => {
    navigator.clipboard.writeText(input);
    document.getElementById(`${type}Ref`).innerText = t("copied");
    document.getElementById(
      `${type === "email" ? "phone" : "email"}Ref`
    ).innerText = t("copy");
  };

  return (
    <PageContainer>
      <motion.h1
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl py-8 px-4"
      >
        {t("title")}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, translateX: 20 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-1/2 border border-gray-300 rounded-xl shadow-xl"
      >
        <div>
          <Image
            src="/images/vlad_surgery2.jpg"
            height="300"
            width="300"
            alt="vladsurgery"
            className="w-full rounded-t-xl"
          />
          <div className="p-4">
            <div className="p-2">{t("byEmail")}</div>
            <button
              className="border border-gray-300 rounded-xl flex flex-between bg-white"
              onClick={copyToClipboard("email", "dr.vladortho@gmail.com")}
            >
              <div className="px-8 my-auto">dr.vladortho@gmail.com</div>
              <div className="rounded-l-xl border-r border-gray-300 bg-black/80 p-2 flex">
                <img
                  src="/icons/Copy.svg"
                  width="24"
                  height="24"
                  alt="copy"
                  className=""
                />
                <div className="px-1 text-white" id="emailRef">
                  {t("copy")}
                </div>
              </div>
            </button>
          </div>
          <div className="px-4 pt-0 pb-6">
            <div className="p-2">{t("byPhone")}</div>
            <button
              className="border border-gray-300 rounded-xl flex flex-between bg-white"
              onClick={copyToClipboard("phone", tPhone)}
            >
              <div className="px-8 my-auto">{tPhone}</div>
              <div className="rounded-l-xl border-r border-gray-300 bg-black/80 p-2 flex">
                <img
                  src="/icons/Copy.svg"
                  width="24"
                  height="24"
                  alt="copy"
                  className=""
                />
                <div className="px-1 text-white" id="phoneRef">
                  {t("copy")}
                </div>
              </div>
            </button>
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
}
