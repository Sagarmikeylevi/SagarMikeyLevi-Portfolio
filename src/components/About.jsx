import { Link } from "react-scroll";

const About = () => {
    const skillsSyles = "bg-[#d7e2b0] p-2 rounded text-[#5c6a29] font-medium";
  return (
    <div
      id="about"
      className="h-[200vh] w-full bg-[#e8e9e5] sm:h-[180vh] md:h-[165vh] lg:h-[135vh] xl:h-[125vh]"
    >
      <div className="pt-24 w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-[#495324] relative md:text-4xl">
          ABOUT <span className="ml-2 inline-block ">ME</span>
          <span className="absolute  top-12 left-[4.5rem] rounded-sm w-8 h-[5px] bg-[#A7BC5B] md:left-[5.5rem] md:top-14"></span>
        </h1>
        <p className="text-center text-base text-[#414825] p-8 md:w-3/5 md:text-lg">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="mt-4 flex flex-col md:flex-row md:justify-center">
        <div className="flex flex-col ml-8 md:w-1/2 lg:w-3/6">
          <h1 className="mb-6 text-2xl font-semibold text-[#8DA242]">
            Get to know me!
          </h1>
          <div className="text-[#414825] w-4/5">
            <p className="mb-4">
              I'm a{" "}
              <span className="text-lg text-[#262d07] font-medium">
                Full Stack Developer
              </span>{" "}
              specializing in the MERN stack. Passionate about building robust
              web applications, I excel in{" "}
              <span className="text-lg text-[#262d07] font-medium">
                Front-end
              </span>{" "}
              and{" "}
              <span className="text-lg text-[#262d07] font-medium">
                Back-end development
              </span>
              . My projects demonstrate proficiency in both areas.
            </p>
            <p className="mb-4">
              Sharing knowledge with the developer community is a priority, as I
              create content to aid growth. Connect with me on{" "}
              <span className="text-lg text-[#6e7f33] underline">LinkedIn</span>{" "}
              for updates and insights.
            </p>
            <p>
              Actively seeking{" "}
              <span className="text-lg text-[#262d07] font-medium">Job</span>{" "}
              opportunities to contribute, learn, and expand my skills. Let's
              collaborate on exciting projects!
            </p>
            <Link to="contact">
              <div className="mt-8 text-center w-32 h-12 bg-[#A7BC5B] flex justify-center items-center rounded text-white font-medium tracking-wider cursor-pointer shadow-lg hover:shadow-3xl hover:bg-[#00cc66] transition duration-300 ease-in-out">
                Contact
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col ml-8  md:mt-[-3rem]">
          <h1 className="mt-12 mb-6 text-2xl font-semibold text-[#8DA242]">
            My Skills
          </h1>
          <div className="ml-[-0.5rem] flex flex-row w-[28rem] flex-wrap md:w-[24rem] lg:w-[28rem]">
            <p className={`${skillsSyles} ml-3`}>JavaScript</p>
            <p className={`${skillsSyles} ml-4`}>HTML</p>
            <p className={`${skillsSyles} ml-4`}>CSS</p>
            <p className={`${skillsSyles} ml-4`}>Tailwind</p>
            <p className={`${skillsSyles} ml-4 md:mt-4 lg:mt-0`}>NodeJs</p>
            <p className={`${skillsSyles} mt-4  ml-3`}>Mongoose</p>
            <p className={`${skillsSyles} ml-4 mt-4`}>passportjs-auth</p>
            <p className={`${skillsSyles} ml-4 mt-4`}>APIs</p>
            <p className={`${skillsSyles} ml-4 mt-4`}>Express</p>
            <p className={`${skillsSyles} ml-3 mt-4`}>React</p>
            <p className={`${skillsSyles} ml-4 mt-4`}>Redux</p>
            <p className={`${skillsSyles} ml-4 mt-4`}>react-router-dom</p>
            <p className={`${skillsSyles} ml-4 mt-4`}>react-hooks</p>
            <p className={`${skillsSyles} mt-4 ml-3`}>Java</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
