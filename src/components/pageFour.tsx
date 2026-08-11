import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

const PageFour = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    console.log("API CALL - Page 4");

    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h2>Page Four</h2>

      {users.slice(0, 3).map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default PageFour;