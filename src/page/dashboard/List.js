import React from 'react'

function List( { students , handleEdit , handleDelete}) {
//   const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: null
// });


  return (
    <div className='contain-table'>
    <table className='striped-table'>
    <thead>
      <tr>
        <th>No.</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Section</th>
        <th>Date</th>
        <th colSpan={2} className='text-center'>
            Actions
        </th>
      </tr>
    </thead>
 
    <tbody>
    {students.length > 0 ? (
                        students.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.section}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Students</td>
                        </tr>
                    )}
    </tbody>
  </table>
  </div>
  )
}

export default List