'use client'
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

import {useState} from "react";

const UpdateData = ({a, b, c}: {a: number, b: number, c: number}) => {
    const [salawats, setSalawats] = useState(a)
    const [allSalawats, setAllSalawats] = useState(c)
    const [members, setMembers] = useState(b)

    const update = async () => {
        const data = {
            "salawatsPerDay": salawats,
            "groupMembers": members,
            "allSalawats": allSalawats,
        };
        await pb.collection('numbers').update('au4s1dq2cdczppi', data);
    }

    return (
        <form onSubmit={update}>
            <h3>all salawats recited</h3>
            <input
                type={'number'}
                placeholder={c.toString()}
                value={allSalawats}
                onChange={e => setAllSalawats(parseInt(e.target.value))}
            />
            <h3>salawats per day</h3>
            <input
                type={'number'}
                placeholder={a.toString()}
                value={salawats}
                onChange={e => setSalawats(parseInt(e.target.value))}
            />
            <h3>group members</h3>
            <input
                type={'number'}
                placeholder={b.toString()}
                value={members}
                onChange={e => setMembers(parseInt(e.target.value))}
            />
            <button type={'submit'}>
                UPDATE
            </button>
        </form>
    )
}
export default UpdateData
