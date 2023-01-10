import { useQuery } from "@apollo/client"
import { ALL_PERSONS } from "./graphql-queries"

export const usePersons = () => {
    const result = useQuery(ALL_PERSONS)
    return result
}

