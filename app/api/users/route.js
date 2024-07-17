import { fetchAllPages } from "../../util/fetchData";

export async function GET() {
  const data = await fetchAllPages("https://reqres.in/api/users");

  const maskedData = data.map(user => ({
    ...user,
    email: user.email.replace(/[.a-zA-Z]/g, "*"),
    showEmail: false
  }));

  return Response.json(
    { data: maskedData },
    {
      status: 200
    }
  );
}
