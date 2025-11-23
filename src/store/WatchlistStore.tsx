import type ISerie from "../interface/ISerie";
import {create} from "zustand";

export type WatchlistStoreState = {
    elements: ISerie[];
    addElement: (element: ISerie) => void;
    removeElement : (id: number) => void;
    removeAll: () => void;

}

const useWatchlistStore = create<WatchlistStoreState>()((set) => (
    {
        elements: [],
        addElement: (element: ISerie) => set((state) => ({elements: [element, ...state.elements]})),
        removeElement: (id: number) => set((state) => ({elements: state.elements.filter((e) => e.id !== id)})),
        removeAll: () => set({elements: []}),
        

    }
))

export default useWatchlistStore;