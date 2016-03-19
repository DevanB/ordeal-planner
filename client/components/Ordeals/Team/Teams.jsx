Teams = ({ teams, type }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h4 className="pull-left">{ type } Teams</h4>
          <a className="btn btn-sm btn-default pull-right"><i className="fa fa-plus"></i>&nbsp; Add { type } Team</a>
        </div>
      </div>
      <div id={ `${type}Teams` }>
        {
          teams && teams.map((team, index) => {
            return (
              <Team key={ index } team={ team } teamType={ type }/>
            );
          })
        }
      </div>
    </div>
  );
};
