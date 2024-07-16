"use client"

import MotionText from "@/components/motion-text";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";


export default function Home() {
  
  const docs = [
    { uri: "https://media.datacumulus.com/aws-ccp/AWS%20Certified%20Cloud%20Practitioner%20Slides%20v29.pdf?_gl=1*aqa2gt*_ga*MTk1OTg1MTE0OS4xNzE2NTI4MDk0*_ga_6GZZTGGX7H*MTcxODE4NDQ1Ny4yLjEuMTcxODE4NjExMi42MC4wLjA" }
  ];

  return (                                      
    <section className="my-8 flex flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <section className="w-full pt-6">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <MotionText delayOffset={0}>Notes</MotionText>
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                PDF Notes to concepts
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <DocViewer 
              pluginRenderers={DocViewerRenderers}
              documents={docs} />
          </div>
        </div>
      </section>
    </main>
      
    </section>
  );
}
