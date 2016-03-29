OrdealScheduler = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object
  },
  componentDidMount() {
    const events = [
      {
        title: 'Check In',
        allDay: false,
        start: '2015-05-15T18:00:00',
        end: '2015-05-15T23:30:00',
        editable: true,
        startEditable: true,
        durationEditable: true,
      }
    ];
    $(this.refs.calendar).fullCalendar({
      events,
      defaultView: 'agendaThreeDay',
      aspectRatio: 1.75,
      allDaySlot: false,
      header: {
        right: ''
      },
      views: {
        agendaThreeDay: {
          type: 'agenda',
          duration: { days: 3 },
          buttonText: '3 day'
        }
      },
      eventDrop(event, delta, revert) {
        const date = event.start.format();
        const isPast = (date) => {
          const today = moment().format();
          return moment(today).isAfter(date);
        };
        if (!isPast(date)) {
          console.log(date);
        } else {
          revert();
          Bert.alert('Sorry, you can\'t move items to the past!', 'danger');
        }
      }
    });
    $(this.refs.calendar).fullCalendar('gotoDate', moment(this.props.ordeal.date));
  },
  componentWillUnmount() {
    $(this.refs.calendar).fullCalendar('destroy');
  },
  render() {
    return (
      <div ref="calendar"/>
    );
  }
});
