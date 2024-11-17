import { useEffect, useState } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmploees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employee");
        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees: ", error.message);
      }
    };

    fetchEmploees();
  }, []);

  const handleDelete = async (employeeId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete!");
    if (isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/employee/${employeeId}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.id !== employeeId)
          );
        }

        console.log(`Employee ${employeeId} deleted successfully!`);
      } catch (error) {
        console.error("Error deleting employee:", error.message);
      }
      window.alert("Employee has been deleted.");
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center text-2xl mb-5">Employees</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant="outline-secondary" className="mr-2">
                      Update
                    </Button>
                    <Button
                      onClick={() => handleDelete(employee.id)}
                      variant="outline-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
