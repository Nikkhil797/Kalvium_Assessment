import React ,{useState} from 'react'
import Swal from 'sweetalert2';

function Edit({students , selectedStudent , setStudents, setIsEditing}) {

  const id = selectedStudent.id;

  const [firstName, setFirstName] = useState(selectedStudent.firstName);
  const [lastName, setLastName] = useState(selectedStudent.lastName);
  const [email, setEmail] = useState(selectedStudent.email);
  const [section, setSection] = useState(selectedStudent.section);
  const [date, setDate] = useState(selectedStudent.date);

  const handleUpdate = e =>{
    e.preventDefault();

    if (!firstName || !lastName || !email || !section || !date) {
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true
        });
    }

    const student = {
        id,
        firstName,
        lastName,
        email,
        section,
        date
    };

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1, student);
            break;
        }
    }

    setStudents(students);
    setIsEditing(false);

    Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `${student.firstName} ${student.lastName}'s data has been updated.`,
        showConfirmButton: false,
        timer: 1500
    });
  }

  return (
    <div className="small-container">
        <form onSubmit={handleUpdate}>
            <h1>Edit Employee</h1>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="section">Section</label>
            <input
                id="salary"
                type="text"
                name="section"
                value={section}
                onChange={e => setSection(e.target.value)}
            />
            <label htmlFor="date">Date</label>
            <input
                id="date"
                type="date"
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <div style={{ marginTop: '30px' }}>
                <input type="submit" value="Update" />
                <input
                    style={{ marginLeft: '12px' }}
                    className="muted-button"
                    type="button"
                    value="Cancel"
                    onClick={() => setIsEditing(false)}
                />
            </div>
        </form>
    </div>
);
}

export default Edit