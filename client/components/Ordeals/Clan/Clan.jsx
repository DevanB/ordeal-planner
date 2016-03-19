Clan = React.createClass({
  propTypes: {
    clan: React.PropTypes.object,
    readOnly: React.PropTypes.bool
  },
  render() {
    const { readOnly, clan } = this.props;
    if (readOnly) {
      return (
        <p>
          <strong>Name</strong>: { clan.name }<br/>
          <strong>Elangomat</strong>: { clan.elangomat }<br/>
          <strong>Candidates</strong>: { clan.numberOfCandidates }<br/>
          <strong>Poor Elangomat</strong>: { clan.poorElangomat }
        </p>
      );
    }
  }
});
