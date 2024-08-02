import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cartSlice = createSlice({
  name: "carts",
  initialState: {
    myCart: [],
    openCartModal: false,
    chartDataModal: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchCartSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      const cart = action.payload;

      state.myCart = [...cart];
    },
    addCartSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      const cart = action.payload;
      
      state.myCart.push(cart);
    },
    setOpenCartModal: (state, action) => {
      state.openCartModal = action.payload;
    },
    setCartDataModal: (state, action) => {
      // console.log(action);
      const dataModal = action.payload
      console.log(dataModal);
      state.chartDataModal = dataModal
      },
      fetchLoading: (state, action) => {
        state.loading = action.payload;
      },
      
      fetchError: (state, action) => {
        console.log(action);
        state.error = action.payload;
      },
    },
  });

// Action creators are generated for each case reducer function
export const {
  fetchCartSuccess,
  fetchLoading,
  fetchError,
  setOpenCartModal,
  setCartDataModal,
} = cartSlice.actions;

export function fetchMyCart() {
  return async (dispatch) => {
    try {
      dispatch(fetchLoading(true));
      const response = await axios({
        method: "get",
        url: import.meta.env.VITE_BASE_URL + "/carts",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      // setProucts(response.data.rows);
      dispatch(fetchCartSuccess(response.data));
      dispatch(fetchError(null));
    } catch (error) {
      dispatch(fetchError(error));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}
export function addToMyCart(obj = {}) {
  const {id, quantity} = obj
  

  return async (dispatch) => {
    try {
      console.log("jalan di addChart");
      dispatch(fetchLoading(true));
      const response = await axios({
        method: "post",
        url: import.meta.env.VITE_BASE_URL + "/carts/" + id,
        data: {
          quantity : parseInt(quantity),
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log(response);
      dispatch(setOpenCartModal(false))
      dispatch(fetchError(null));
    } catch (error) {
      dispatch(fetchError(error));
    } finally {
      dispatch(fetchLoading(false));
    }
  };
}

export default cartSlice.reducer;
