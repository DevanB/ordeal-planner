Ordeal = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired
  },
  deleteOrdeal(event) {
    event.preventDefault();
    Meteor.callPromise('deleteOrdeal', this.props.ordeal._id)
      .then(() => {
        Bert.alert('Successfully deleted ordeal.', 'success');
      })
      .catch((error) => {
        Bert.alert(error.reason, 'danger');
      });
  },
  editOrdeal() {
    FlowRouter.go('ordeals-edit', { _id: this.props.ordeal._id });
  },
  options() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
      return (
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-default" onClick={ this.editOrdeal }>Edit</button>
          <button type="button" className="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href={ FlowRouter.path('ordeals-view', { _id: this.props.ordeal._id }) }>View</a></li>
            <li><a href={ FlowRouter.path('ordeals-schedule', { _id: this.props.ordeal._id }) }>Schedule</a></li>
            <li><a onClick={ this.deleteOrdeal }>Delete</a></li>
          </ul>
        </div>
      );
    } else if (Meteor.user() && (this.createdBy === Meteor.userId())) {
      return (
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-default" onClick={ this.editOrdeal }>Edit</button>
          <button type="button" className="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href={ FlowRouter.path('ordeals-view', { _id: this.props.ordeal._id }) }>View</a></li>
            <li><a href={ FlowRouter.path('ordeals-schedule', { _id: this.props.ordeal._id }) }>Schedule</a></li>
          </ul>
        </div>
      );
    }
    return (<a className="btn btn-default" href={ FlowRouter.path('ordeals-view', { _id: this.props.ordeal._id }) }>View</a>);
  },
  render() {
    return (
      <div>
        <div className="col-xs-3">{ this.props.ordeal.name }</div>
        <div className="col-xs-3">{ this.props.ordeal.location }</div>
        <div className="col-xs-3">{ this.props.ordeal.date }</div>
        <div className="col-xs-3">{ this.options() }</div>
      </div>
    );
  }
});
