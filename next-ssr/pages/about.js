import Link from 'next/link';
import Image from '../components/image';
const About = () => (
    <div style={{
        fontSize: '20px',
        color: 'blue'
    }}>
        <h2>About</h2>
        <Link href='/'>
            <button>Back yo</button>
        </Link>
        <p>yooooooooo</p>
        <Image image_src={"https://ih1.redbubble.net/image.234849454.2211/flat,550x550,075,f.jpg"}></Image>
    </div>
);

export default About;