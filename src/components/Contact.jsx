const Contact = () => {
  return (
    <div className="h-[130vh] w-full bg-[#e8e9e5] flex flex-col items-center">
      <div className="pt-16 w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-[#495324] relative md:text-4xl">
          CONTACT
          <span className="absolute  top-12 left-[3.5rem] rounded-sm w-8 h-[5px] bg-[#A7BC5B] md:left-[4.5rem] md:top-14"></span>
        </h1>
        <p className="text-center text-base text-[#414825] p-8 md:w-3/5 md:text-lg">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <form
        className="mt-4 w-4/5 h-3/5 bg-[#f2f2f2] flex flex-col rounded md:w-3/5 lg:w-2/5"
        style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <div className="mt-6 ml-8 mr-8 mb-8 flex flex-col">
          <label className="text-lg font-semibold mb-2 text-[#21250d]">
            Name
          </label>
          <input
            className="h-10 bg-[#e6e6e6] p-2 text-[#21250d] border-0 outline-none rounded font-medium text-base"
            type="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="ml-8 mr-8 mb-8 flex flex-col">
          <label className="text-lg font-semibold mb-2 text-[#21250d]">
            Email
          </label>
          <input
            className="h-10 bg-[#e6e6e6] p-2 text-[#21250d] border-0 outline-none rounded font-medium text-base"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="ml-8 mr-8 mb-8 flex flex-col">
          <label className="text-lg font-semibold mb-2 text-[#21250d]">
            Message
          </label>
          <textarea
            className="h-28 bg-[#e6e6e6] p-2 text-[#21250d] border-0 outline-none rounded font-medium text-base"
            type="text"
            placeholder="Enter Your Message"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;