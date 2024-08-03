"use client"
import MotionText from "@/components/motion-text";

export default function Home() {

  return (                                      
    <section className="">
       
      <main>
          <div className="flex flex-col items-center justify-between p-2">  
            <section className="w-full pt-6">
              <div className="mx-auto container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
                      <MotionText delayOffset={0}>Coggle Mindmaps</MotionText>
                    </h1>
                    {/* <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                      PDF Notes to concepts
                    </p> */}
                  </div>
                </div>
                
              </div>
            </section>
        </div>

        <div className="space-y-12 min-h-screen min-w-full">  
          <iframe className="w-full min-h-screen h-full border-0" src='https://embed.coggle.it/diagram/Zq4XShJURVCyrqaE/bb1938a0d29813aae08cb5c6c8fbdd166ce52d69f1189009f17d69add073e01f' allowFullScreen>
            
          </iframe>
        </div>

      </main>
    
      
    </section>
  );
}
