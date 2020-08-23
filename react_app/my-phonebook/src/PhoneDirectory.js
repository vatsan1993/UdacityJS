import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [{ id: 1, name: 'Sri', phone: '9110301748' }],
    };
  }
  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
    console.log('Phone Directory');
    console.log(this.state.subscribersList);
  };
  render() {
    // return <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />;
    return <ShowSubscribers subscribersList={this.state.subscribersList} />;
  }
}

export default PhoneDirectory;
