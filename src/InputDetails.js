import React, { useContext, useState } from 'react';
import './InputDetails.css';
import UserContext from './UserContext';

function InputDetails({ onFormSubmit }) { // Use onFormSubmit to handle post-submit navigation
    const [user, setUser] = useState({
        firstName: '', lastName: '', phone: '', email: '', role: '', location: '', department: ''
    });
    const { addUser } = useContext(UserContext);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        const isFormIncomplete = Object.values(user).some((field) => field.trim() === '');
        if (isFormIncomplete) {
            alert('All fields are mandatory.');
            return;
        }

        // Add the user and reset form
        addUser(user);
        setUser({ firstName: '', lastName: '', phone: '', email: '', role: '', location: '', department: '' });

        onFormSubmit(); // Automatically go back to ShowDetails after submission
    };

    return (
        <div>
            <p className='mandatory'>All fields are mandatory</p>
            <div className="container">
                <div className='both'>
                    <label>FIRST NAME <sup className="star">*</sup></label>
                    <input
                        name="firstName"
                        value={user.firstName}
                        className="detail"
                        onChange={handleInputChange}
                        type="text"
                        required
                        placeholder="First Name"
                    />
                </div>
                <div className='both'>
                    <label>LAST NAME <sup className="star">*</sup></label>
                    <input
                        name="lastName"
                        value={user.lastName}
                        className="detail"
                        onChange={handleInputChange}
                        type="text"
                        required
                        placeholder="Last Name"
                    />
                </div>
                <div className='both'>
                    <label>PHONE <sup className="star">*</sup></label>
                    <input
                        name="phone"
                        value={user.phone}
                        className="detail"
                        onChange={handleInputChange}
                        type="number"
                        required
                        placeholder="Contact Number"
                    />
                </div>
                <div className='both'>
                    <label>EMAIL ID <sup className="star">*</sup></label>
                    <input
                        name="email"
                        value={user.email}
                        className="detail"
                        onChange={handleInputChange}
                        type="email"
                        required
                        placeholder="Email ID"
                    />
                </div>
                <div className='both'>
                    <label>ROLE <sup className="star">*</sup></label>
                    <input
                        name="role"
                        value={user.role}
                        className="detail"
                        onChange={handleInputChange}
                        type="text"
                        required
                        placeholder="Role"
                    />
                </div>
                <div className='both'>
                    <label>LOCATION <sup className="star">*</sup></label>
                    <input
                        name="location"
                        value={user.location}
                        className="detail"
                        onChange={handleInputChange}
                        type="text"
                        required
                        placeholder="Location"
                    />
                </div>
            </div>
            <div className='secondContainer'>
                <div className='last'>
                    <label>DEPARTMENT <sup className="star">*</sup></label>
                    <input
                        name="department"
                        value={user.department}
                        className="detail"
                        onChange={handleInputChange}
                        type="text"
                        required
                        placeholder="Department"
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default InputDetails;
