import { useQuery } from "@tanstack/react-query"
import { useFirebase } from "src/shared/FirebaseProvider"

const QUERY_KEY = "technologies"

export const useGetTechnologies = () => {
    const {db} = useFirebase()

    return useQuery({
        queryKey: [QUERY_KEY], 
        queryFn: () => {
            return db.getAllInCollection("technologies")
                .then(response => response.docs.map(doc => ({...doc.data(), id: doc.id})))
        },
        ...{
            enabled: true,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false
        }
    })
}
