import { create } from "zustand";
import { ShopService } from "../interfaces/ShopService";

export const useShopServiceStore = create<ShopService>((set) => ({
  selectedClientType: null,
  setSelectedClientType: (type) => set({ selectedClientType: type }),
}));
