import ToggleEmailVisibility from "./ToggleEmailVisibility";
import Card from "../../components/Card";

const UsersListItem = ({ user }) => {
  const { id, first_name, last_name, avatar, email, showEmail } = user;

  return (
    <Card classes="bg-[#0060AE] bg-opacity-20">
      <div className="grid grid-cols-4 lg:grid-cols-8 grid-flow-row">
        <div className="flex col-span-4 lg:col-span-1 justify-center p-4">
          <img src={avatar} alt="avatar" className="rounded-full" />
        </div>
        <div className="flex flex-col ml-8 gap-y-2 justify-center col-span-3 lg:col-span-7">
          <p>
            <span className="font-bold">First Name:</span> {first_name}
          </p>
          <p>
            <span className="font-bold">Last Name:</span> {last_name}
          </p>
          <div className="flex gap-x-2">
            <p className="font-bold">Email: </p>
            <ToggleEmailVisibility
              email={email}
              showEmail={showEmail}
              userId={id}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UsersListItem;
