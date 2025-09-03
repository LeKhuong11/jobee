import { RouterProvider } from "react-router-dom"
import { useAppSelector } from "@context/hooks";
import router from "./routes"
import Loading from "@components/Loading";

function App() {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  
  return (
    <div className="container mx-auto px-4">
      {isLoading && <Loading />}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
