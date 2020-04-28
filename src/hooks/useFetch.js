import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        dataLoading: true,
        dataLoadingFailed: false,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        dataLoading: false,
        dataLoadingFailed: false,
        data: action.payload,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        dataLoading: false,
        dataLoadingFailed: true,
      };
    default:
      throw new Error();
  }
};

export const UseFetch = (url, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    dataLoading: false,
    dataLoadingFailed: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_DATA });
      try {
        const result = await axios(url);
        dispatch({ type: FETCH_DATA_SUCCESS, payload: result.data });
      } catch (error) {
        dispatch({ type: FETCH_DATA_ERROR });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default UseFetch;