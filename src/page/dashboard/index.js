import React ,{ useState }  from 'react'
import { StudentData } from '../../data'
import Add from "./Add"
import Edit from "./Edit"
import Header from "./Header"
import List from "./List"
import Swal from 'sweetalert2'


function Dashboard() {

  const [students, setStudents] = useState( StudentData );
  const [selectedStudent, setSelectedStudents] = useState( null );
  const [isAdding,setIsAdding] = useState(false);
  const [isEditing,setIsEditing] = useState(false);

  const handleEdit = (id) =>{
    const [employee] = students.filter(employee => employee.id === id);

    setSelectedStudents(employee);
    setIsEditing(true);
  }

  const handleDelete = (id) =>{
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then(result => {
      if (result.value) {
          const [employee] = students.filter(employee => employee.id === id);

          Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
              showConfirmButton: false,
              timer: 1500,
          });

          setStudents(students.filter(employee => employee.id !== id));
      }
  });
  }

  return (
    <div className = "Container">
      {!isAdding && !isEditing &&(
        <>
          <Header 
            setIsAdding={setIsAdding}
          />
          <List
            students={students}
            handleEdit = {handleEdit}
            handleDelete = {handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          students = {students}
          setStudents = {setStudents}
          setIsAdding = {setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          students = {students}
          selectedStudent = {selectedStudent}
          setStudents = {setStudents}
          setIsEditing = {setIsEditing}
        />
      )}

    </div>
  )
}

export default Dashboard;