InputGroup = React.createClass({
  propTypes: {
    inputName: React.PropTypes.string,
    label: React.PropTypes.string,
    inputType: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    isRequired: React.PropTypes.bool,
    isReadOnly: React.PropTypes.bool
  },
  render() {
    if (this.props.inputType === 'text' || this.props.inputType === 'number') {
      return (
        <div>
          <label htmlFor={ this.props.inputName }>{ this.props.label }</label>
          <input
            type={ this.props.inputType }
            ref="input"
            defaultValue={ this.props.defaultValue }
            className={ this.props.className }
            id={ this.props.inputName }
            placeholder={ this.props.placeholder || this.props.label }
            required={ (this.props.isRequired) ? 'required' : '' }
            readOnly={ (this.props.isReadOnly) ? 'readOnly' : '' }
          />
        </div>
      );
    } else if (this.props.inputType === 'textarea') {
      return (
        <div>
          <label htmlFor={ this.props.inputName }>{ this.props.label }</label>
          <textarea
            ref="input"
            defaultValue={ this.props.defaultValue }
            className={ this.props.className }
            id={ this.props.inputName }
            placeholder={ this.props.placeholder || this.props.label }
            required={ (this.props.isRequired) ? 'required' : '' }
            readOnly={ (this.props.isReadOnly) ? 'readOnly' : '' }
          />
        </div>
      );
    }
  }
});
