import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedCategory: "Чай",
  }

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filteredCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
    },
})

//поместили в константу getSelectedCategory доступ к состоянию selectedCategory (selectedCategory: "Чай")
export const getSelectedCategory = state => state.products.selectedCategory;
export const { filteredCategory } = productsSlice.actions
export default productsSlice.reducer