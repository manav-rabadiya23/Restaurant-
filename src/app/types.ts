export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  category: string;
  image: string;
  id?: string;
}

export interface CartItem extends MenuItem {
  id: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  customer: {
    name: string;
    phone: string;
    address: string;
    payment: string;
  };
  items: {
    id: string;
    name: string;
    price: number;
    qty: number;
  }[];
  total: number;
}

export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
}
