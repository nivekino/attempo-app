export interface ShopService {
  selectedClientType: string | null;
  setSelectedClientType: (type: string) => void;
}