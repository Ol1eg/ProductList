import React from "react";
import ProductsList from "./components/ProductsList";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";
import AddProduct from "./components/AddProduct";
import { Container } from "@mui/material";


function App() {
  return (
      <Container fixed sx={{ bgcolor: '#F2F2F2', width:' 500px' }}>
        <AddProduct />
        <ProductsList />
        <DeleteConfirmationModal />
      </Container>
  );
}

export default App;
