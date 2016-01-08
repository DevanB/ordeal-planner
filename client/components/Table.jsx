Table = React.createClass({
  propTypes: {
    noDataString: React.PropTypes.string.isRequired,
    keys: React.PropTypes.array.isRequired,
    transforms: React.PropTypes.array.isRequired,
    inlineCallback: React.PropTypes.object
  },
  mixins: [React.addons.PureRenderMixin],
  /**
   * Sets the components key and dir state
   * @event the synthetic event from ReactJS
   */
  setSortKey(event) {
    // Get the key from the target element
    const key = event.target.getAttribute('data-sortkey');
    // Set the state
    this.setState({
      key: key, // Use the key from the element
      dir: this.state.key === key ? -this.state.dir : 1 // check if we need to reverse sort
    });
  },
  /**
   * Compare to elements to check for sort order
   * @a object 1 to be compared
   * @b object 2 to be compared
   */
  sortOrder(a, b) {
    // Find the values using the current sort key
    let aa = _.get(a, this.state.key);
    let bb = _.get(b, this.state.key);

    // Check if we are compairing Strings
    if (typeof aa === 'string' && typeof bb === 'string') {
      aa = aa.toLowerCase();
      bb = bb.toLowerCase();
    }
      // return aa.toLowerCase().localeCompare(bb.toLowerCase()) * this.state.dir;

    // Compair numerical
    if (aa < bb) return -1 * this.state.dir;
    if (aa > bb) return 1 * this.state.dir;

    return 0;
  },
  applyTransform(value, key, object) {
    const transform = _.findWhere(this.props.transforms, {key: key});
    return transform && transform.transform(value, object, this.props) || value;
  },
  /**
   * @value The value of the cell
   * @index the index used for Reacts Mapping
   * @click the function that should be called on click
   * @sortKey the key to sort by if clicked
   * @className the classes that should be added
   */
  renderCell(value, index, object, click, sortKey, className) {
    return (
      <td
        key={index}
        onClick={click}
        data-sortkey={sortKey}
        className={className}>
        {!sortKey && this.applyTransform(value, this.props.keys[index], object) || value}
      </td>
    );
  },
  /**
   * Set the initial state of the component
   */
  getInitialState() {
    return {
      key: this.props.keys[0],
      dir: 1
    };
  },
  /**
   * Render a single table renderRow
   * @row the json object to map
   * @index the React Index
   */
  renderRow(row, index) {
    const instance = this;
    return (
      <tr key={ index }>
        {
          instance.props.keys.map(function(property, key) {
            return instance.renderCell(_.get(row, property), key, row);
          })
        }
      </tr>
    );
  },
  /**
   * Generates a css class for a header element base on sort
   * @key checks the key of the element
   */
  getSortClass(key) {
    if (key === this.state.key) {
      return ['sorted', this.state.dir === 1 ? 'asc' : 'desc'].join(' ');
    }
  },
  /**
   * Renders a table header
   */
  renderHeader() {
    const instance = this;
    return (
      <thead>
        <tr>
          {
            instance.props.header.map(function(value, key) {
              return instance.renderCell(value, key, null, instance.setSortKey, instance.props.keys[key], instance.getSortClass(instance.props.keys[key]) );
            })
          }
        </tr>
      </thead>
    );
  },
  /**
   * Renders a html footer
   */
  renderFooter() {
    const instance = this;
    return (
      <tfoot>
        <tr>
          {
            instance.props.footer.map(function(value, key) {
              return instance.renderCell(value, key);
            })
          }
        </tr>
      </tfoot>
    );
  },
  addCustomRow() {
    const data = {};
    _.each(this.refs, function(obj, key) {
      const node = ReactDOM.findDOMNode(obj);
      const raw = node.getAttribute('data-raw');
      data[key] = raw && JSON.parse(raw) || node.value;
      node.value = '';
      node.removeAttribute('data-raw');
    });
    this.props.inlineCallback(data);
  },
  /**
   * Adds the ability to add data inline with a table
   */
  addInlineRow() {
    const instance = this;
    return (
      <tr>
        {
          instance.props.keys.map(function(key, index) {
            const comp = _.findWhere(instance.props.inlineComponents, {key: key});

            if (index === instance.props.keys.length - 1) {
              return <td key={ index }> <button className="button" onClick={ instance.addCustomRow }>Add</button> </td>;
            }

            return (
              <td key={index}> {React.cloneElement(comp && comp.component || <input type="text" />, {ref: comp && comp.saveKey || key }) }</td>
            );
          })
        }
      </tr>
    );
  },
  /**
   * React render
   */
  render() {
    const instance = this;
    if (instance.props.data && instance.props.data.length > 0 || instance.props.inlineComponents) {
      return (
        <table className="table">
          { instance.props.header && instance.renderHeader() }
          <tbody>
            {
              instance.props.inlineComponents && instance.addInlineRow()
            }
            {
              instance.props.data && instance.props.data.sort(instance.sortOrder).map(function(object, index) {
                return object && instance.renderRow(object, index);
              })
            }
          </tbody>
          { instance.props.footer && instance.renderFooter() }
        </table>
      );
    }
    return (
      <div className="no-data">
        <p>{ this.props.noDataString || 'No Data' }</p>
      </div>
    );
  }
});
