import React from "react";

const Product = () => {
  const productsData = [
    { id: 1, name: "Product 1", imageSrc: "https://www.shopz.com.bd/wp-content/uploads/2020/12/Amazon-Echo-Dot-3rd-Generation-300x300.jpg" },
    { id: 2, name: "Product 2", imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpYRhOVZ64ARQlp96ri6pem3QD1YSP7YGWrHuExDtUT2nmOyMrI39xouY1qPlGcfD874&usqp=CAU" },
    { id: 3, name: "Product 3", imageSrc: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1638314999-216G5eCaEyL._SL500_.jpg?crop=0.790xw:0.790xh;0.0900xw,0.104xh&resize=980:*" },
    { id: 4, name: "Product 4", imageSrc: "https://m.media-amazon.com/images/I/81pybH09vyL.jpg" },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
