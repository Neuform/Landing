import React, { useState, useRef, useEffect } from 'react';
import image from '../../assets/logolistback.png';
import '../../App.css';

const ApplyForPosition = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    position: '',
    roles: []
  });
  const [errors, setErrors] = useState({});
  const [isRolesDropdownOpen, setIsRolesDropdownOpen] = useState(false);
  const rolesDropdownRef = useRef(null);

  const roles = [
    'Ad Maker', 'Android Developer', 'Backend Developer', 'Cloud Engineer', 'Community Manager',
    'Content Creator', 'Conference Speaker', 'Corporate Trainer', 'CRM Specialist', 'Cyber Security Engineer',
    'Data Analyst', 'Data Scientist', 'DevOps', 'Digital Content Strategist', 'Digital Marketing',
    'Direct Sales Representative', 'E-commerce Specialist', 'Email Marketing Specialist', 'Expert Consultant',
    'Field Sales Representative', 'Flutter Developer', 'Frontend Developer', 'Full Stack Developer',
    'Graphics Designer', 'iOS Developer', 'Inside Sales Specialist', 'IT Security Specialist',
    'Marketing Analyst', 'Meta Ads Expert', 'Mobile App Developer', 'Network Engineer', 'PPC Specialist',
    'Product Designer', 'Product Manager', 'Project Manager', 'Quality Assurance (QA) Tester',
    'Recruitment Specialist', 'Regional Sales Manager', 'Sales Consultant', 'SEO Expert', 'Server Management',
    'Shopify Expert', 'Social Media Manager', 'Social Media Strategist', 'Software Engineer',
    'Technical Support Engineer', 'Training and Development Manager', 'UI/UX Designer', 'UX Researcher',
    'Video Editor', 'WordPress Developer'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rolesDropdownRef.current && !rolesDropdownRef.current.contains(event.target)) {
        setIsRolesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone should be 10 digits';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
      newErrors.city = 'City should only contain letters and spaces';
    }

    if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode should be 6 digits';
    }

    if (!formData.position) {
      newErrors.position = 'Position is required';
    }

    if (formData.roles.length === 0) {
      newErrors.roles = 'At least one role must be selected';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const handleRoleChange = (role) => {
    setFormData(prevState => ({
      ...prevState,
      roles: prevState.roles.includes(role)
        ? prevState.roles.filter(r => r !== role)
        : [...prevState.roles, role]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const recipient = "neuformtech@gmail.com";
      const subject = encodeURIComponent(`${formData.position} Application for ${formData.roles.join(', ')} at Neuform`);
      const body = encodeURIComponent(`Greetings Neuform,

My name is ${formData.name}, and I am excited to apply for the following role(s) ${formData.position} position at Neuform:

${formData.roles.join('\n')}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}

Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to Neuform.
Resume Attached :-
Best regards,
${formData.name}`);

      const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
      
      alert("You will now be redirected to Gmail to complete your application. Please remember to attach your resume before sending the email.");
      
      window.open(gmailComposeURL, '_blank');
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <section className="py-12 bg-primary_bright min-h-screen flex flex-col items-center justify-center ml-4 mr-4">
      <h2 className=" text-2xl md:text-5xl  font-bold mb-8 text-center text-black"> <span className='text-accent_red'>Become</span> a Team Member</h2>
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div 
            className="bg-cover bg-center p-8 rounded-lg border border-2 border-bright_primary"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-semibold">
              <div>
                <label className="block mb-2" htmlFor="name">Name</label>
                <input
                  className="w-full p-2 border rounded-lg text-gray-800"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full p-2 border rounded-lg text-gray-800"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="phone">Phone</label>
                <input
                  className="w-full p-2 border rounded-lg text-gray-800"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="position">Position</label>
                <select
                  className="w-full p-2 border rounded-lg text-gray-800"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a position</option>
                  <option value="Job">Job</option>
                  <option value="Internship">Internship</option>
                </select>
                {errors.position && <p className="text-red-300 text-sm mt-1">{errors.position}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2" htmlFor="roles">Applying for Role(s)</label>
                <div className="relative" ref={rolesDropdownRef}>
                  <button
                    type="button"
                    className="w-full p-2 border rounded-lg text-gray-800 bg-white text-left flex justify-between items-center"
                    onClick={() => setIsRolesDropdownOpen(!isRolesDropdownOpen)}
                  >
                    {formData.roles.length > 0 ? formData.roles.join(', ') : 'Select role(s)'}
                    <span className="ml-2 font-bold">▼</span>
                  </button>
                  {isRolesDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {roles.map((role, index) => (
                        <label key={index} className="flex items-center p-2 hover:bg-gray-100">
                          <input
                            type="checkbox"
                            checked={formData.roles.includes(role)}
                            onChange={() => handleRoleChange(role)}
                            className="mr-2"
                          />
                          <span className="text-gray-800">{role}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                {errors.roles && <p className="text-red-300 text-sm mt-1">{errors.roles}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2" htmlFor="address">Address</label>
                <input
                  className="w-full p-2 border rounded-lg text-gray-800"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                {errors.address && <p className="text-red-300 text-sm mt-1">{errors.address}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="city">City</label>
                <input
                  className="w-full p-2 border rounded-lg text-gray-800"
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                {errors.city && <p className="text-red-300 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="pincode">Pincode</label>
                <input
                  className="w-full p-2 border rounded-lg text-gray-800"
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                />
                {errors.pincode && <p className="text-red-300 text-sm mt-1">{errors.pincode}</p>}
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-black font-semibold text-white py-2 px-6 rounded-lg hover:bg-accent_red transition duration-300">
              Submit Application
            </button>
            <p className="text-sm text-accent_red mt-4 font-semibold">* Please remember to attach your resume to the email after submitting this form.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyForPosition;