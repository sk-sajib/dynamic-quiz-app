import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import './App.css'
import Blog from "./components/Blog/Blog"
import Statistics from "./components/Statistics/Statistics"
import Home from "./components/Home/Home"
import Main from "./Main/Main"
import QuizDetail from "./components/QuizDetail/QuizDetail"
import Error from "./components/Error/Error"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[


        {
            path:'/',
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
        },
        {
            path: '/statistics',
            // loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Statistics></Statistics>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
          path:'/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizDetail></QuizDetail>
        }

  
      ]
    },


  
  ]);

  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
