import React, {use, useEffect, useState} from 'react';
import Table from "./components/Table.jsx";

const App = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState([]);
    const [filteredUserData, setFilteredUserData] = useState(userData);

    const columns = [
        {
            header: 'Name',
            key: 'name',
        },
        {
            header: 'Username',
            key: 'username',
        },
        {
            header: 'Email',
            key: 'email',
        },
        {
            header: 'Phone',
            key: 'phone',
        },
        {
            header: 'Website',
            key: 'website',
        },
    ]

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUserData(json)
                setFilteredUserData(json)
            })
    }, [])

    useEffect(() => {
        if(search === ''){
            setFilteredUserData(userData)
        }

        const filteredUsers = userData?.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredUserData(filteredUsers)
    }, [search]);

    return (
        <Table
            columns={columns}
            data={filteredUserData}
            search={search}
            setSearch={setSearch}
        />
    );
};

export default App;