import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { typedName, dotPrefixer } from "@/libs/types";

// import { graphql } from "@/gql/gql";
// import { gql } from "@/model/api";
import { rootSelector, createSelector, RootState } from "@/model/store";
import { createAsyncThunk } from "@/model/thunk";

// import type {} from "@/gql/graphql";

export const name = typedName("_CHANGE_ME");
export const thunkName = dotPrefixer(name);
([] as (keyof RootState)[]).indexOf(name); // validation correctness setup reducers

/**
 * ACTION TYPES
 */

/**
 * API QUERIES
 */
// const mutChangeMe = graphql(`
//   mutation _do_not_use_ {
//     _do_not_use_
//   }
// `);

/**
 * MODEL TYPES
 */
interface ChangeMe {
  id: number;
}

/**
 * ACTION Handlers
 */
export const doChangeMe = createAsyncThunk(
  thunkName("doChangeMe"),
  async (payload: {}, { dispatch, rejectWithValue }) => {
    // return apis
    //   .healthCheck()
    //   .then((res) => {
    //     dispatch(setChangeMes([]));
    //     return res;
    //   })
    //   .catch(rejectWithValue);
  }
);

/**
 * QUERY Selectors
 */
export const selectById = (id: number) =>
  createSelector(rootSelector, (state) => {
    return state._CHANGE_ME.all.find((item) => item.id === id);
  });

export const slice = createSlice({
  name: name,
  initialState: {
    all: [] as ChangeMe[],
  },
  reducers: {
    setChangeMes: (state, action: PayloadAction<ChangeMe[]>) => {
      state.all = action.payload;
    },
  },
});

// export const { setChangeMes } = slice.actions;

export const mutates = slice.actions;
