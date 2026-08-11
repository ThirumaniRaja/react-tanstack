import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

const PageThree = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    console.log("API CALL - Page 3");

    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h2>Page Three</h2>

      {users.slice(0, 3).map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default PageThree;