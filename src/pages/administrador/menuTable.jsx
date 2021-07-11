import React, { Component } from 'react';

const menuTable = ({menuProducts}) => {
    return(
        <div>
            <section>
                <h2>
                    <table>
                        <thead>
                            <thr>
                                <th>Categoría</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Producto</th>
                            </thr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Type</td>
                                <td>Price</td>
                                <td><img src="" alt="" /></td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </h2>
            </section>
        </div>
    )
}