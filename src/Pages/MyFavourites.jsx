/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function MyFavourites() {
    const [favorites, setFavorites] = useState([
        { id: 1, name: 'Pizza', description: 'Delicious pizza with your choice of toppings.' },
        { id: 2, name: 'Burger', description: 'Mouthwatering burger with cheese and bacon.' },
        { id: 3, name: 'Sushi', description: 'Fresh sushi rolls with soy sauce and wasabi.' },
      ]);
    
      return (
        <div className="p-4 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4 text-orange-600">My Favorites</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="text-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default MyFavourites;
