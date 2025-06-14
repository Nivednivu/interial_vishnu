import React, { createContext, useState } from 'react';

export const InteriorDesignContext = createContext();

export const InteriorDesignProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Full House', image: 'https://www.oppeinhome.com/upload/image/product/thumb/20241008/full-house-customization-in-modern-italian-style-wood-veneer-finish-polynesia-series.webp' },
    { id: 2, name: 'Kitchen', image: 'https://media.designcafe.com/wp-content/uploads/2021/05/26182848/indian-style-kitchen-interior-designs-for-your-home.jpg' },
    { id: 3, name: 'Living Room', image: 'https://media.designcafe.com/wp-content/uploads/2019/12/09102702/modern-living-room-design-with-tv-unit-designed-with-storage.jpg' },
    { id: 4, name: 'Bedroom', image: 'https://assets-news.housing.com/news/wp-content/uploads/2020/05/04190400/17-fabulous-bedroom-decor-ideas-FB-1200x700-compressed.jpg' },
    { id: 5, name: 'Pooja Room', image: 'https://images.woodenstreet.de/image/data/blog-images/9%20April%202024/IMG%2012.jpg' },
    { id: 6, name: 'Bathroom', image: 'https://i.pinimg.com/564x/de/42/c0/de42c0092d360da8199ea144d2b44a31.jpg' },
  ];

  const designs = [
    { id: 1, categoryId: 1, title: 'Modern Villa Design', image: 'https://media.designcafe.com/wp-content/uploads/2022/06/29150132/modern-minimalist-living-room-with-bookshelf-and-sofa.jpg', description: 'Contemporary full house design with open spaces' },
    { id: 2, categoryId: 1, title: 'Traditional Home', image: 'https://www.peoplespropertypoint.com/wp-content/uploads/2024/04/Top-10-Interior-Designers-in-Mohali2.jpg', description: 'Classic design with wooden elements' },
    { id: 3, categoryId: 2, title: 'Modular Kitchen', image: 'https://images.squarespace-cdn.com/content/v1/65d325ddd662de7fdcb2411f/db6d9c62-b16e-46e5-a698-1b09ce118e91/Simple+Kitchen+Design+in+Beige.jpg', description: 'Space-efficient kitchen design' },
    { id: 4, categoryId: 3, title: 'Minimalist Living Room', image: 'https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg', description: 'Clean lines and neutral colors' },
    // Add more designs as needed
  ];

  const filteredDesigns = selectedCategory
    ? designs.filter(design => design.categoryId === selectedCategory.id)
    : searchQuery
    ? designs.filter(design => 
        design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        design.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : designs;

  return (
    <InteriorDesignContext.Provider
      value={{
        categories,
        designs: filteredDesigns,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </InteriorDesignContext.Provider>
  );
};