// import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';

import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
// import AuthPage from './pages/AuthModalPage';
import React, { Component } from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthProvider } from "./Auth"
import PrivateRoute from "./PrivateRoute";

import './styles/reduction.scss';

const Login = React.lazy(() => import('./pages/Login.js'));
const SignUp = React.lazy(() => import('./pages/SignUp.js'));
// const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage.js'));
const MatchPage = React.lazy(() => import('./pages/MatchPages.js'));
const TeamPageAdmin = React.lazy(() => import('./pages/TeamPageAdmin.js'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const CalendarPage = React.lazy(() => import('./pages/CalendarPage.js'));
const HistoryPage = React.lazy(() => import('./pages/HistoryPage.js'));
const TeamPage = React.lazy(() => import('./pages/TeamPage.js'));
const FacebookPage = React.lazy(() => import('./pages/FacebookPage.js'));
const InstagramPage = React.lazy(() => import('./pages/InstragramPage.js'));
const SponsorPage = React.lazy(() => import('./pages/SponsorPage.js'));
const DonatePage = React.lazy(() => import('./pages/DonatePage.js'));
const DuesPage = React.lazy(() => import('./pages/DuesPage.js'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends Component {
  state = {

    username: "",

  }

  updatedUser = (currentUser) => {
    this.setState ({ username: currentUser})
    // console.log(this.state.username)
  }

  render() {
    return (
      <AuthProvider>
        
        <BrowserRouter>
          <Switch>
              {/* <LayoutRoute
                exact
                path="/login"
                layout={EmptyLayout}
                component={props => (
                  <AuthPage {...props} authState={STATE_LOGIN} />
                )}
              />
              <LayoutRoute
                exact
                path="/signup"
                layout={EmptyLayout}
                component={props => (
                  <AuthPage {...props} authState={STATE_SIGNUP} />
                )}
              /> */}

              <MainLayout breakpoint={this.props.breakpoint}>
                <React.Suspense fallback={<PageSpinner />}>
                  <Route exact path="/" component={DashboardPage} />
                  <Route exact path="/history" component={HistoryPage} />
                  <Route exact path="/team" component={TeamPage} />
                  <Route exact path="/calendar" component={CalendarPage} />
                  <Route
                    exact
                    path="/facebook"
                    component={FacebookPage}
                  />
                  <Route exact path="/instagram" component={InstagramPage} />
                  <Route exact path="/sponsor-page" component={SponsorPage} />
                  <Route exact path="/donate" component={DonatePage} />
                  <Route exact path="/dues" component={DuesPage} />
                  {/* <Route
                    exact
                    path="/login-modal"
                    component={AuthModalPage} /> */}

                  <Route exact path="/login" render = {(props) => <Login updatedUser = {this.updatedUser} /> }/>
                  <Route exact path="/signup" render={(props) => <SignUp updatedUser = {this.updatedUser} />}/>
                  <PrivateRoute exact path="/events" component={EventsPage} />
                  <PrivateRoute exact path="/match" component={MatchPage} />
                  <PrivateRoute exact path="/teamAdmin" component={TeamPageAdmin} />
                </React.Suspense>
              </MainLayout>
              <Redirect to="/" />
            </Switch>
        </BrowserRouter>

      </AuthProvider>

    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'lg' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'lg' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'lg' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
