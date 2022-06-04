import create from 'zustand'

const useStore = create(set => ({
  bears: 0,
  navBarExpanded: "",
  expandMobileNav: (val) => set(state => ({ navBarExpanded: val })),
  closeMobileNavBar: () => set(state => ({ navBarExpanded: ""  })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore;