import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Layout(props: any) {
  // const { count, onIncrement, onDecrement } = this.props;
  return (
    <div>
      <h1>
        Counter:
        {props}
      </h1>
      <div>Layout</div>
      <div><Outlet /></div>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    count: state,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout); ;
