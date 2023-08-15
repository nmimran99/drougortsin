import Image from "next/image";

export default function Whatsapp() {

    return (
        <div className="fixed bottom-5 left-5 z-50">
            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=972526267419">
                <Image
                    src="/icons/whatsapp.svg"
                    alt="whatsappIcon"
                    height="60"
                    width="60"
                />
            </a>
        </div>
    )
}