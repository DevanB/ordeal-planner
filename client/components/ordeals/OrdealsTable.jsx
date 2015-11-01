OrdealsTable = React.createClass({
  propTypes: {
    ordeals: React.PropTypes.array.isRequired
  },
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Begins</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {this.props.ordeals.map((ordeal, index) => {
            return <Ordeal key={index} ordeal={ordeal} />;
          })}
        </tbody>
      </table>
    );
  }
});
