import { User } from "./types";

export const users: User[] = [
  { id: 1, name: "Alice", email: "Alice@whatever.com" },
  { id: 2, name: "Bob", email: "Bob@whatever.com" },
  { id: 3, name: "Charlie", email: "Charlie@whatever.com" },
  { id: 4, name: "David", email: "David@whatever.com" },
  { id: 5, name: "Eve", email: "Eve@whatever.com" },
  { id: 6, name: "Frank", email: "Frank@whatever.com" },
  { id: 7, name: "Grace", email: "Grace@whatever.com" },
  { id: 8, name: "Heidi", email: "Heidi@whatever.com" },
  { id: 9, name: "Ivan", email: "Ivan@whatever.com" },
  { id: 10, name: "Judy", email: "Judy@whatever.com" },
];

export function changeUserMail(user: User) {
  return {
    ...user,
    email: user.email.endsWith("com") ? user.email.replace("com", "org") : user.email.replace("org", "com"),
  };
}

export function deleteUser(data: User[], id: number) {
  return data.filter(user => user.id !== id);
}

export function changeUser(data: User[], id: number) {
  return data.map(user => (user.id !== id ? user : changeUserMail(user)));
}
