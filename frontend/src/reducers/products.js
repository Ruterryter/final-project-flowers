import { createSlice } from "@reduxjs/toolkit";

const productData = [
  { "_id": { "$oid": "5ed611a410b33c002372376b" }, "name": "finaste2", "price": 550, "description": "fina blommor", "imageUrl": "https://www.interflora.se/siteassets/produkter/1201585-2.jpg", "__v": 0 },
  { "_id": { "$oid": "5ed63b8f4ff4e40023fbf1d9" }, "name": "studentblomma", "price": 750, "description": "fina sommarblommor", "imageUrl": "https://www.interflora.se/siteassets/produkter/1201709.jpg", "__v": 0 },
  { "_id": { "$oid": "5ed63c824ff4e40023fbf1da" }, "name": "Pioner", "price": 450, "description": "fina rosa pioneer", "imageUrl": "https://www.interflora.se/siteassets/produkter/1201224.jpg", "__v": 0 }
]

//fetch from database? here?

export const products = createSlice({
  name: "products",
  initialState: productData
})