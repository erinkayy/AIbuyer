export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  size: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    description: "A popular tropical plant with large, glossy leaves that develop unique splits and holes as they mature.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&auto=format&fit=crop&q=60",
    category: "indoor",
    size: "Medium",
    tags: ["indoor", "tropical", "low-maintenance"]
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "An extremely hardy plant that can survive in low light and with infrequent watering.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=60",
    category: "indoor",
    size: "Small",
    tags: ["indoor", "low-maintenance", "air-purifying"]
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    description: "A trendy indoor tree with large, violin-shaped leaves that add a dramatic touch to any space.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1545241047-6083a4d20a87?w=800&auto=format&fit=crop&q=60",
    category: "indoor",
    size: "Large",
    tags: ["indoor", "statement", "tropical"]
  },
  {
    id: 4,
    name: "Succulent Collection",
    description: "A set of three unique succulents that are perfect for beginners and require minimal care.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1523301345008-f195e6acc013?w=800&auto=format&fit=crop&q=60",
    category: "indoor",
    size: "Small",
    tags: ["indoor", "succulent", "low-maintenance"]
  },
  {
    id: 5,
    name: "Peace Lily",
    description: "A beautiful flowering plant that purifies the air and thrives in low light conditions.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1591958911319-0f8a0a0b8a0b?w=800&auto=format&fit=crop&q=60",
    category: "indoor",
    size: "Medium",
    tags: ["indoor", "flowering", "air-purifying"]
  },
  {
    id: 6,
    name: "Rubber Plant",
    description: "A striking plant with large, glossy leaves that can grow quite tall with proper care.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1591958911319-0f8a0a0b8a0b?w=800&auto=format&fit=crop&q=60",
    category: "indoor",
    size: "Medium",
    tags: ["indoor", "statement", "low-maintenance"]
  }
]; 