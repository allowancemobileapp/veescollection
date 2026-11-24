export interface ProductVariant {
  size: string;
  price: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  images: string[];
  price: string;
  variants?: ProductVariant[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'boxers',
    title: 'Vee’s Collection Boxers',
    tagline: 'Comfort Meets Craft',
    description: `Our signature Boxers line is crafted for comfort, durability, and everyday style. Designed with breathable fabrics and modern cuts.`,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.01%20AM.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.01%20AM1.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM2.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM3.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM4.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.50.02%20AM5.jpeg',
    ],
    price: '₦12,500',
    variants: [
      { size: 'Medium', price: '₦12,500' },
      { size: 'Large', price: '₦12,500' },
      { size: 'XL', price: '₦14,000' },
      { size: 'XXL', price: '₦16,000' },
      { size: 'Kids', price: '₦8,000' },
    ],
  },
  {
    id: 'senator-wears',
    title: 'Senator Wears',
    tagline: 'Cultural Distinction',
    description: `Step into culture and class with our bespoke Senator Wears. Each piece is tailored with precision, blending traditional heritage with modern luxury.`,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.22%20AM6.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.18%20AM.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.59.41%20AM.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.18%20AM1.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.22%20AM7.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.59.41%20AM1.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.22%20AM8.jpeg',
    ],
    price: '₦80,000',
  },
  {
    id: 'agbada',
    title: 'Grand Agbada Set',
    tagline: 'The Ultimate Statement',
    description: `Exquisite Agbada designs crafted for royalty. Premium embroidery and high-quality fabrics that command respect at every occasion.`,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM13.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM14.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM15.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.25%20AM16.jpeg',
    ],
    price: '₦150,000 – ₦200,000',
  },
  {
    id: 'ready-to-wear',
    title: 'Ready-to-Wear',
    tagline: 'Effortless Elegance',
    description: `Timeless pieces that are easy to style and sustainable. Designed for everyday use, delivering the perfect balance of affordability and refined style.`,
    images: [
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.23%20AM10.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.23%20AM11.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.23%20AM9.jpeg',
      'https://grhwtudwzekvunecehtb.supabase.co/storage/v1/object/public/bbf/WhatsApp%20Image%202026-11-24%20at%2011.56.24%20AM12.jpeg',
    ],
    price: '₦30,000 – ₦45,000',
  },
  {
    id: 'office-shirts',
    title: 'Office Packet Shirts',
    tagline: 'The Professional Edge',
    description: `Sharp, stylish, and tailored for professionals. Made with breathable fabrics and sleek cuts for the boardroom.`,
    images: ['https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/OFFICE%20WEARS.png'],
    price: '₦15,000 – ₦30,000',
  },
  {
    id: 'vintage-fabrics',
    title: 'Vintage Fabrics',
    tagline: 'Heritage in Thread',
    description: `Carefully sourced fabrics full of character. Perfect for clients who want clothing that speaks of heritage and individuality.`,
    images: ['https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/veescollection/Vintage%20Fabrics.jpg'],
    price: '₦7,500 – ₦15,000 / yard',
  },
];
