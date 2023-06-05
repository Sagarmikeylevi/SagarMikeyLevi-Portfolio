const Home = () => {
    const socialLogoStyles =
      "h-12 w-12 flex items-center justify-center hover:bg-[#b3ffd9] cursor-pointer";
  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-center bg-[#f2f2f2]">
      <h1 className="text-2xl font-extrabold  tracking-wider md:text-3xl lg:text-4xl text-[#8DA242]">
        HEY I'M{" "}
        <span className="text-4xl ml-2 md:text-5xl lg:text-6xl">SAGAR DAS</span>
      </h1>
      <p className="text-center mb-8 p-8 text-[#414825] text-lg md:w-4/5">
        Greetings! I'm a passionate full stack developer well-versed in the MERN
        stack. I thrive on crafting remarkable web applications that captivate
        users with their functionality and aesthetics. Let's embark on a journey
        of innovation and create exceptional projects together!
      </p>

      <div className="text-center w-32 h-12 bg-[#A7BC5B] flex justify-center items-center rounded text-white font-medium tracking-wider cursor-pointer shadow-lg hover:shadow-3xl hover:bg-[#00cc66]">
        PROJECTS
      </div>

      <ul className="hidden md:absolute md:left-0 md:top-60 md:h-52 md:w-12 bg-white md:flex md:flex-col md:justify-evenly md:items-center">
        <li className={socialLogoStyles}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
            alt=""
            className="h-8 w-8"
          />
        </li>
        <li className={socialLogoStyles}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25347.png"
            alt=""
            className="h-8 w-8"
          />
        </li>

        <li className={socialLogoStyles}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png"
            alt=""
            className="h-8 w-8"
          />
        </li>

        <li className={socialLogoStyles}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
            alt=""
            className="h-8 w-8"
          />
        </li>
      </ul>
    </div>
  );
};

export default Home;
