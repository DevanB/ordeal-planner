Layout = React.createClass({
  propTypes: {
    yield: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div className="appRoot">
      	<Header />
      	<div className="container">
      		{this.props.yield}
      	</div>
      </div>
    );
  }
});

// TODO: bertAlert?
