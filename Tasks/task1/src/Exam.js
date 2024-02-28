import React, { useEffect, useState } from 'react';

function Exam() {
    const studentdata = [
        {
            name: 'Rohith',
            id: 2100032432,
            year: 3,
            sem: 2,
            branch: 'CSE'
        },
        {
            name: 'Venky',
            id: 2100032420,
            year: 3,
            sem: 2,
            branch: 'CSE'
        },
        {
            name: 'ganesh',
            id: 2100030960,
            year: 3,
            sem: 2,
            branch: 'CSE'
        },
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(studentdata);
    }, []);

    const sortac = () => {
        const sorted = [...data].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

        setData(sorted);
    };

    const sortdec = () => {
        const sorted = [...data].sort((a, b) => {
            return b.name.localeCompare(a.name);
        });

        setData(sorted);
    };

    const handleclick = (id) => {
        // Update the name to uppercase for the clicked student
        const updatedData = data.map(student => {
            if (student.id === id) {
                return { ...student, name: student.name.toUpperCase() };
            }
            return student;
        });
        setData(updatedData);
    };
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>id</th>
                        <th>course</th>
                        <th>year</th>
                        <th>sem</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((s, i) => (
                        <tr className='row' key={i} onClick={() => handleclick(s.id)}>
                            <td>{s.name}</td>
                            <td>{s.id}</td>
                            <td>{s.branch}</td>
                            <td>{s.year}</td>
                            <td>{s.sem}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={sortac}>Sort Ascending</button>
            <button onClick={sortdec}>Sort Descending</button>
        </>
    );
}

export default Exam;
