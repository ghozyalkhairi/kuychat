import { create } from "zustand"

interface UserStore {
  userName: string
  actions: {
    setUserName: (userName: string) => void
  }
}

const useUserStore = create<UserStore>((set, get) => ({
  userName: "KuyChat" + Math.floor(Math.random() * 1000),
  actions: {
    setUserName: (userName: string) => set({ userName }),
  },
}))

export const useUserName = () => useUserStore((state) => state.userName)
export const useUserActions = () => useUserStore((state) => state.actions)
