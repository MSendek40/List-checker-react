import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage/tasksPage";
import Author from "./features/author/Author";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li><Link to="/zadania">
                    Zadania
                </Link>
                </li>
                <li>
                    <Link to="/author">
                        O autorze
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to='/zadania'/>
                </Route>
            </Switch>
        </nav>
    </HashRouter>
)