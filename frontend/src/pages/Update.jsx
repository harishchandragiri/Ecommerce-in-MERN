import React, { useState }  from 'react'
import figure from './image/mackbook.jpg'

function Update() {
    const [formData, setformData] = useState({
        Name:'',
        Date:'',
        Password:'',
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
        formDataToSend.append('Name', formData.Name);
        formDataToSend.append('Date', formData.Date);
        formDataToSend.append('Password', formData.Password);
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
      <div className=' w-full h-full  flex justify-center items-center'>
      <div className='bg-orange-100 mt-9  block w-[250px] border border-black rounded-sm'>
          <h1 className='font-bold m-3'>Update Details</h1>
          <form className='w-full' onSubmit={handleSubmit}>
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="text" placeholder='Name' name='Name' value={formData.Name} onChange={handleChange} />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="date" name='Date' value={formData.Date}  onChange={handleChange} />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="password" placeholder='Password' name='Password' value={formData.Password} onChange={handleChange} />
            <input className='outline-double w-[200px] m-1 p-1 rounded-sm' type="file" onChange={handleImageChange} />
            <div className='w-full flex justify-center'>
              <img className='h-[80px] w-[80px] m-1 border-[2px] rounded-md' src={formData.preview} alt={formData.preview} />
            </div>
            <button className='bg-green-300 h-[40px] w-[200px] rounded-md border-[2px] my-4 border-black' type='submit'>Add</button>
          </form> 
        </div>
      </div>

  )
}

export default Update