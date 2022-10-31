const Footer = () => {
  return (
    <footer className="text-center text-primary-white bg-[#164e63]">
      <div className="p-6 w-full ">
        <div className="flex justify-center items-center w-full">
          <p className="mr-4">Register for free</p>
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-white  font-medium text-xs 
            leading-tight uppercase rounded-full hover:bg-white hover:bg-opacity-5 
            focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Sign up!
          </button>
        </div>
      </div>
      <div className="text-center pb-4">© 2022 Copyright:</div>
    </footer>
  );
};

export default Footer;
