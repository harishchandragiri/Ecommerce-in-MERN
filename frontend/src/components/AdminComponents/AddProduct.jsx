import React, { useState } from 'react'
import AdminSideBar from '../../components/AdminComponents/AdminSideBar'
import figure from '../../pages/image/mackbook.jpg'

function AddProduct() {

  const [formData, setformData] = useState({
    productName:'',
    Price:'',
    Stock:'',
    image: null, // Store the file for backend submission
    preview: figure,
  });
  const handleChange = (e) => {
    const {name, value} = e.target;

    setformData({
      ...formData, 
      [name]:value,
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the image URL in the state
        setformData({
          ...formData,
          image: file,
          preview: URL.createObjectURL(file),
        });
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('Price', formData.Price);
    formDataToSend.append('Stock', formData.Stock);
    if (formData.image) {
      formDataToSend.append('image', formData.image); // Append the file
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className='relative flex h-[89.6vh] overflow-x-hidden'>
      <AdminSideBar />
      <div className='absolute left-0 sm:left-64 w-full h-full sm:pr-64 flex justify-center items-center'>
      <div className='bg-orange-100 m-2 sm:m-4 block w-[250px] border border-black rounded-sm'>
          <h1 className='font-bold m-3'>Add Product</h1>
          <form className='w-full' onSubmit={handleSubmit}>
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Product Name' name='productName' value={formData.productName} onChange={handleChange} />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Price' name='Price' value={formData.Price}  onChange={handleChange} />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Stock' name='Stock' value={formData.Stock} onChange={handleChange} />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="file" onChange={handleImageChange} />
            <div className='w-full flex justify-center'>
              <img className='h-[80px] w-[80px] m-1 border-[2px] rounded-md' src={formData.preview} alt="Preview" />
            </div>
            <button className='bg-green-300 h-[40px] w-[200px] rounded-md border-[2px] my-4 border-black' type='submit'>Add</button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default AddProduct