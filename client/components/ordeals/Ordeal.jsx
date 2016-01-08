Ordeal = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired
  },
  options() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      return (
        <div className="btn-group">
          <a className="btn btn-sm btn-default" href={FlowHelpers.pathFor('ordeals-edit', {'_id': this.props.ordeal._id})}>Edit</a>
          <button type="button" className="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a id="view-ordeal" href={FlowHelpers.pathFor('ordeals-view', {'_id': this.props.ordeal._id})}>View</a></li>
            <li><a href="#" className="deleteOrdealBtn">Delete</a></li>
          </ul>
        </div>
      );
    } else if (Meteor.user() && (this.createdBy === Meteor.userId())) {
      return (
        <div className="btn-group">
          <a className="btn btn-sm btn-default" href={FlowHelpers.pathFor('ordeals-edit', {'_id': this.props.ordeal._id})}>Edit</a>
          <button type="button" className="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a id="view-ordeal" href={FlowHelpers.pathFor('ordeals-view', {'_id': this.props.ordeal._id})}>View</a></li>
          </ul>
        </div>
      );
    }

    return <a className="btn btn-sm btn-default" href={FlowHelpers.pathFor('ordeals-view', {'_id': this.props.ordeal._id})}>View</a>;
  },
  render() {
    return (
      <tr>
        <td>{this.props.ordeal.name}</td>
        <td>{this.props.ordeal.location}</td>
        <td>{this.props.ordeal.date}</td>
        <td>{this.options()}</td>
      </tr>
    );
  }
});
