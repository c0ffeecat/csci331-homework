import Counter from '../components/counter';
import Table from '../components/table';
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Tommy's NextJS</h1>
            <Counter num={1}/>
            <Counter num={2}/>
            <p style={{ textAlign: 'center' }}>My group is creating a project using HTMX within a docker container which is cool.
            <Link href="https://github.com/c0ffeecat/csci331-homework">My Github</Link>
            </p>
            <Table/>
        </div>
    );
}
