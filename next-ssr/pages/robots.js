import Link from 'next/link';
import fetch from 'isomorphic-unfetch'


const Robots = (props) => (
    <div>
        <h1>robots</h1>
        <Link href='/'>
            <button>back yo</button>
        </Link>
        <div>
            {
                props.robots.map(robot => (
                    < li key={robot.id}>
                        <Link href={`robots/${robot.id}`}>
                            <a>{robot.name}</a>
                        </Link>
                    </li>
                ))
            }
        </div>
    </div>
);

Robots.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        robots: data
    };
}

export default Robots;