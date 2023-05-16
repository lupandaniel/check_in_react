import React                from 'react'
import { Table, Container } from 'react-bootstrap'
import { Student }          from "./student"
import { useStudentsQuery } from "../queries"

export function Students() {

  const { isLoading, isError, data: students, error } = useStudentsQuery()

  if ( isLoading ) return <p>Loading...</p>

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Check in time</th>
        </tr>
        </thead>

        <tbody>
        { students.data.map((student, index) => <Student student={ student } key={ index }/>) }
        </tbody>
      </Table>
    </Container>
  );
}
