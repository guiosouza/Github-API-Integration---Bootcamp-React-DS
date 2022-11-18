import GitSearch from "pages/GitSearch";
import Home from "pages/Home";
import ResultPage from "pages/ResultPage";
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
                <Route path="/gitresult">
                    <ResultPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;