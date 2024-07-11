import Card from "./Card";
import GoogleSignInButton from "./GoogleSignInButton";

const SignInForm = () => {
  const baseUrl = process.env.BASE_URL;
  return (
    <div className="flex items-center justify-center">
      <Card classes="shadow">
        <div className="flex flex-col gap-y-8 items-center p-8">
          <p>Zurich Insurance Customer Portal</p>
          <GoogleSignInButton baseUrl={baseUrl} />
        </div>
      </Card>
    </div>
  );
};

export default SignInForm;
