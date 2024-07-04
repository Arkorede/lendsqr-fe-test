import { useState, useEffect } from "react";
import axios from "axios";
import * as db from "../utils/db";
import { User } from "../types/user";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const storedUsers = await db.getAll();
        if (storedUsers.length > 0) {
          setUsers(storedUsers);
        } else {
          const response = await axios.get<User[]>(
            "https://run.mocky.io/v3/49030dc0-8c52-47df-b64a-cd806fe556d7"
          );
          await db.putMany(response.data);
          setUsers(response.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const updateUser = async (updatedUser: User) => {
    try {
      await db.put(updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating user");
    }
  };

  return { users, updateUser, loading, error };
};

export default useUsers;
