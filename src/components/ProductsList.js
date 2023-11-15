import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { } from "../store/productReducer";
import { fetchProducts, showDeleteModal } from "../store/productsActions";
import ProductDetails from "./ProductDetails";
import { Button, ListItem } from "@mui/material";

const ProductList = () => {
    const [sortOption, setSortOption] = useState("alphabetical");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDeleteClick = (productId) => {
        dispatch(showDeleteModal(productId));
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const hanleCloseDetailse = () => {
        setSelectedProduct(null)
    }

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "alphabetical") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "count") {
            return b.count - a.count;
        }
        return 0;
    });

    return (
        <div>
            <h2>Product List</h2>
            <div>
                <label>
                    Sort By:
                    <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="count">Count</option>
                    </select>
                </label>
            </div>
            <ul>
                {sortedProducts.map((product) => (
                    <ListItem key={product.id} >
                        {product.name}
                            <Button variant="text" size="small" onClick={() => handleProductClick(product)}> View details</Button>
                            <Button variant="text"s ize="small" color="error" onClick={() => handleDeleteClick(product.id)}>Delete</Button>
                    </ListItem>
                ))}
            </ul>
            {selectedProduct && (
                <ProductDetails product={selectedProduct} onClose={hanleCloseDetailse}/>
            )}
        </div>
    );
};

export default ProductList;