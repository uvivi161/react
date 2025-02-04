import React, { useReducer, useState } from 'react';
import { myUserReducer, myUserContext, MyUser, Action } from './MyUserReducer';

const UserManagement: React.FC = () => {
    const [state, dispatch] = useReducer(myUserReducer, []);
    const [newUser, setNewUser] = useState<Partial<MyUser>>({});
    const [updateUser, setUpdateUser] = useState<Partial<MyUser>>({});
    const [updateId, setUpdateId] = useState<number | null>(null);

    const handleAddUser = () => {
        dispatch({ type: 'ADD', data: newUser });
        setNewUser({});
    };

    const handleUpdateUser = () => {
        if (updateId !== null) {
            dispatch({ type: 'UPDATE', id: updateId, data: updateUser });
            setUpdateId(null);
            setUpdateUser({});
        }
    };

    const handleDeleteUser = (id: number) => {
        dispatch({ type: 'DELETE', id });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        const { name, value } = e.target;
        if (type === 'new') {
            setNewUser({ ...newUser, [name]: value });
        } else if (type === 'update') {
            setUpdateUser({ ...updateUser, [name]: value });
        }
    };

    return (
        <myUserContext value={[state, dispatch]}>
            <div>
                <h1>User Management</h1>
                <div>
                    <h2>Add New User</h2>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={newUser.firstName || ''}
                        onChange={(e) => handleInputChange(e, 'new')}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={newUser.lastName || ''}
                        onChange={(e) => handleInputChange(e, 'new')}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={newUser.email || ''}
                        onChange={(e) => handleInputChange(e, 'new')}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={newUser.password || ''}
                        onChange={(e) => handleInputChange(e, 'new')}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={newUser.address || ''}
                        onChange={(e) => handleInputChange(e, 'new')}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={newUser.phone || ''}
                        onChange={(e) => handleInputChange(e, 'new')}
                    />
                    <button onClick={handleAddUser}>Add User</button>
                </div>

                <div>
                    <h2>Users List</h2>
                    <ul>
                        {state.map(user => (
                            <li key={user.id}>
                                {`${user.firstName} ${user.lastName} - ${user.email} - ${user.address} - ${user.phone}`}
                                <button onClick={() => {
                                    setUpdateId(user.id);
                                    setUpdateUser(user);
                                }}>
                                    Update
                                </button>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>

                {updateId !== null && (
                    <div>
                        <h2>Update User</h2>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={updateUser.firstName || ''}
                            onChange={(e) => handleInputChange(e, 'update')}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={updateUser.lastName || ''}
                            onChange={(e) => handleInputChange(e, 'update')}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={updateUser.email || ''}
                            onChange={(e) => handleInputChange(e, 'update')}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={updateUser.password || ''}
                            onChange={(e) => handleInputChange(e, 'update')}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={updateUser.address || ''}
                            onChange={(e) => handleInputChange(e, 'update')}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={updateUser.phone || ''}
                            onChange={(e) => handleInputChange(e, 'update')}
                        />
                        <button onClick={handleUpdateUser}>Update User</button>
                    </div>
                )}
            </div>
        </myUserContext>
    );
};

export default UserManagement;