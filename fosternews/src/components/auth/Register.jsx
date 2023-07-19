const Register = () => {
  return (
    <div className="pt-20 flex flex-col gap-8 items-center">
      <div className="font-lora text-3xl">Create your account</div>
      <div>
        <div className="text-gray-500 font-libre text-sm font-bold">EMAIL</div>
        <div className="pt-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded text-gray-600 p-3 border border-black outline-none font-kanit"
          />
        </div>
      </div>
      <div>
        <div className="text-gray-500 font-libre text-sm font-bold">PASSWORD</div>
        <div className="pt-1">
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded text-gray-600 p-3 border border-black outline-none font-kanit"
          />
        </div>
      </div>
      <div>
        <input type="submit" className="w-72 font-libre p-4 rounded text-white bg-sky-600 cursor-pointer" value="Create Account"/>
      </div>
    </div>
  );
};

export default Register;
