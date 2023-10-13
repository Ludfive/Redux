import { createSlice } from '@reduxjs/toolkit';
import ESTADO from "../recursos/estado";
import { act } from 'react-dom/test-utils';

//name,initialState e reducers sao 
//de um objeto que cria uma fatia/slice da store,resultando em um redutor

const clienteSlice = createSlice({
    name:'cliente',
    initialState:{
        status:ESTADO.OCIOSO, //o 0 é uma repreentaçao que o estado é ocioso
        mensagem:'',
        listaClientes:[]        
    },
    reducers:{
        adicionar:(state,action) => {
            state.listaClientes.push(action.payload); //nao precisa nem do return
        },
        remover:(state,action) => {
            state.listaClientes = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cliente.cpf) //para cada clientevai verificar seu cpf ser diferente/dispachei minha action e vou comparar
            //esse é o nov estado da minha aplicaçao.Vou excluir da lista todos com cpf igual
        }
        atualizar:(state,action) => {
            //atualizar implicara em excluir o cliente da lista e adiciona-lo novamente com seus dados alterados
            //remover -> adicionar novamente com dados atualizados
            const listaTempCliente = state.listaClientes.filter(cliente => cliente.cpf !== action.payload.cliente.cpf);
            state.listaClientes = [...listaTempCliente, action.payload.cliente]
        }
    }
})
//exportando as actions que alteram o estado cliente
export const {adicionar,remover,atualizar} = clienteSlice.actions;

//exportando o redutor para ser utilizado na store
export default clienteSlice.reducer;



