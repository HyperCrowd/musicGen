import React, { createContext, useContext, useReducer } from 'react';

export const trackerContext = createContext(null);

export const useTracker = () => useContext(trackerContext);
