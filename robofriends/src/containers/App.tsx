import React, { Dispatch } from 'react';
import CardList from '../components/cardList/cardList';
import Header from '../components/Header/header';
import Scroll from '../components/scroll/scroll';
import { robotProps } from '../components/cardList/robots';
import ErrorBoundary from '../components/error_boundaries/error_boundary';
import { setSearchField, setRequestRobots } from '../state_management/actions';
import { AppState, AppProps } from '../state_management/types';
import { connect } from 'react-redux';
import './App.scss';

const mapStateToProps = (state: AppState) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onSearchChange: (event: { target: { value: string; }; }) => {
            return dispatch(setSearchField(event.target.value))
        },
        onRequestRobots: () => dispatch(setRequestRobots())
    }
}



class App extends React.Component<AppProps> {

    async componentDidMount() {

        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter((robot: robotProps) => {
            let robot_name = robot.name.toLowerCase();
            let search_field = searchField.toLowerCase();
            return robot_name.includes(search_field);
        });
        if (isPending) {
            return (
                <div className="tc">
                    <ErrorBoundary>
                        <h1>Yo, loading</h1>
                    </ErrorBoundary>
                </div>
            );
        }



        return (
            <div className="tc">
                <Header />
                <div>
                    <input
                        aria-label='Search the robots yo'
                        className="searchBox"
                        type='search' placeholder='yo'
                        onChange={onSearchChange}
                    />
                </div>
                <Scroll>
                    <ErrorBoundary>
                        {/* <CardList IntrinsicAttributes={filteredRobots}/> */}
                        {CardList(filteredRobots)}
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);