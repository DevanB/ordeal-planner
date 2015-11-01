ResetPassword = React.createClass({
  componentDidMount() {
    $('#application-reset-password').validate({
      rules: {
        newPassword: {
          required: true,
          minlength: 6
        },
        repeatNewPassword: {
          required: true,
          minlength: 6,
          equalTo: "[name='newPassword']"
        }
      },
      messages: {
        newPassword: {
          required: 'Please enter a new password.',
          minlength: 'Please use at least six characters.'
        },
        repeatNewPassword: {
          required: 'Please repeat your new password.',
          equalTo: 'Your password do not match. Please try again.'
        }
      },
      submitHandler() {
        const token = FlowRouter.current().params.token;
        const password = $('[name="newPassword"]').val();

        Accounts.resetPassword(token, password, function(error) {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('Password successfully reset!', 'success');
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
          <h3 className="page-header">Reset Password</h3>
          <form id="application-reset-password" className="reset-password">
            <p>Enter your new password below and repeat it to confirm. This will reset your password and log you into the application.</p>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input type="password" name="newPassword" className="form-control" placeholder="New Password"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Repeat New Password</label>
              <input type="password" name="repeatNewPassword" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Reset Password &amp; Login"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
});
