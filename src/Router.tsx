import HomePage from "./components/menuComponents/HomePage"
import AppLayout from "./components/menuComponents/AppLayout"
import { createBrowserRouter, Navigate } from "react-router-dom"
import RecipeForm from "./components/recepies/RecipeForm"
import RecipeLayout from "./components/recepies/RecipeLayout"
import RecipeDetails from "./components/recepies/RecipeDetails"
import ShowRecipe from "./components/menuComponents/ShowRecipes"
import { useContext } from "react"
import { UserContext } from "./components/login/UserReducer"

interface AuthGuardProps {
    children: React.ReactNode;
}

function AuthGuard({ children } : AuthGuardProps) {
    const [user] = useContext(UserContext);
    return user.id !== 0 ? children : <Navigate to="/" replace />; 
}

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            {
                path: '/', element: <HomePage />
            },
            {
                path: 'RecipeForm', element: <AuthGuard> <RecipeForm /> </AuthGuard>
            },
            {
                path: 'ShowRecipe', element: <RecipeLayout />
                , children:
                    [
                        {
                            path: 'list',
                            element: <ShowRecipe />
                        },
                        {
                            path: ":id",
                            element: <RecipeDetails />
                        }
                    ]
            }
        ]
    }
]);