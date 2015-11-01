Signup = React.createClass({
  componentDidMount() {
    $('#application-signup').validate({
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        emailAddress: {
          required: 'Please enter your email address to sign up.',
          email: 'Please enter a valid email address.'
        },
        password: {
          required: 'Please enter a password to sign up.',
          minlength: 'Please use at least six characters.'
        }
      },
      submitHandler() {
        user = {
          email: $('[name="emailAddress"]').val(),
          password: $('[name="password"]').val()
        };
        Accounts.createUser({email: user.email, password: user.password}, function(error) {
          if (error) {
            Bert.alert(error.reason, 'danger');
          } else {
            Bert.alert('Welcome!', 'success');
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
          <h3 className="page-header">Sign Up</h3>
          <form id="application-signup" className="signup">
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Sign Up"/>
            </div>
          </form>
          <p>Already have an account? <a href="/login">Log In</a>.</p>
        </div>
      </div>
    );
  }
});
