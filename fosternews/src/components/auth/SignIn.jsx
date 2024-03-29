
const SignIn = () => {
  return (
    <div className="pt-20 flex flex-col gap-8 items-center">
      <div className="font-lora text-3xl">Login to your account</div>
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
        <input type="submit" className="w-72 font-libre p-4 text-white rounded bg-red-700 cursor-pointer" value="Sign In"/>
      </div>
    </div>
  );
}

export default SignIn