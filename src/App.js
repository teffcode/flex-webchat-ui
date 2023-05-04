import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import PropTypes from 'prop-types'

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);

    //const { configuration } = props;
    const configuration = {
      //  change the your AccountSid
      accountSid: "AC8a012b4f366bb61a42cb3303e316b652",
      // change to your Flex Flow SID
      flexFlowSid: "FO7534e9744594fd1654574a2e39a206dc",
    }
    FlexWebChat.Manager.create(configuration)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

App.propTypes = {
  configuration: PropTypes.string
}

export default App;
