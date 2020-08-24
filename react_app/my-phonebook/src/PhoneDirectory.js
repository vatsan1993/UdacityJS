import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [],
    };
  }
  deleteSubscriberHandler = (subscriberId) => {
    let subscribersList = this.state.subscribersList;
    let subscriberIndex = 0;
    subscribersList.forEach((subscriber, index) => {
      if (subscriber.id === subscriberId) {
        subscriberIndex = index;
      }
    }, this);
    let newSubscribersList = subscribersList;
    newSubscribersList = newSubscribersList.splice(subscriberIndex, 1);
    this.setState({ subscribers: newSubscribersList });
  };
  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
  };
  render() {
    // return <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />;
    // return <ShowSubscribers subscribersList={this.state.subscribersList} />;
    return (
      <Router>
        <div className='main-container'>
          <Route
            exact
            path='/'
            render={(props) => (
              <ShowSubscribers
                {...props}
                subscribersList={this.state.subscribersList}
                deleteSubscriberHandler={this.deleteSubscriberHandler}
              />
            )}
          />

          <Route
            exact
            path='/add'
            render={({ history }, props) => (
              <AddSubscriber
                history={history}
                {...props}
                addSubscriberHandler={this.addSubscriberHandler}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default PhoneDirectory;
