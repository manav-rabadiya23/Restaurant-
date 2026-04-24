export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  badge?: string;
  id?: string;
}

export interface CartItem extends MenuItem {
  id: string;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  profilePic?: string;
}

export interface Order {
  id: string;
  date: string;
  createdAt?: string;
  status?: "placed" | "preparing" | "onway" | "delivered";
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
    payment: string;
  };
  items: {
    id: string;
    name: string;
    price: number;
    qty: number;
    image?: string;
  }[];
  total: number;
}

export interface Review {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label?: string;
  name?: string;
  href: string;
}
