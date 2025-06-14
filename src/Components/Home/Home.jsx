import React, { useContext } from 'react';
import { InteriorDesignContext } from '../Context/InteriorDesignContext';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Home() {
  const { 
    categories, 
    designs, 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery 
  } = useContext(InteriorDesignContext);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center py-4  mb-8 rounded-lg">
                <Header/>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Space</h2>
        <p className="text-xl">Beautiful interior designs for every room in your home</p>
      </section>

      {/* Search Container */}
      <div className="max-w-2xl mx-auto mb-8 px-4">
        <input
          type="text"
          placeholder="Search designs..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedCategory(null);
          }}
          className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Categories Section */}
      <section className="container mx-auto px-4 mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Browse by Category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <div 
              key={category.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg cursor-pointer ${
                selectedCategory?.id === category.id ? 'ring-2 ring-orange-400' : ''
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setSearchQuery('');
              }}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={`${category.image}`} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="p-3 text-center font-medium text-gray-800">{category.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Designs Section */}
      <section className="container mx-auto px-4 mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          {selectedCategory 
            ? `${selectedCategory.name} Designs` 
            : searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : 'Featured Designs'}
        </h3>
        
        {designs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designs.map(design => (
              <div 
                key={design.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`${design.image}`} 
                    alt={design.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{design.title}</h4>
                  <p className="text-gray-600">{design.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">No designs found. Try a different search or category.</p>
        )}
      </section>
    </div>
  );
}

export default Home;