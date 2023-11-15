import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, hideAddModal } from "../store/productsActions";
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

const AddProductModal = () => {
    const dispatch = useDispatch();
    const showAddModal = useSelector((state) => state.showAddModal);

    const [product, setProduct] = useState({
        name: "",
        imageUrl: "",
        count: 0,
        size: {
            width: 0,
            height: 0,
        },
        weight: "",
        comments: [],
    });

    const handleClose = () => {
        dispatch(hideAddModal());
    };
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "width" || name === "height") {
            setProduct({
              ...product,
              size: {
                ...product.size,
                [name]: parseInt(value),
              }
            });
          } else if (name === "comments") {
          const commentsArray = value.split(",")
          setProduct({
            ...product,
            [name]: commentsArray
          });
        } else {
          setProduct({
            ...product,
            [name]: value
          });
        }
      };

    const handleSubmit = () => {
        setProduct({
            name: "",
            imageUrl: "",
            count: 0,
            size: {
                width: 0,
                height: 0,
            },
            weight: "",
            comments: []
        })
        if (product.name && product.imageUrl) {
            dispatch(addProduct(product));
        }
    };

    return (
        <div>
            <Modal
                open={showAddModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <h2>Add new product</h2>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Image URL:
                            <input
                                type="text"
                                name="imageUrl"
                                value={product.imageUrl}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Count:
                            <input
                                type="number"
                                name="count"
                                value={product.count}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Width(cm):
                            <input
                                type="number"
                                name="width"
                                value={product.size.width}
                                onChange={handleInputChange}
                            />
                        </label>
                    <div>
                    <label>
                            Height(cm):
                            <input
                                type="number"
                                name="height"
                                value={product.size.height}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    </div>
                    <div>
                        <label>
                            Weight(kg):
                            <input
                                type="text"
                                name="weight"
                                value={product.weight}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Comments:
                            <input
                                type="text"
                                name="comments"
                                value={product.comments}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <Button variant="contained" color="error" onClick={() => handleClose()}>Cancel</Button>
                    <Button variant="contained" color="success" onClick={() => handleSubmit()}>Add</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default AddProductModal;