import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  account: string | null;
}

const initialState: WalletState = {
  account: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string | null>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = walletSlice.actions;
export default walletSlice.reducer;
