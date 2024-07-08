import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "@/app/OrbitingCirclesDemo";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Pradeep Saravanan! 👋</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          {/* <video
            className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={"/animoji.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          {/* Your browser does not support the video tag. */}
          {/* </video> */}
          {/* <Image
            src={"/animoji.png"}
            alt="animjoi"
            width={170}
            height={170}
            className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
          /> */}

        </MotionDiv>
        
        
        
      </div>
      <OrbitingCirclesDemo />
      <h1>
        <MotionDiv delayOffset={0.8}>DevOps Engineer 🧑🏻‍💻</MotionDiv>
      </h1>
      <h1>
        <MotionDiv delayOffset={1}>React Developer</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            Just an indie<b> ✨ DevOps Engineer </b>who solves problems and loves to
            build something cool along the way.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
