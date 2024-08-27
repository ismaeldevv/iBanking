import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface State {
    character: { 
        id: string; 
        name: string; 
        lastname: string; 
    };
    accounts: { 
        id: number; 
        balance: number; 
        label: string; 
        owner: string; 
        type: string; 
        role: string; 
    }[];
    logs: { 
        id: number; 
        name: string; 
        message: string; 
        amount: number; 
        fromBalance: number; 
        toId: number; 
        date: string; 
    }[];
}

const initialState: State = {
    character: {
        id: "",
        name: "",
        lastname: "",
    },
    accounts: [],
    logs: [],
};

export const bankingSlice = createSlice({
    name: 'banking',
    initialState,
    reducers: {}
});

// Pas d'actions exportées si elles ne sont pas définies
// export const {} = bankingSlice.actions;

export const selectCharacter = (state: RootState) => state.banking.character;
export const selectAccounts = (state: RootState) => state.banking.accounts;
export const selectLogs = (state: RootState) => state.banking.logs;

export default bankingSlice.reducer;
