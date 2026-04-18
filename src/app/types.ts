export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  category: string;
  image: string;
  rating: number;
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

export interface NavItem {
  name: string;
  href: string;
}
export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  category: string;
  image: string;
  rating: number;
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

export interface NavItem {
  name: string;
  href: string;
}
