import { configureStore } from 'react-redux';
import clienteSlice from './clienteReducer'; //nao precisa da chave que vem por padrao

const store = configureStore({
    reducer:{
        cliente:clienteSlice,
        
    }
});

export default store;