import React from "react";
import { Box, Button, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 30%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProductDetails = ({ product, onClose }) => {
    const handleCloseClick = () => {
        onClose()
    };

    return (
        <div>
            <Modal
                open = {product}
                onClose={handleCloseClick}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <h2>Product Details</h2>
                    <p>Name: {product.name}</p>
                    <p>Image URL: {product.imageUrl}</p>
                    <p>Count: {product.count}</p>
                    <p>Width: {product.size.width}</p>
                    <p>Height: {product.size.height}</p>
                    <p>Weight: {product.weight}</p>
                    <p>Comments: {product.comments.join(", ")}</p>
                    <Button onClick={handleCloseClick}>Close</Button>
                    <Button>Edit</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default ProductDetails;