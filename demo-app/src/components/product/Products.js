import React, { useState, useEffect } from 'react'
import { Button, Table } from 'reactstrap';
import '../../assets/css/product.css'
import AddProduct from './AddProduct';
import axios from "axios";
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();


  const baseUrl = "https://localhost:7186/api/Product/GetAll";

  const [products, setProducts] = useState([]);

  const [post, setPost] = useState(null);



   async function getAll() {
    await axios.get(baseUrl).then((response) => {
      setProducts(response.data)
    });
  }


  // function getById(id) {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       setPost(json);
  //     })
  // }

  useEffect(() => {
    getAll();
  }, []);


  const [isOpen, setIsOpen] = useState(false)

  function addProduct() {
    setIsOpen(true);
  }



  function hide() {
    setIsOpen(false);
  }



  async function deleteProduct(id){
     await axios.delete(`https://localhost:7186/api/Product/Delete?id=${id}`);
     getAll();
  }


  return (
    <>

      <div className='container my-5 mb-5'>
        <Button onClick={() => addProduct()} color='success my-2 mb2'>Create</Button>
        <Table
        >
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Price
              </th>
              <th>
                Count
              </th>
              <th>
                Date
              </th>
              <th>
                Settings
              </th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(function (item) {
                return <tr>
                  <th>
                    {item.name}
                  </th>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    {item.count}
                  </td>
                  <td>
                    <Moment format="YYYY/DD/MM">{item.createdDate}</Moment>
                  </td>
                  <td>
                    <div className='settings'>
                      <Button color='info'>Detail</Button>
                      <Button color='primary'>Edit</Button>
                      <Button onClick={()=>deleteProduct(item.id)} color='danger'>Delete</Button>
                    </div>
                  </td>
                </tr>
              })
            }

          </tbody>
        </Table>
      </div>

      <AddProduct post={setPost} hide={hide} isOpen={isOpen} />
    </>
  )
}

export default Products
