OrdealMaster = React.createClass({
  propTypes: {
    readOnly: React.PropTypes.string,
    ordealMaster: React.PropTypes.object
  },
  mixins: [ReactMeteorData],
  render() {
    return (
      <p>
        <strong>Name</strong>: {this.props.ordealMaster.name}<br/>
        <strong>Rating</strong>: {this.props.ordealMaster.rating}
      </p>
    );
  }
});
