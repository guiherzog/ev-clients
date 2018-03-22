import { getClientsFromDatabase } from '../api/clients';

export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_LAST_CLIENTS = 'GET_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';
export const EDIT_CLIENT = 'EDIT_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
 
export function getClients() {
  const clientsFromDB = getClientsFromDatabase();
  return { type: GET_CLIENTS, clients: clientsFromDB }
}

export function getLastAddedClients() {
  const clientsFromDB = getClientsFromDatabase().slice(-10).reverse();
  return { type: GET_LAST_CLIENTS, clients: clientsFromDB }
}

export function getTotalClients() {
  const clientsFromDB = getClientsFromDatabase();
  return { type: GET_LAST_CLIENTS, totalClients: clientsFromDB.length }
}

export function addClient(client) {
  return { type: ADD_CLIENT, client }
}
 
export function editClient(client) {
  return { type: EDIT_CLIENT, client }
}

export function removeClient(id) {
  return { type: REMOVE_CLIENT, id }
}