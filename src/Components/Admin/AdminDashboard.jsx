import React, { useContext, useState } from 'react';
import { InteriorDesignContext } from '../Context/InteriorDesignContext';

function AdminDashboard() {
  const { 
    categories, 
    designs, 
    setSelectedCategory,
    setSearchQuery
  } = useContext(InteriorDesignContext);

  const [activeTab, setActiveTab] = useState('products');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDesign, setNewDesign] = useState({
    title: '',
    categoryId: '',
    description: '',
    image: ''
  });

  const handleAddDesign = (e) => {
    e.preventDefault();
    // In a real app, you would add this to your backend/database
    console.log('New design added:', newDesign);
    setShowAddForm(false);
    setNewDesign({
      title: '',
      categoryId: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-light">Admin Dashboard</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setActiveTab('products')}
                  className={`${activeTab === 'products' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors duration-300`}
                >
                  Manage Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('categories')}
                  className={`${activeTab === 'categories' ? 'text-orange-400' : 'text-white'} hover:text-orange-400 transition-colors duration-300`}
                >
                  Manage Categories
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Add New Product
              </button>
            </div>

            {showAddForm && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Add New Design</h3>
                <form onSubmit={handleAddDesign}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={newDesign.title}
                        onChange={(e) => setNewDesign({...newDesign, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select
                        value={newDesign.categoryId}
                        onChange={(e) => setNewDesign({...newDesign, categoryId: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={newDesign.description}
                        onChange={(e) => setNewDesign({...newDesign, description: e.target.value})}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="url"
                        value={newDesign.image}
                        onChange={(e) => setNewDesign({...newDesign, image: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
                    >
                      Add Design
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {designs.map(design => {
                      const category = categories.find(cat => cat.id === design.categoryId);
                      return (
                        <tr key={design.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img src={design.image} alt={design.title} className="h-12 w-12 object-cover rounded" />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{design.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {category ? category.name : 'Uncategorized'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{design.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-orange-600 hover:text-orange-900 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Category Management</h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
                Add New Category
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map(category => (
                <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <div className="flex justify-end space-x-2">
                      <button className="text-orange-600 hover:text-orange-800">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;