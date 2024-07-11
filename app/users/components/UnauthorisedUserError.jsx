import Link from "next/link";

const UnauthorisedUserError = () => {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex flex-col w-max">
        <p>Sign In to View Page Content</p>
        <Link
          href="/"
          className="rounded-full bg-[#0060AE] my-5 p-3 text-white text-center"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorisedUserError;
