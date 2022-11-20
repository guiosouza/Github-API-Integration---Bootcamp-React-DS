import GitSearch from "pages/GitSearch";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/gitsearch">
                    <GitSearch/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;