import React                                from 'react'
import { Students }                         from "./students"
import { useStudentsQuery }                 from "../queries"
import { render, screen }                   from '@testing-library/react'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

jest.mock("../queries");

let mockStudents = [
  {
    "id":            1,
    "first_name":    "Jim",
    "last_name":     "Hawkings",
    "check_in_time": "2023-05-16T17:12:01.541Z"
  },
  {
    "id":            2,
    "first_name":    "Sally",
    "last_name":     "Ride",
    "check_in_time": "2023-05-17T17:12:16.577Z"
  }
]

const wrapper = ({ children }) => <QueryClientProvider client={ queryClient }>{ children }</QueryClientProvider>

describe('students', () => {
  it('should show loading when api is loading', async () => {
    useStudentsQuery.mockImplementation(() => ({
      isLoading: true,
      data:      { students: [] }
    }))

    render(<Students/>, { wrapper })
    expect(screen.getByText('Loading...')).toBeVisible()
  })

  it('should be dispplayed', async () => {
    useStudentsQuery.mockImplementation(() => ({
      isLoading: false,
      data:       { data: mockStudents }
    }))

    render(<Students/>, { wrapper })
    expect(screen.getByText('Sally')).toBeVisible()
    expect(screen.getByText('Jim')).toBeVisible()
  })
})

