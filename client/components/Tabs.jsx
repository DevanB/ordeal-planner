Tabs = React.createClass({
  mixins : [React.addons.PureRenderMixin],
  /**
   * Call back on mount.
   * Create a tracker to check for a change in the query params
   */
  componentDidMount () {
    // if(!this.props.noTrack) {
    //   this._tracker = Tracker.autorun(function () {
    //     FlowRouter.watchPathChange();
    //     let tab = FlowRouter.getQueryParam('tab');
    //     instance.setActiveTab(parseInt(tab || 0));
    //   });
    // }
  },
  componendWillUnmount () {
    // if(!this.props.noTrack) {
    //   this._tracker.stop();
    // }
  },
  /**
  * Sets the activeTabIndex state
  * @index the index you would like to set to active
  */
  setActiveTab (index) {
    if(this.isMounted() && (index || index === 0)) {
      this.setState({
        activeTabIndex : index
      });
    }
  },
  getInitialState () {
    return {
      activeTabIndex : this.props.activeTabIndex || 0
    };
  },
  render () {
    let instance = this;
    return (
      <div className="tabs">
        {
          React.Children.map(instance.props.children, function (child, index) {
            if(child)
              return React.cloneElement(child, {
                setActiveTab: instance.setActiveTab,
                activeTabIndex : instance.state.activeTabIndex
              });
          })
        }
      </div>
    );
  }
});

//The List of tabs on for `tabs`
TabList = (props) => {
  return (
    <ul className="tab-list">
      {
        React.Children.map(props.children, function (child, index) {
          if(child) {
            return React.cloneElement(child, {
              setActiveTab: props.setActiveTab,
              activeTabIndex : props.activeTabIndex,
              tabIndex : index
            });
          }
        })
      }
    </ul>
  );
};

//Tab where we display the title
Tab = React.createClass({
  /**
  * Handle the click event
  * @event the synthetic click event
  */
  handleClick (event) {
    this.props.setActiveTab(this.props.tabIndex);
  },

  /**
  * On mount if the tab is named check for a query param
  */
  componentDidMount () {
    if(this.props.name && this.props.name === FlowRouter.getQueryParam('tab')) {
      this.props.setActiveTab(this.props.tabIndex);
    }
  },

  render () {
    return (
      <li
        className={ `tab ${ this.props.activeTabIndex === this.props.tabIndex && "active" || ""}` }
        onClick={ this.handleClick }>
        <span>
          { this.props.children }
        </span>
      </li>
    );
  }
});

//Group of tab panels
TabBody = (props) => {
  return (
    <div className="tab-body">
      {
        React.Children.map(props.children, (child, index) => {
          if(child && index === props.activeTabIndex) {
            return React.cloneElement(child, {
              tabClick: props.tabClick,
              activeTabIndex : props.activeTabIndex,
              tabIndex : index
            });
          }
        })
      }
    </div>
  );
};

//Panel to render a tabs content
TabPanel = (props) => {
  return (
    <div className="tab-panel">
      { props.children }
    </div>
  );
};

//Tools for a tab
TabTools = (props) => {
  return (
    <ul className="tab-tools">
      { props.children }
    </ul>
  );
};