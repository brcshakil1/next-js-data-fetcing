"use client";

import { useEffect, useState } from "react";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3 className={styles.header_text}>Total user: {users.length}</h3>
      <div>
        {users?.map((user) => (
          <div
            key={user.id}
            className="card w-[70vw] mx-auto bg-primary text-primary-content my-5"
          >
            <div className="card-body">
              <h2 className="card-title">{user?.id}</h2>
              <p>{user?.name}</p>
              <p>{user?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
