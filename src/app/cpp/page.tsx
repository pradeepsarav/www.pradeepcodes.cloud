"use client";
import MotionText from "@/components/motion-text";
import { items } from "./data";

export default function Home() {
  const extractServiceName = (url: any) => {
    const parts = url.split('/');
    return parts[parts.length - 1].replace('.svg', '').split('-').map((word: any) => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  return (
    <section className="">
      <main>
        <div className="flex flex-col items-center justify-between p-2">
          <section className="w-full pt-6">
            <div className="mx-auto container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    <MotionText delayOffset={0}>Cloud Practitioner Notes</MotionText>
                  </h1>
                  <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                    Cloud Practitioner
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-12 min-h-screen min-w-full">
          <div className="flex flex-col gap-10 rounded-lg mt-6 p-5">
            {items.map((item, index) => (
              <div className="flex gap-4 items-start">
                <div className="flex flex-col gap-2 cursor-pointer w-1/5">
                  <img
                  key={index}
                  src={item.link}
                  alt={extractServiceName(item.link)}
                  className="w-14 h-14"
                  />
                <p>{extractServiceName(item.link)}</p>
                </div>

                <p className="flex-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
