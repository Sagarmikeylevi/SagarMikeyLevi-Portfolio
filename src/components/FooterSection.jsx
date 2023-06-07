const Footer = () => {
  return (
    <div className="h-[30vh] w-full bg-black">
      <div className="flex flex-col h-3/5 justify-center items-center">
        <h1 className="text-xl text-white font-bold mb-4 tracking-wide md:text-2xl">
          SOCIAL
        </h1>
        <ul className="flex w-3/5 flex-row justify-evenly items-center md:w-2/5 ">
          <li>
            <a href="https://www.linkedin.com/in/sagar-das-878663230/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/121/121509.png"
                alt=""
                className="h-8 w-8 bg-white rounded"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SagarDas233418">
              <img
                src="https://cdn-icons-png.flaticon.com/128/121/121503.png"
                alt=""
                className="h-8 w-8 bg-white"
              />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/sasuketv7/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11023/11023974.png"
                alt=""
                className="h-8 w-8 rounded bg-white"
              />
            </a>
          </li>

          <li>
            <a href="https://github.com/Sagarmikeylevi">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
                alt=""
                className="h-8 w-8 rounded-lg bg-white"
              />
            </a>
          </li>
        </ul>
      </div>
      <span
        className="absolute mt-4 w-4/5 h-[0.05rem] bg-white"
        style={{ marginLeft: "10%" }}
      ></span>
      <div className="mt-8 text-white text-xs tracking-widest font-bold text-center">
        <span>©</span>
        <span> Copyright 2023. Made by Sagar Das</span>
      </div>
    </div>
  );
};

export default Footer;
