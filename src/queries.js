import { useQuery } from "react-query"
import { axiosInstance } from "./axiosInstance"

export const useStudentsQuery = () => useQuery({
  queryKey: ['students'],
  queryFn:  () => axiosInstance.get('/students')
})
