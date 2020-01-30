import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';
import GAListener from './components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthModalPage';
import React, { Component } from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';


const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage.js'));
const MatchPage = React.lazy(() => import('./pages/MatchPages.js'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const CalendarPage = React.lazy(() => import('./pages/CalendarPage.js'));
const HistoryPage = React.lazy(() => import('./pages/HistoryPage.js'));
const TeamPage = React.lazy(() => import('./pages/TeamPage.js'));
const FacebookPage = React.lazy(() => import('./pages/FacebookPage.js'));
const InstagramPage = React.lazy(() => import('./pages/InstragramPage.js'));
const SponsorPage = React.lazy(() => import('./pages/SponsorPage.js'));
const DonatePage = React.lazy(() => import('./pages/DonatePage.js'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
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
            />

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
                <Route 
                  exact 
                  path="/login-modal" 
                  component={AuthModalPage} />
                <Route exact path="/events" component={EventsPage} />
                <Route exact path="/match" component={MatchPage} /> 
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
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
