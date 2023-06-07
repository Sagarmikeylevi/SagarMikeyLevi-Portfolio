const Footer = () => {
  return (
    <div className="h-[30vh] w-full bg-black">
      <div className="flex flex-col h-3/5 justify-center items-center">
        <h1 className="text-xl text-white font-bold mb-4 tracking-wide md:text-2xl">
          SOCIAL
        </h1>
        <ul className="flex w-3/5 flex-row justify-evenly items-center md:w-2/5 ">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/121/121509.png"
              alt=""
              className="h-8 w-8 bg-white rounded"
            />
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/121/121503.png"
              alt=""
              className="h-8 w-8 bg-white"
            />
          </li>

          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/11023/11023974.png"
              alt=""
              className="h-8 w-8 rounded bg-white"
            />
          </li>

          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png"
              alt=""
              className="h-8 w-8 rounded-lg bg-white"
            />
          </li>
        </ul>
      </div>
      <span className="absolute mt-4 w-4/5 h-[0.05rem] bg-white" style={{"margin-left": "10%"}}></span>
      <div className="mt-8 text-white text-xs tracking-widest font-bold text-center">
        <span>©</span>
        <span> Copyright 2023. Made by Sagar Das</span>
      </div>
    </div>
  );
};

export default Footer;
