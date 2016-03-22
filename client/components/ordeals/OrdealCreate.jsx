OrdealCreate = React.createClass({
  componentDidMount() {
    $('.datetimepicker').datetimepicker();
  },
  handleSubmit(event) {
    event.preventDefault();
    const ordeal = {
      name: this.refs.name.value,
      location: this.refs.location.value,
      date: this.refs.date.value,
      vcInductions: this.refs.vcInductions.value,
      vcInductionsAdviser: this.refs.vcInductionsAdviser.value
    };
    Meteor.callPromise('createOrdeal', ordeal)
      .then((response) => {
        FlowRouter.go('/ordeals/edit/' + response);
      })
      .catch((error) => {
        Bert.alert(error.reason, 'danger');
      });
  },
  render() {
    return (
      <div>
        <h2>Create Ordeal</h2>
        <form id="createOrdealForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="vcInductions">Vice-Chief of Inductions</label>
            <input type="text" className="form-control" ref="vcInductions" name="vcInductions" id="vcInductions" required placeholder="Vice-Chief of Inductions"/>
            </div>
            <div className="col-xs-6">
              <label htmlFor="vcInductionsAdviser">Vice-Chief of Inductions Adviser</label>
              <input type="text" className="form-control" ref="vcInductionsAdviser" name="vcInductionsAdviser" id="vcInductionsAdviser" required placeholder="Vice-Chief of Inductions Adviser"/>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-xs-4">
              <label htmlFor="name">Name</label>
            <input type="text" className="form-control" ref="name" name="name" id="name" required placeholder="ex: Spring Ordeal 2015"/>
            </div>
            <div className="col-xs-4">
              <label htmlFor="location">Location</label>
            <input type="text" className="form-control" ref="location" name="location" id="location" required placeholder="ex: Camp Sequoyah"/>
            </div>
            <div className="col-xs-4">
              <label htmlFor="date">Ordeal Begins</label>
              <div className="input-group datetimepicker">
                <input className="set-due-date form-control" ref="date" type="text" name="date" id="date" required placeholder="ex: 10/03/2015 06:00 PM"/>
                <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-xs-12">
              <input type="submit" className="btn btn-success" value="Submit"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
