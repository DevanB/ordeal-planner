RecoverPassword = React.createClass({
  componentDidMount() {
    $('#application-recover-password').validate({
      rules: {
        emailAddress: {
          required: true,
          email: true
        }
      },
      messages: {
        emailAddress: {
          required: 'Please enter your email address to recover your password.',
          email: 'Please enter a valid email address.'
        }
      },
      submitHandler() {
        const email = $('[name="emailAddress"]').val();
        Accounts.forgotPassword({email: email}, function(error) {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('Check your inbox for a reset link!', 'success');
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
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h3 className="page-header">Recover Password</h3>
          <form id="application-recover-password" className="recover-password">
            <p>Enter the email address associated with your account below and click the "Recover Password" button. You will receive an email with further instructions on how to reset your password.</p>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address"/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Recover Password"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
