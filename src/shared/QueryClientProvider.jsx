import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const QueryClientProvider = ({children}) => {

    queryClient.setDefaultOptions({
        queries: {
            onError: err => console.err(err)
        },
        mutations: {
            retry: false,
            onError: err => console.err(err)
        }
    })

    return (
        <BaseQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </BaseQueryClientProvider>
    )
}

export default QueryClientProvider
