import { useContext, useState } from "react";
import "./ShowDetails.css";
import UserContext from "./UserContext";
import InputDetails from "./InputDetails"; // Import the InputDetails component

function ShowDetails() {
    const { users } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [showInput, setShowInput] = useState(false); // State to control component visibility

    // Filter users based on search term (email)
    const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle input change for search
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Toggle visibility to show InputDetails or ShowDetails
    const handleAddClick = () => {
        setShowInput(true); // Show InputDetails
    };

    // Callback to show ShowDetails after form submission
    const handleFormSubmit = () => {
        setShowInput(false); // Hide InputDetails and show ShowDetails
    };

    return (
        <div>
            {showInput ? (
                // Show InputDetails component
                <InputDetails onFormSubmit={handleFormSubmit} /> // Pass onFormSubmit callback
            ) : (
                // Show ShowDetails component
                <>
                    <div className="Header">
                        <p style={{ margin: "20px", fontSize: "30px" }}>Manage Users</p>
                        <div className="rightSide">
                            <div className="search">
                                <i
                                    style={{ width: "25px", height: "20px" }}
                                    className="fa fa-search"
                                ></i>
                            </div>

                            <button onClick={handleAddClick}>
                                <span className="circle plus"></span>Add
                            </button>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className="searchInput">
                        <input
                            className="details"
                            type="email"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder=" Search for Email ID"
                        />
                    </div>

                    {/* User Table */}
                    <div className="scrollable-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone No.</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Location</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.firstName} {user.lastName}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{user.location}</td>
                                            <td>{user.department}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No users found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

export default ShowDetails;
