import MotionText from "@/components/motion-text";
import { getAllArticles } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";

export default async function Home() {
  const articles = await getAllArticles();

  return (                                      
    <section className="my-8 flex flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <section className="w-full pt-6">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <MotionText delayOffset={0}>Welcome to my Blog 👋</MotionText>
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Discover latest articles and stay up to date with the newest
                technologies, features, and trends in AWS / React.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 max-w-7xl mx-auto w-full">

            {articles.map((article:any) => (          
              <Link href={`/articles/${article.slug}`}>
                <WobbleCard
                  containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]"
                  className=""
                >
                  <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                      {article.title}
                    </h2>

                    <div className="inline-block rounded-full bg-indigo-600 px-3 py-1 mt-2 text-xs font-semibold text-neutral-200">
                      {article.categoryName}
                    </div>


                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                      {article.summary}
                    </p>
                  </div>
                  <Image
                    src={article.articleImage.url}
                    width={500}
                    height={500}
                    alt={article.title}
                    className="absolute -right-4 lg:-right-[10%] filter -bottom-10 rounded-2xl"
                  />
                </WobbleCard>
                
              </Link>
            ))}  
              
            </div>
          </div>
        </div>
      </section>
    </main>
      
    </section>
  );
}
