/* eslint-disable no-unused-vars */
import React from "react";

function Menu(){
    const foodItems = [
        { id: 1, name: 'Pizza', description: 'Delicious pizza with your choice of toppings.', price: 10.99 },
        { id: 2, name: 'Burger', description: 'Mouthwatering burger with cheese and bacon.', price: 8.99 },
        { id: 3, name: 'Sushi', description: 'Fresh sushi rolls with soy sauce and wasabi.', price: 12.99 },
      ];
    
      return (
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 text-orange-600">Menu</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {foodItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-800 font-bold mt-2">${item.price.toFixed(2)}</p>
                <div className="text-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Menu