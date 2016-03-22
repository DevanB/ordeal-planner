RecoverPassword = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    const email = this.refs.emailAddress.value;
    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        return Bert.alert(error.reason, 'danger');
      }
      return Bert.alert('Check your inbox for a reset link!', 'success');
    });
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h3 className="page-header">Recover Password</h3>
          <form className="recover-password" onSubmit={ this.handleSubmit }>
            <p>Enter the email address associated with your account below and click the "Recover Password" button. You will receive an email with further instructions on how to reset your password.</p>
            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" ref="emailAddress" name="emailAddress" className="form-control" placeholder="Email Address" required/>
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
