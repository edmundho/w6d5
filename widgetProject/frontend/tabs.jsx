import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectTab: 0};
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(num) {
    const selectTab = num;
    return () => this.setState({selectTab});
  }

  // componentDidMount() {
  //   this.changeTab();
  // }

  render() {
    return (
    <div className='tabsContainer'>
      <ul className = 'tabList'>
        <li className='tab' onClick={this.changeTab(0)}>
            <h1>{this.props.panes[0].title}</h1>
        </li>
        <li className='tab' onClick={this.changeTab(1)}>
            <h1>{this.props.panes[1].title}</h1>
        </li>
        <li className='tab' onClick={this.changeTab(2)}>
            <h1>{this.props.panes[2].title}</h1>
        </li>
      </ul>
      <article>{this.props.panes[this.state.selectTab].content}</article>
      </div>
    );
  }

}
export default Tabs;
