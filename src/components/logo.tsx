import Image from "next/image";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    showText?: boolean;
}

const sizes = {
    sm: { img: 28, text: "text-base" },
    md: { img: 36, text: "text-xl" },
    lg: { img: 48, text: "text-2xl" },
};

const Logo = ({ size = "md", showText = true }: LogoProps) => {
    const s = sizes[size];
    return (
        <span className="inline-flex items-center gap-2.5">
            <Image
                src="/logo.svg"
                alt="Sniprl"
                width={s.img}
                height={s.img}
                className="rounded-lg"
                priority
            />
            {showText && (
                <span className={`${s.text} font-bold tracking-tight`}>
                    Sniprl
                </span>
            )}
        </span>
    );
};

export default Logo;
