import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const productsSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    loading: false,
    detailProduct: [],
    error: null,
  },
  reducers: {
    fetchProductSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      const products = action.payload

      state.items = [...products]
    },
    setDetailProduct: (state, action) => {
      state.detailProduct = action.payload;
    },
    fetchLoading: (state, action) => {
      state.loading = action.payload;
    },

    fetchError: (state, action)=>{
      console.log(action);
      state.error = action.payload
    },
  },
})



// Action creators are generated for each case reducer function
export const { fetchProductSuccess, fetchLoading, fetchError, setDetailProduct } = productsSlice.actions

export function fetchPubProducts() {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading(true));
      const response = await axios({
        method: "get",
        url: import.meta.env.VITE_BASE_URL + "/pub/products?category=2",
      });
      console.log(response);
      // setProucts(response.data.rows);
      dispatch(fetchProductSuccess(response.data.rows));
      dispatch(fetchError(null));
    } catch (error) {
      dispatch(fetchError(error))
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}
export function fetchPubProductsById(id) {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading(true));
      const response = await axios({
        method: "get",
        url: import.meta.env.VITE_BASE_URL + `/pub/products/${id}`,
      });
      // console.log(response);
      // setProucts(response.data.rows);
      dispatch(setDetailProduct(response.data));
      dispatch(fetchError(null));
    } catch (error) {
      dispatch(fetchError(error))
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export default productsSlice.reducer