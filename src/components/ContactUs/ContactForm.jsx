import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inquiryForm } from '../../state/Forms/Action';


const CustomMultiSelect = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="relative">
      <div
        className="w-full p-2 bg-gray-100 border border-gray-200 rounded cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected.length ? `${selected.length} selected` : 'Select services'}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-gray-100 border border-gray-200 rounded max-h-60 overflow-auto">
          {options.map((option, index) => (
            <label key={index} className="flex items-center p-2 hover:bg-gray-800">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => {
                  const updatedSelection = selected.includes(option)
                    ? selected.filter(item => item !== option)
                    : [...selected, option];
                  onChange(updatedSelection);
                }}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    services: [],
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
const dispatch = useDispatch()


  const services = [
    'Website Development', 'Mobile App Development', 'SEO',
    'Digital Marketing', 'UI/UX ', 'Influencer Marketing ',
    'Ads Making', 'WordPress Development', 'Influencer Management',
    'Logo & Graphics '
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (selectedServices) => {
    setFormData(prev => ({ ...prev, services: selectedServices }));
  };

  const sanitizeInput = (input) => {
    return input.replace(/[<>&'"]/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case "'": return '&#39;';
        case '"': return '&quot;';
        default: return char;
      }
    });
  };

  const validateForm = () => {

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone.trim())) newErrors.phone = 'Invalid phone number';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (validateForm()) {
      const sanitizedData = Object.entries(formData).reduce((acc, [key, value]) => {
        acc[key] = Array.isArray(value) ? value.map(sanitizeInput) : sanitizeInput(value);
        return acc;
      }, {});
      console.log('Form submitted:', sanitizedData);
      console.log(sanitizedData.email)
      // Here you would typically send the sanitizedData to your server
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
      let data = {
        name:sanitizedData.name,
        address:sanitizedData.address,
        email:sanitizedData.email,
        phone:sanitizedData.phone,
        message:sanitizedData.message,
        service:sanitizedData.services.join(', ') 
      }
      console.log('data object',data)
      dispatch(inquiryForm(data))
    }
  };

  return (
    <section className="bg-primary_bright text-black font-semibold py-12 flex items-center justify-center min-h-screen ml-2">
      
      <div className="w-full max-w-3xl p-6 bg-white border border-white rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        <h2 className="text-2xl mb-8 text-center">Our team will <span className='text-accent_red'>contact</span> you soon</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
                />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          <textarea
            name="address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 bg-gray-100 border border-gray-200 rounded"
            rows="2"
          ></textarea>
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          <CustomMultiSelect
            options={services}
            selected={formData.services}
            onChange={handleServiceChange}
            />
          {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
          <textarea 
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 border border-gray-300 rounded"
            rows="4"
            ></textarea>
          <button type="submit" className="bg-accent_red hover:bg-black py-2 px-4 rounded w-full font-semibold text-white">Submit</button>
        </form>
        {showAlert && (
          <div className="mt-4 p-4 bg-green-500 text-white rounded">
            Form submitted successfully!
          </div>
        )}
        {Object.keys(errors).length > 0 && (
          <div className="mt-4 p-4 bg-red-500 text-white rounded">
            Please correct the errors above before submitting.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;