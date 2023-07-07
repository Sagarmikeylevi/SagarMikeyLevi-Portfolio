import React from "react";

const Projects = () => {
  const btnspaceStyle =
    "w-3/5 flex flex-row justify-evenly items-center md:w-4/5 lg:w-3/5";
  const githubStyle =
    "text-center w-32 h-10 bg-[#1a1a00] flex justify-center items-center rounded text-white font-medium tracking-wider cursor-pointer shadow-lg hover:shadow-3xl hover:bg-[#00cc66] transition duration-300 ease-in-out";
  const visitStyle =
    "text-center w-32 h-10 bg-[#666600] flex justify-center items-center rounded text-white font-medium tracking-wider cursor-pointer shadow-lg hover:shadow-3xl hover:bg-[#ff8000] transition duration-300 ease-in-out";

  const projects = [
    {
      title: "Bookstore E-commerce Website",
      description:
        "This is a MERN stack e-commerce website serves as a virtual bookstore, enabling users to effortlessly browse and purchase books. With an extensive product catalog, advanced search capabilities, and a convenient shopping cart. The website offers a seamless and intuitive interface, ensuring a delightful experience for customers seeking to explore and acquire new books. The data for the website is sourced from a dedicated bookstore API, ensuring up-to-date and accurate book information. API GitHub: https://github.com/Sagarmikeylevi/BookStore-API",
      githubLink:
        "https://github.com/Sagarmikeylevi/BOOKSTORE-FurationTechSolutions",
      visitLink: "https://bookery123.netlify.app/",
    },
    {
      title: "Habit Tracker",
      description:
        "This project is a Habit Tracker application built using React, a popular JavaScript library for building user interfaces. The Habit Tracker allows users to create and track their habits, set categories for habits, save data to Firestore, and view task details such as task streaks and task completion in a calendar format. The app provides a user-friendly interface to help users establish and maintain their desired habits.",
      githubLink: "https://github.com/Sagarmikeylevi/Habit-Tracker-App",
      visitLink: "https://sagarmikeylevi-habit-tracker.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "This project is a Weather App built using React, a popular JavaScript library for building user interfaces. The Weather App allows users to search for weather information of different locations and view current weather conditions. The app fetches weather data from a weather API and presents it in a user-friendly interface.",
      githubLink: "https://github.com/Sagarmikeylevi/React-Weather-App",
      visitLink: "https://sagarmikeylevi-weather-app.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="h-auto w-full bg-[#f2f2f2] pb-16">
      <div className="pt-24 w-full flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-semibold text-[#495324] relative md:text-4xl">
          PROJECTS
          <span className="absolute top-12 left-[4rem] rounded-sm w-8 h-[5px] bg-[#A7BC5B] md:left-[4.8rem] md:top-14"></span>
        </h1>
        <p className="text-center text-base text-[#414825] p-8 md:w-3/5 md:text-lg">
          Here you will find a collection of my personal projects, each
          accompanied by its own GitHub repository and deployment link
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mt-8 mb-4 flex flex-col items-center justify-center md:w-3/5 sm:w-4/5 h-80 bg-[#ffffff] rounded"
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            }}
          >
            <h1 className="text-xl font-semibold text-[#697931]">
              {project.title}
            </h1>
            <p className="text-[#414825] pt-4 pl-10 pb-8 pr-10">
              {project.description}
            </p>
            <div className={btnspaceStyle}>
              {/* GitHub link */}
              <a href={project.githubLink}>
                <div className={githubStyle}>GitHub</div>
              </a>
              {/* Visit link */}
              <a href={project.visitLink}>
                <div className={visitStyle}>Visit</div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
