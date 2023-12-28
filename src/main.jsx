import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
<QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools initialIsOpen={false}/>
</QueryClientProvider>
);
