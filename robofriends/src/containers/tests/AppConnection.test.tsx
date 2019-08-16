import { mapDispatchToProps, mapStateToProps } from '../App';
import '../../setupTests';



it('test App MapStateToProps', () => {
    const stateToProps = mapStateToProps(
        {
            requestRobots: { error: '', isPending: false, robots: [] },
            searchRobots: { searchField: 'yo' }
        }
    );
    expect(stateToProps).toEqual({ searchField: 'yo', robots: [], isPending: false, error: '' })
})

it('test App MapDispatchToProps', () => {
    throw Error('Not Implemented lmao');
})