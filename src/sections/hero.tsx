import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import { OrbitingCirclesDemo } from "@/app/OrbitingCircles";
import WordRotate from "@/components/magicui/word-rotate";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Pradeep Saravanan! 👋</MotionText>
      </h1>

      <MotionDiv>
        <OrbitingCirclesDemo />
      </MotionDiv>
      
      <h1>
        <MotionDiv delayOffset={1}>  
          <WordRotate
            className="text-3xl font-bold text-black dark:text-white"
            words={["DevOps Engineer ✨", "React Developer 🧑🏻‍💻"]}
          />
        </MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <div>
            <div>
              <p>Welcome to my personal page!</p>
            </div>
            <div>
              <p>
                Just an indie<b> ✨ DevOps Engineer </b>who solves problems and loves to
                build something cool along the way.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>

      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
      
    </section>
  );
}
