import { create } from "zustand"

interface AppState {
  refresh: boolean
  actions: {
    setRefresh: () => void
  }
}

const useAppStore = create<AppState>((set, get) => ({
  refresh: false,
  actions: {
    setRefresh: () => set({ refresh: !get().refresh }),
  },
}))

export const useRefresh = () => useAppStore((state) => state.refresh)
export const useAppActions = () => useAppStore((state) => state.actions)
