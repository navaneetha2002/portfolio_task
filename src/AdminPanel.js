import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import profileImage from './assets/images/girllaptop.json';
import Lottie from 'react-lottie';

const AdminPanel = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [data, setData] = useState([]);
    const [isMinimized, setIsMinimized] = useState(true);
    const [formData, setFormData] = useState({ name: "", description: "", image: null });
    const [editingId, setEditingId] = useState(null); // Track item being edited
    const [showUserForm, setShowUserForm] = useState(false); // Toggle form visibility for adding a user
    const [userData, setUserData] = useState({ username: "", password: "" }); // User registration form data
    const [users, setUsers] = useState([]); // State to store list of users
    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: profileImage, 
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn !== "true") {
            navigate("/login"); // Redirect if not logged in
        }
    
        if (selectedSection && !isMinimized) {
            fetchData(selectedSection);
        }
        fetchUsers();
    }, [selectedSection, isMinimized, navigate]);
    

    const fetchData = async (section) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/${section}`);
            setData(response.data);
        } catch (error) {
            console.error(`Error fetching ${section} data:`, error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users"); // Correct API endpoint for fetching users
            setUsers(response.data); // Set the fetched users to state
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };


    const handleSectionClick = (section) => {

        setShowUserForm(false);
        if (selectedSection === section) {
            setIsMinimized(!isMinimized);
        } else {
            setSelectedSection(section);
            setIsMinimized(false);
           
        }
    };
    
    const handleAddUserClick = () => {
        setShowUserForm((prev) => {
            if (!prev) {
                setSelectedSection(null); // Deselect other sections
                setIsMinimized(true); // Minimize other content
            }
            return !prev; // Toggle user form visibility
        });
    };
    
    
    

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        // localStorage.removeItem("username");

        navigate("/login");
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Prepare the data to send
        const dataToSend = {
            name: formData.name,
            description: formData.description,
        };
    
        // If the section is Skills or Projects, we handle file uploads with FormData
        if (selectedSection === "skills" || selectedSection === "projects") {
            const formDataObj = new FormData();
            formDataObj.append("name", formData.name);
            formDataObj.append("description", formData.description);
            if (formData.image) formDataObj.append("image", formData.image);
    
            try {
                if (editingId) {
                    await axios.put(`http://localhost:8080/api/${selectedSection}/${editingId}`, formDataObj);
                } else {
                    await axios.post(`http://localhost:8080/api/${selectedSection}`, formDataObj);
                }
            } catch (error) {
                console.error(`Error saving ${selectedSection}:`, error);
            }
        } else {
            // For AboutMe and Education, send data as JSON
            try {
                if (editingId) {
                    await axios.put(`http://localhost:8080/api/${selectedSection}/${editingId}`, dataToSend);
                } else {
                    await axios.post(`http://localhost:8080/api/${selectedSection}`, dataToSend);
                }
            } catch (error) {
                console.error(`Error saving ${selectedSection}:`, error);
            }
        }
    
        // Reset the form
        setFormData({ name: "", description: "", image: null });
        setEditingId(null);
    
        // Re-fetch data
        fetchData(selectedSection);
    };
    

    const handleEdit = (item) => {
        setFormData({ name: item.name, description: item.description, image: null });
        setEditingId(item.id);
    };

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        if (!isConfirmed) return;

        try {
            await axios.delete(`http://localhost:8080/api/${selectedSection}/${id}`);
            fetchData(selectedSection);
        } catch (error) {
            console.error(`Error deleting ${selectedSection} item:`, error);
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/users/register", userData); // Send user data to your backend
            setShowUserForm(false); // Close form after submission
            setUserData({ username: "", password: "" }); // Reset the form
            alert("User added successfully!");
        } catch (error) {
            console.error("Error adding user:", error);
            alert("Error adding user.");
        }
    };

    const handleDeleteUser = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (!isConfirmed) return;

        try {
            await axios.delete(`http://localhost:8080/users/${id}`); 
            fetchUsers(); // Re-fetch the users list after deletion
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <aside className="sidebar">
                
                <div className="nav-buttons">
                    {["aboutme", "education", "skills", "projects"].map((section) => (
                        <button
                            key={section}
                            className={`nav-btn ${selectedSection === section && !isMinimized ? "active" : ""}`}
                            onClick={() => handleSectionClick(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                    <button
                        className={`add-user-btn ${showUserForm ? "active" : ""}`}
                        onClick={handleAddUserClick}
                    >
                        Add User
                    </button>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                    
                </div>
            </aside>

            <div className="watermark watermark-1">NAVANEETHA</div>
            <div className="watermark watermark-2">NAVANEETHA</div>
            <div className="watermark watermark-3">NAVANEETHA</div>

            {/* Content Section */}
            <div className="content">
    {showUserForm && (
        <div className="user-form">
            <h3>Add User</h3>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={userData.username}
                    onChange={handleUserChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={handleUserChange}
                    required
                />
                <button type="submit">Add User</button>
            </form>
        </div>
    )}

    {/* Display the list of users only when "Add User" form is active */}
    {showUserForm && (
        <div className="user-list">
            <h3>Users</h3>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                users.map((user) => (
                    <div key={user.id} className="user-item">
                        <span>{user.username}</span> {/* Only display the username */}
                        <button onClick={() => handleDeleteUser(user.id)} className="delete-btn">
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    )}
</div>
        <div>

                {isMinimized ? (
                    <div className="placeholder">
                        {/* Hide Lottie animation when the user form is displayed */}
                        {!showUserForm && (
                            <Lottie options={defaultOptions} height={800} width={800} className="lottie-animation"/>
                        )}
                    </div>
                ) : (
                    <div className={`details-section ${selectedSection === 'skills' ? 'skills-section' : ''}`}>

                        <h3>{selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}</h3>

                        {/* Form for Adding/Updating Data */}
                        <form onSubmit={handleSubmit} className={`form-container 
                            ${selectedSection === 'skills' ? 'skills-section' : ''} 
                            ${selectedSection === 'projects' ? 'projects-section' : ''}`}>
                          
                            
                            {/* Conditionally render name input only when not editing skills */}
                            {!(selectedSection === "skills" && editingId) && (
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            )}


                            {/* Conditionally render the description input only when the section is not 'skills' */}
                            {selectedSection !== "skills" && (
                                <textarea
                                    name="description"
                                    placeholder="Enter Description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            )}
                            
                            {/* Conditionally render the image input only for Skills and Projects */}
                            {(selectedSection === "skills" || selectedSection === "projects") && (
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                            )}
                            
                            <button type="submit">{editingId ? "Update" : "Add"} Entry</button>
                        </form>


                        {/* Display Data */}
                        <div className={`data-list 
                            ${selectedSection === 'skills' ? 'skills-section' : ''} 
                            ${selectedSection === 'projects' ? 'projects-section' : ''}`}>

                            {data.length === 0 ? (
                                <p>No data available</p>
                            ) : (
                                data.map((item) => (
                                    <div key={item.id}
                                    className={`item-container ${selectedSection === 'skills' ? 'skills-item' : ''}`}
                                     >
                                        <div className="item-content">
                                        <span>{item.name}</span>
                                        {item.description && <p>{item.description}</p>}
                                        {item.image && <img src={`http://localhost:8080/api/${selectedSection}/${item.id}/image`} alt="Item" />}
                                        </div>
                                        <div className="item-buttons"> 
                                        <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button> 
                                        <button className="delete-btn" onClick={() => handleDelete(item.id)} className="delete-btn">Delete</button>
                                        </div>
                                        
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
