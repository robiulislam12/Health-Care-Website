import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({children , ...rest}) {
    const {user, isLoading} = useAuth()
    if(isLoading) {
        return (
            <div className="container spinner">
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    )
}
