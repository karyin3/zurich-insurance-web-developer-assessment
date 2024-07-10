import { redirect } from 'next/navigation';
import { getSession } from '../lib/features/auth/authConfig';
import SignInForm from "./components/SignInForm";

export default async function Home() {
  const session = await getSession();

  if (session) {
    return redirect('/users');
  }

  return (
    <main className="flex-grow content-center">
      <SignInForm />
    </main>
  );
}
