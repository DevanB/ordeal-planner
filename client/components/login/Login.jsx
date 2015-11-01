Login = React.createClass({
  componentDidMount() {
    // TODO: use modules
    $('#application-login').validate({
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        emailAddress: {
          required: 'Please enter your email address to login.',
          email: 'Please enter a valid email address.'
        },
        password: {
          required: 'Please enter your password to login.'
        }
      },
      submitHandler() {
        user = {
          email: $('[name="emailAddress"]').val(),
          password: $('[name="password"]').val()
        };
        Meteor.loginWithPassword(user.email, user.password, function(error) {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('Logged in!', 'success');
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
          <h3 className="page-header">Login</h3>
          <form id="application-login" className="login">
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address"/>
            </div>
            <div className="form-group">
              <label htmlFor="password"><span className="pull-left">Password</span> <a className="pull-right" href="/recover-password">Forgot Password?</a></label>
              <input type="password" name="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Login"/>
            </div>
          </form>
          <p>Don't have an account? <a href="/signup">Sign Up</a>.</p>
        </div>
      </div>
    );
  }
});
