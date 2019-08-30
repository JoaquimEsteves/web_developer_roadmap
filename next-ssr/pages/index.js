import Link from 'next/link';

const Index = () => (
    <div>
        <h1>SSR yo</h1>
        {/* <a href='./about'>About yo</a> */}
        <Link href='/about'>
            <button>about</button>
        </Link>
        <Link href='/robots'>
            <button>robots</button>
        </Link>
    </div>
);

export default Index;