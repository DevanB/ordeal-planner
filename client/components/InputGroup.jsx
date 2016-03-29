InputGroup = React.createClass({
  propTypes: {
    inputName: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    inputType: React.PropTypes.string.isRequired,
    ref: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    isRequired: React.PropTypes.bool
  },
  render() {
    return (
      <div>
        <label htmlFor={ this.props.inputName }>{ this.props.label }</label>
        <input
          type={ this.props.inputType }
          ref={ () => this.props.ref || this.props.inputName }
          defaultValue={ this.props.defaultValue }
          className={ this.props.className }
          id={ this.props.inputName }
          placeholder={ this.props.placeholder || this.props.label }
          required={ (this.props.isRequired) ? 'required' : '' }
        />
      </div>
    );
  }
});
