// import React, { useState, useEffect } from 'react'
// import styles from "./Ads.css";
// import Table from 'react-bootstrap/Table';

// const Ads = () => {

//     const [item, setItem] = useState([]);
//     useEffect(() => {
//         fetch("http://127.0.0.1/Barter%20online/src/API/ads.php")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setItem(result);
//                 }
//             )
//     }, [])

//     return (
//         <div>
//             <Table striped bordered hover >
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Title</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                         <th>Category</th>
//                         <th>Location</th>
//                         <th>Image</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {item.map(item => (
//                         <tr key={item.id}>
//                             <td>{item.ID}</td>
//                             <td>{item.title}</td>
//                             <td>{item.price}</td>
//                             <td>{item.description}</td>
//                             <td>{item.category}</td>
//                             <td>{item.location}</td>
//                             <td><img className={styles.tdImage} src={`http://127.0.0.1/Barter%20online/src/API/${item.file}`} />  </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     )

// }
// export default Ads;
// ********** working*******


import React, { useState, useEffect } from 'react'
import styles from "./Ads.css";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const Ads = () => {

    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1/Barter%20online/src/API/ads.php")
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                }
            )
    }, [])

    return (
        <div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Image</th>
                        <th>seller</th>
                        <th>number</th>
                    </tr>
                </thead>

                <tbody>
                    {item.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>                                                     
                            <td><Link to={`/products-detail/${item.id}`}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                            <td>{item.location}</td>
                            <td><img className={styles.tdImage} src={`http://127.0.0.1/Barter%20online/src/API/${item.file}`} />  </td>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>                       
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

}
export default Ads;
