"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation'
const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  const router = useRouter();
  const links = ["about", "skills", "contact", "blog"];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div
            className={cn(
              "text-5xl drop-shadow-2xl",
              goldenSignature.className,
            )}
          >
            <Link href="/">Pradeep Saravanan</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link, index ) => 
                index === 3 ?  <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  router.push("/blog");
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span> :  <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
