import React from 'react';
import Image from 'next/image';  // Import the Image component from next/image

const Jwellery = () => {
    const jwelleryData = [
        { id: 1, name: "Afghani Jwellery", price: 100, description: "3 piece set of jewellery", image: '/pic1.jpeg' },
        { id: 2, name: "Pearl Jwellery", price: 60, description: "Pearl 2 piece", image: '/pic2.jpeg' },
        { id: 3, name: "Radiant Rings", price: 50, description: "Elegant, Vibrant, Dazzling Designs", image: '/12.jpg' },
        { id: 4, name: "Silver Jwellery", price: 70, description: "Delicate Silver Jewellery", image: '/pic 3.jpeg' },
        { id: 5, name: "Heavy Bridal Jwellery Set", price: 80, description: "Luxurious Bold Design", image: '/pic 4.jpeg' },
        { id: 6, name: "Green Guloband", price: 55, description: "Party wear Jewellery", image: '/pic 5.jpeg' },
    ];

    return (
        <div>
            <div className='jwellery'>
                {jwelleryData.map((jwellery) => (
                    <div key={jwellery.id} className='jwellery-card'>
                        <Image
                            src={jwellery.image} // Use the image path
                            alt={jwellery.name}   // Alt text for the image
                            width={300}            // Set a width for the image
                            height={300}           // Set a height for the image
                            objectFit="cover"      // Optional: make the image cover the box
                        />
                        <h3>{jwellery.name}</h3>
                        <p>{jwellery.description}</p>
                        <div className='price'>${jwellery.price}</div>
                        <button> Add to Cart</button>
                    </div> // Closing jwellery-card div
                ))}
            </div>
        </div>
    );
};

export default Jwellery;
