// services/userService.ts
export type UserProfile = {
  name: string;
  email: string;
  avatar: string;
  status: string;
  applied: number;
  reviewed: number;
  contacted: number;
};

// Simulated backend response
const mockUser: UserProfile = {
  name: "Jonathan Smith",
  email: "jonathansmith@gmail.com",
  avatar: "https://mycdn.com/users/jon.png",
  status: "Active Looking",
  applied: 36,
  reviewed: 20,
  contacted: 9,
};

export const getUserProfile = async (): Promise<UserProfile> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockUser), 700); // simulating delay
  });
};

export const updateUserProfile = async (data: Partial<UserProfile>) => {
  return new Promise(resolve => {
    setTimeout(() => {
      Object.assign(mockUser, data);
      resolve(mockUser);
    }, 700);
  });
};
