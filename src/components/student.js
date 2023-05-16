import React from 'react'

export function Student({ student: { first_name, last_name, check_in_time } }) {
  return <tr>
    <td>{ first_name }</td>
    <td>{ last_name }</td>
    <td>{ check_in_time }</td>
  </tr>
}
