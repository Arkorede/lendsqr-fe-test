import { openDB, DBSchema, IDBPDatabase } from "idb";
import { User } from "../types/user";

interface UserDB extends DBSchema {
  users: {
    key: number;
    value: User;
    indexes: {
      "by-organization": string;
      "by-username": string;
      "by-email": string;
      "by-phone": string;
      "by-date-joined": string;
      "by-status": string;
    };
  };
}

const dbPromise = openDB<UserDB>("UserDatabase", 1, {
  upgrade(db) {
    const userStore = db.createObjectStore("users", { keyPath: "id" });
    userStore.createIndex("by-organization", "organization");
    userStore.createIndex("by-username", "username");
    userStore.createIndex("by-email", "email");
    userStore.createIndex("by-phone", "phone");
    userStore.createIndex("by-status", "status");
    userStore.createIndex("by-date-joined", "dateJoined");
  },
});

export async function getAll(): Promise<User[]> {
  const db = await dbPromise;
  return db.getAll("users");
}

export async function put(user: User): Promise<void> {
  const db = await dbPromise;
  await db.put("users", user);
}

export async function putMany(users: User[]): Promise<void> {
  const db = await dbPromise;
  const tx = db.transaction("users", "readwrite");
  await Promise.all(users.map((user) => tx.store.put(user)));
  await tx.done;
}

export async function get(id: number): Promise<User | undefined> {
  const db = await dbPromise;
  return db.get("users", id);
}
