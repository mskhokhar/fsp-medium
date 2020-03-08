import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import Home from './home/home_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import FeedContainer from '../components/feed/feed_container';
import FeedItemContainer from '../components/feed_Item/feed_item_container';
import NewFeedItemContainer from '../components/new_feed_item/new_feed_item_container';
import FooterContainer from '../components/footer/footer_container';
import ProfileContainer from '../components/profile/profile_container';
import UpdatePostContainer from "../components/update_post/update_post_container";

const App = () => (
  <div>
    <div className="main-components">
      <div className="navbar-container">
        <NavbarContainer />
      </div>
      <div className="main-container">
        <Modal />
        <ProtectedRoute exact path="/" component={Home} />
        <Switch>
          <AuthRoute exact path="/feed" component={FeedContainer} />
          <AuthRoute exact path="/feed/new" component={NewFeedItemContainer} />
          <AuthRoute exact path="/feed/:postId" component={FeedItemContainer} />
          <AuthRoute exact path="/users/:userId" component={ProfileContainer} />
          <AuthRoute
            exact
            path="/feed/:postId/update"
            component={UpdatePostContainer}
          />
        </Switch>
      </div>
    </div>
    <FooterContainer />
  </div>
);

export default App;