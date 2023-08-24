"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let keysPressed = {
  key1: null,
  key2: null
}

export default function Accessibilty() {
  const t = useTranslations("Accessibility");
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    fontSize: 0,
    blackAndWhite: false,
    linkEmphasis: false,
    increaseCursor: false,
    letterSpacing: 0
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if(keysPressed.key1) {
        keysPressed.key2 = e.key;
      } else {
        keysPressed.key1 = e.key;
      }
      detectKeyDown();
    })

    document.addEventListener("keyup", (e) => {
      keysPressed = {
        key1: null,
        key2: null
      };
    })
  }, [])

  const detectKeyDown = () => {
    if(keysPressed.key1 == "Control") {
      console.log("detected")
      if(keysPressed.key2 == "=") {
        console.log("this");
      } 
    }
  }

  const increaseFont = () => {
    if (state.fontSize == 2) {
      document.querySelector("html").style.fontSize = `100%`;
      setState((s) => ({ ...s, fontSize: 0 }));
      return;
    }
    let fontSize = Math.round(
      Number(document.querySelector("html").style.fontSize.replace("%", "")) +
        10
    );
    setState((s) => ({ ...s, fontSize: s.fontSize + 1 }));
    document.querySelector("html").style.fontSize = `${fontSize}%`;
  };

  const spaceLetters = () => {
    if(state.letterSpacing == 4) {
      document.querySelector('html').style.letterSpacing = 0;
      setState({ ...state, letterSpacing: 0});
      return;
    }
    let nextLetterSpacing = state.letterSpacing + 2;
    document.querySelector('html').style.letterSpacing = nextLetterSpacing.toString().concat('px');
    setState({ ...state, letterSpacing: nextLetterSpacing });
  };

  const blackAndWhite = () => {
    if (state.blackAndWhite) {
      setState({ ...state, blackAndWhite: false });
      document.querySelector("html").classList.remove("blackAndWhite");
      return;
    }
    setState({ ...state, blackAndWhite: true });
    document.querySelector("html").classList.add("blackAndWhite");
  };

  const linkEmphasis = () => {
    if (state.linkEmphasis) {
      setState({ ...state, linkEmphasis: false });
      document.querySelectorAll("a").forEach((item, i) => {
        item.classList.remove("underline");
      });
      return;
    }
    setState({ ...state, linkEmphasis: true });
    document.querySelectorAll("a").forEach((item, i) => {
      item.classList.add("underline");
    });
  };

  const increaseCursor = () => {
    if (state.increaseCursor) {
      setState({ ...state, increaseCursor: false });
      document.querySelector("html").classList.remove("increaseCursor");
      return;
    }
    setState({ ...state, increaseCursor: true });
    document.querySelector("html").classList.add("increaseCursor");
  };

  const reset = () => {
    document.querySelector("html").style.fontSize = `100%`;
    document.querySelector("html").classList.remove("blackAndWhite")
    document.querySelector("html").style.letterSpacing = 0;
    document.querySelectorAll("a").forEach((item, i) => {
      item.classList.remove("underline");
    });
    setState({
      fontSize: 0,
      blackAndWhite: false,
      linkEmphasis: false,
      increaseCursor: false,
      letterSpacing: 0
    });
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="fixed top-48 left-0 z-50 flex items-start">
      <button onClick={() => setOpen(true)} className={` ${open && "hidden"}`}>
        <Image
          src="/icons/Accessibility.svg"
          width="50"
          height="50"
          alt="accessibility icon"
          className="rounded-r-lg border-b border-r border-t border-black"
        />
      </button>
      {open && (
        <motion.div
          initial={{ translateX: -400, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`bg-white shadow-xl rounded-br-xl w-screen sm:w-96`}
        >
          <div className="bg-[#0015CF] text-white h-[51px] font-semibold px-3 py-3 border-b border-t border-black">
            {t("accessibilityMenu")}
          </div>
          <ul className="grid grid-cols-2 gap-2 p-2" role="list">
            <li
              className={`border-2 border-gray-200 hover:border-blue-800 rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer ${
                state.fontSize > 0 && "border-blue-800 border-2"
              }`}
              onClick={() => increaseFont()}
              role="listitem"
            >
              <Image
                src={"/icons/Plus.svg"}
                width="24"
                height="24"
                alt="accessibility icon"
                className="mx-2 my-auto "
              />
              {t("increaseFont")}
              <div className="w-full flex justify-evenly pt-2">
                <div
                  className={`w-5/12 h-2 border border-gray-300 rounded-full ${
                    state.fontSize > 0 && `bg-blue-800`
                  }`}
                ></div>
                <div
                  className={`w-5/12 h-2 border border-gray-300 rounded-full ${
                    state.fontSize > 1 && `bg-blue-800`
                  }`}
                ></div>
              </div>
            </li>
            <li
              className={`border-2 border-gray-200 hover:border-blue-800 rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer ${
                state.blackAndWhite && "border-blue-800 border-2"
              }`}
              onClick={() => blackAndWhite()}
              role="listitem"
            >
              <Image
                src={"/icons/Sun.svg"}
                width="24"
                height="24"
                alt="accessibility icon"
                className="mx-2 my-auto "
              />
              {t("blackAndWhite")}
              <div className="w-full flex justify-evenly pt-2">
                <div
                  className={`w-11/12 h-2 border border-gray-300 rounded-full ${
                    state.blackAndWhite && `bg-blue-800`
                  }`}
                ></div>
              </div>
            </li>
            <li
              className={`border-2 border-gray-200 hover:border-blue-800 rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer ${
                state.linkEmphasis && "border-blue-800 border-2"
              }`}
              onClick={() => linkEmphasis()}
              role="listitem"
            >
              <Image
                src={"/icons/TextUnderline.svg"}
                width="24"
                height="24"
                alt="accessibility icon"
                className="mx-2 my-auto "
              />
              {t("linkEmphasis")}
              <div className="w-full flex justify-evenly pt-2">
                <div
                  className={`w-11/12 h-2 border border-gray-300 rounded-full ${
                    state.linkEmphasis && `bg-blue-800`
                  }`}
                ></div>
              </div>
            </li>
            <li
              className={`border-2 border-gray-200 hover:border-blue-800 rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer ${
                state.increaseCursor && "border-blue-800 border-2"
              }`}
              onClick={() => increaseCursor()}
              role="listitem"
            >
              <Image
                src={"/icons/Cursor.svg"}
                width="15"
                height="15"
                alt="accessibility icon"
                className="mx-2 my-auto "
              />
              {t("increaseCursor")}
              <div className="w-full flex justify-evenly pt-2">
                <div
                  className={`w-11/12 h-2 border border-gray-300 rounded-full ${
                    state.increaseCursor && `bg-blue-800`
                  }`}
                ></div>
              </div>
            </li>
            <li
              className={`border-2 border-gray-200 hover:border-blue-800 rounded-xl p-2 flex flex-col justify-center items-center cursor-pointer ${
                state.letterSpacing > 0 && "border-blue-800 border-2"
              }`}
              onClick={() => spaceLetters()}
              role="listitem"
            >
              <Image
                src={"/icons/Spacer.svg"}
                width="24"
                height="24"
                alt="accessibility icon"
                className="mx-2 my-auto "
              />
              {t("letterSpacing")}
              <div className="w-full flex justify-evenly pt-2">
                <div
                  className={`w-5/12 h-2 border border-gray-300 rounded-full ${
                    state.letterSpacing > 0 && `bg-blue-800`
                  }`}
                ></div>
                <div
                  className={`w-5/12 h-2 border border-gray-300 rounded-full ${
                    state.letterSpacing > 2 && `bg-blue-800`
                  }`}
                ></div>
              </div>
            </li>
          </ul>
          <div className="w-full p-2 flex flex-col gap-2">
            <button
              className="w-full py-1.5 flex items-center justify-center text-white bg-[#0015CF] rounded-lg text-lg"
              onClick={() => reset()}
            >
              <Image
                src={"/icons/Reset.svg"}
                width="20"
                height="20"
                alt="accessibility icon"
                className="ml-1 my-auto "
              />
              <span className="pb-0.5">{t("reset")}</span>
            </button>
            <button
              className="w-full py-1.5 flex items-center justify-center text-white bg-[#0015CF] rounded-lg text-lg"
              onClick={() => close()}
            >
              <Image
                src={"/icons/X.svg"}
                width="20"
                height="20"
                alt="accessibility icon"
                className="ml-1 my-auto "
              />
              <span className="pb-0.5">{t("close")}</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
