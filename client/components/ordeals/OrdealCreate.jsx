OrdealCreate = React.createClass({
  componentDidMount() {
    $('.datetimepicker').datetimepicker();
    $('#createOrdealForm').validate({
      rules: {
        vcInductions: {
          required: true
        },
        vcInductionsAdviser: {
          required: true
        },
        name: {
          required: true
        },
        location: {
          required: true
        },
        date: {
          required: true
        }
      },
      messages: {
        vcInductions: {
          required: 'Who is the current VC Inductions?',
        },
        vcInductionsAdviser: {
          required: 'Who is the current VC Inductions Adviser?',
        },
        name: {
          required: 'Please enter a name. Example: May Ordeal 2016',
        },
        location: {
          required: 'Where is this Ordeal happening?',
        },
        date: {
          required: 'When is this Ordeal beginning?',
        }
      },
      submitHandler() {
        const ordeal = {
          name: $('[name="name"]').val(),
          location: $('[name="location"]').val(),
          date: $('[name="date"]').val(),
          vcInductions: $('[name="vcInductions"]').val(),
          vcInductionsAdviser: $('[name="vcInductionsAdviser"]').val(),
        };

        Meteor.call('createOrdeal', ordeal, function(error, response) {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            FlowRouter.go('/ordeals/edit/' + response);
          }
        });
      }
    });
  },
  handleSubmit(event) {
    event.preventDefault();
  },
  render() {
    return (
      <div>
        <h2>Create Ordeal</h2>
        <form id="createOrdealForm">
          <div className="row">
            <div className="col-xs-6">
              <label htmlFor="vcInductions">Vice-Chief of Inductions</label>
              <input type="text" className="form-control" name="vcInductions" id="vcInductions" placeholder="Vice-Chief of Inductions"/>
            </div>
            <div className="col-xs-6">
              <label htmlFor="vcInductionsAdviser">Vice-Chief of Inductions Adviser</label>
              <input type="text" className="form-control" name="vcInductionsAdviser" id="vcInductionsAdviser" placeholder="Vice-Chief of Inductions Adviser"/>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-xs-4">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" id="name" placeholder="ex: Spring Ordeal 2015"/>
            </div>
            <div className="col-xs-4">
              <label htmlFor="location">Location</label>
              <input type="text" className="form-control" name="location" id="location" placeholder="ex: Camp Sequoyah"/>
            </div>
            <div className="col-xs-4">
              <label htmlFor="date">Ordeal Begins</label>
              <div className="input-group datetimepicker">
                <input className="set-due-date form-control" type="text" name="date" id="date" placeholder="ex: 10/03/2015 06:00 PM"/>
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
