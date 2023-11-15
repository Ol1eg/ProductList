import React from "react";
import AddProductModal from "./AddProductModal";
import { useDispatch } from "react-redux";
import { showAddModal } from "../store/productsActions";
import { Button } from "@mui/material";

const AddProduct = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(showAddModal())
    }
    return (
        <div>
            <Button variant="contained" onClick={() => handleClick()}>Add new product</Button>
            <AddProductModal />
        </div>
    )
}

export default AddProduct