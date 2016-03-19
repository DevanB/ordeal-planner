Login = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    user = {
      email: this.refs.emailAddress.value,
      password: this.refs.password.value
    };
    Meteor.loginWithPassword(user.email, user.password, (error) => {
      if (error) {
        return Bert.alert(error.reason, 'danger');
      }
      return Bert.alert('Logged in!', 'success');
    });
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h3 className="page-header">Login</h3>
          <form className="login" onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" ref="emailAddress" name="emailAddress" className="form-control" placeholder="Email Address" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <span className="pull-left">Password</span>&nbsp;<a className="pull-right" href="/recover-password">Forgot Password?</a>
              </label>
              <input type="password" ref="password" name="password" className="form-control" placeholder="Password" required/>
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
