import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const catFetch = createAsyncThunk(
  "cat/catFetch",
  async () => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
)


