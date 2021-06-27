import { urlApi } from "./url";

export const postAuth = async (email, password) => {
    const response = await fetch(`${urlApi}/auth`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response.body);

    const dataJSON = await response.json();
    return dataJSON

    // if(response.status ===200){return dataJSON;
    // }
    // if (response.status === 400) {
    //     return Promise.reject('El email y password son requeridos');
    // }

     .then((response) => {
         if (response.status === 200) {
             return dataJSON;
         } if (response.status === 400) {
             return Promise.reject('El email y password son requeridos');
         }
     })
}
