'use client'
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://joja.fly.dev');

import {useState} from "react";
import {Button, TextField} from "@mui/material";

const UpdateData = ({a, b, c}: {a: number, b: number, c: number}) => {
    const [visible, setVisible] = useState(false)
    const [salawats, setSalawats] = useState(a)
    const [allSalawats, setAllSalawats] = useState(c)
    const [members, setMembers] = useState(b)

    const update = async () => {
        const data = {
            "salawatsPerDay": salawats,
            "groupMembers": members,
            "allSalawats": allSalawats,
        };
        const res = await pb.collection('numbers').update('36e28qg9qkda4ws', data);
        if(res.allSalawats){
            setVisible(true)
            setTimeout(() => setVisible(false), 3000)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '50%'}}>
            <TextField
                id="standard-basic"
                label="Ukupan broj salavata"
                variant="filled"
                type={'number'}
                placeholder={c.toString()}
                value={allSalawats}
                onChange={e => setAllSalawats(parseInt(e.target.value))}
            />
            <TextField
                id="standard-basic"
                label="Broj salavata na dan"
                variant="outlined"
                type={'number'}
                placeholder={a.toString()}
                value={salawats}
                onChange={e => setSalawats(parseInt(e.target.value))}
            />
            <TextField
                id="standard-basic"
                label="Broj članova"
                variant="standard"
                type={'number'}
                placeholder={b.toString()}
                value={members}
                onChange={e => setMembers(parseInt(e.target.value))}
            />
            <Button onClick={update} variant="contained">UPDATE</Button>
            {visible ? <p style={{color: 'lightgreen', textAlign: 'center'}}>Podaci uspješno promijenjeni!</p> : null}
        </div>
    )
}
export default UpdateData
