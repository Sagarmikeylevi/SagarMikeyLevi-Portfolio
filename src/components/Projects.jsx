const Projects = () => {
  // Styles for buttons
  const btnspaceStyle =
    "w-3/5 flex flex-row justify-evenly items-center md:w-4/5 lg:w-3/5";
  const githubStyle =
    "text-center w-32 h-10 bg-[#1a1a00] flex justify-center items-center rounded text-white font-medium tracking-wider cursor-pointer shadow-lg hover:shadow-3xl hover:bg-[#00cc66] transition duration-300 ease-in-out";
  const visitStyle =
    "text-center w-32 h-10 bg-[#666600] flex justify-center items-center rounded text-white font-medium tracking-wider cursor-pointer shadow-lg hover:shadow-3xl hover:bg-[#ff8000] transition duration-300 ease-in-out";

  return (
    <div id="projects" className="h-[400vh] w-full bg-[#f2f2f2]">
      <div className="pt-24 w-full flex flex-col items-center justify-center">
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
        {/* Project 1 */}
        <div
          className="mt-8 mb-4 flex flex-col items-center justify-center md:w-3/5 sm:w-4/5 h-80 bg-[#ffffff] rounded"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <h1 className="text-xl font-semibold text-[#697931]">
            Habit Tracker
          </h1>
          <p className="text-[#414825] pt-4 pl-10 pb-8 pr-10">
            This project is a Habit Tracker application built using React, a
            popular JavaScript library for building user interfaces. The Habit
            Tracker allows users to create and track their habits, set
            categories for habits, save data to Firestore, and view task details
            such as task streaks and task completion in a calendar format. The
            app provides a user-friendly interface to help users establish and
            maintain their desired habits.
          </p>
          <div className={btnspaceStyle}>
            {/* GitHub link */}
            <a href="https://github.com/Sagarmikeylevi/Habit-Tracker-App">
              <div className={githubStyle}>GitHub</div>
            </a>
            {/* Visit link */}
            <a href="https://sagarmikeylevi-habit-tracker.netlify.app/">
              <div className={visitStyle}>Visit</div>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="mt-8 mb-4 flex flex-col items-center justify-center md:w-3/5 sm:w-4/5 h-80 bg-[#ffffff] rounded"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <h1 className="text-xl font-semibold text-[#697931]">Weather App</h1>
          <p className="text-[#414825] pt-4 pl-10 pb-8 pr-10">
            This project is a Weather App built using React, a popular
            JavaScript library for building user interfaces. The Weather App
            allows users to search for weather information of different
            locations and view current weather conditions. The app fetches
            weather data from a weather API and presents it in a user-friendly
            interface.
          </p>
          <div className={btnspaceStyle}>
            {/* GitHub link */}
            <a href="https://github.com/Sagarmikeylevi/React-Weather-App">
              <div className={githubStyle}>GitHub</div>
            </a>
            {/* Visit link */}
            <a href="https://sagarmikeylevi-weather-app.netlify.app/">
              <div className={visitStyle}>Visit</div>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="mt-8 mb-4 flex flex-col items-center justify-center md:w-3/5 sm:w-4/5 h-80 bg-[#ffffff] rounded"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <h1 className="text-xl font-semibold text-[#697931]">Bug Tracker</h1>
          <p className="text-[#414825] pt-4 pl-10 pb-8 pr-10">
            Bug Tracker is a web-based project management application designed
            to help software development teams track and manage software bugs
            and issues. The application provides a simple and efficient way to
            create and manage bug reports, making it easy for teams to identify,
            report, and resolve bugs in their software products.
          </p>
          <div className={btnspaceStyle}>
            {/* GitHub link */}
            <a href="https://github.com/Sagarmikeylevi/Bug-Tracker">
              <div className={githubStyle}>GitHub</div>
            </a>
            {/* Visit link */}
            <a href="https://bug-tracker1.onrender.com/">
              <div className={visitStyle}>Visit</div>
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="mt-8 mb-4 flex flex-col items-center justify-center md:w-3/5 sm:w-4/5 h-80 bg-[#ffffff] rounded"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <h1 className="text-xl font-semibold text-[#697931]">SuperHeros</h1>
          <p className="text-[#414825] pt-4 pl-10 pb-8 pr-10">
            SuperHeros is a web application that allows users to search and view
            information about their favorite superheroes. The application uses a
            superhero API to fetch data and display it in an easy-to-use format.
          </p>
          <div className={btnspaceStyle}>
            {/* GitHub link */}
            <a href="https://github.com/Sagarmikeylevi/SuperHeros">
              <div className={githubStyle}>GitHub</div>
            </a>
            {/* Visit link */}
            <a href="https://sagarmikeylevi.github.io/SuperHeros/">
              <div className={visitStyle}>Visit</div>
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div
          className="mt-8 mb-4 flex flex-col items-center justify-center md:w-3/5 sm:w-4/5 h-80 bg-[#ffffff] rounded"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <h1 className="text-xl font-semibold text-[#697931]">
            Personal Portfolio Website
          </h1>
          <p className="text-[#414825] pt-4 pl-10 pb-8 pr-10">
            This project is a Personal Portfolio Website built using React, a
            popular JavaScript library for building user interfaces. The
            portfolio website showcases the skills, projects, and experiences of
            the owner. It provides an interactive and visually appealing
            interface for visitors to learn more about the owner and their work.
          </p>
          <div className={btnspaceStyle}>
            {/* GitHub link */}
            <a href="https://github.com/Sagarmikeylevi/SagarMikeyLevi-Portfolio">
              <div className={githubStyle}>GitHub</div>
            </a>
            {/* Visit link */}
            <a href="https://sagar-mikey-levi-portfolio.vercel.app/">
              <div className={visitStyle}>Visit</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
