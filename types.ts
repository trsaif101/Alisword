
export interface Product {
  id: string;
  name: string;
  category: 'Katana' | 'Longsword' | 'Dagger' | 'Rapier';
  price: number;
  description: string;
  imageUrl: string;
  specs: {
    material: string;
    length: string;
    weight: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
