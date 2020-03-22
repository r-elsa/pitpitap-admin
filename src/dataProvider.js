import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import jsonServerProvider from 'ra-data-json-server';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }

  
    return fetchUtils.fetchJson(url, options);
  };
  

  export const dataProvider = jsonServerProvider('https://pitpitap-server-staging.herokuapp.com/api/admin', httpClient);


