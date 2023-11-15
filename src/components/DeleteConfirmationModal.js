import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, hideDeleteModal } from "../store/productsActions";
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

const DeleteConfirmationModal = () => {
    const dispatch = useDispatch();
    const showDeleteModal = useSelector((state) => state.showDeleteModal);
    const selectedProductId = useSelector((state) => state.selectedProductId);

  const handleClose = () => {
    dispatch(hideDeleteModal());
  };

  const handleDelete = () => {
    if (selectedProductId) {
      dispatch(deleteProduct(selectedProductId));
    }
  };

  return (
    <Modal
      open={showDeleteModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this product?</p>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button color="error" onClick={() => handleDelete()}>Delete</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationModal;