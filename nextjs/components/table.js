"use client";

import React, { useState, useEffect } from "react";

const Table = () => {
    const [products, setProducts] = useState([]);
    const [searchterm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const filterProducts = products.filter((product) => {
        if (searchterm === "") {
            return true;
        } else {
            return product.title.toLowerCase().includes(searchterm.toLowerCase());
        }
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <div>
                <input
                    value={searchterm}
                    type="text"
                    placeholder="The Search Bar!"
                    onChange={handleSearchChange}
                    style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
                />
            </div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '20px'
                }}
            >
                {filterProducts.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '16px',
                            textAlign: 'center'
                        }}
                    >
                        <h2 style={{ fontSize: '1.5rem' }}>${product.price.toFixed(2)}</h2>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }}
                        />
                        <p style={{ fontSize: '0.9rem' }}>{product.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
