import React, { Component } from 'react';

class ChatBar extends Component {
  handleEnter(event) {
    if (event.target.className === 'chatbar-message') {
      this.props.add(event, this.props.user);
    } else if (event.target.className === 'chatbar-username') {
      this.props.add(event, this.props.user);
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', () => {
      if (event.keyCode === 13) {
        this.handleEnter(event)
      }
    });
  }
  render() {

    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onChange={this.props.onChange} value={this.props.user} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={this.props.onChange} value={this.props.chatInput} />
      </footer>
    );
  }
}
export default ChatBar;