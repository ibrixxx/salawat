import PocketBase from 'pocketbase';
import UpdateData from "./UpdateData";
const pb = new PocketBase('https://joja.fly.dev');
import '../global.css'

const getData = async () => {
    return await pb.collection('numbers').getOne('36e28qg9qkda4ws') as any
}

const AdminPage = async () => {
    const data = await getData()

    return (
        <div id={'cmsDiv'}>
            <h1 style={{color: 'white'}}>Administrator</h1>
            <UpdateData a={data?.salawatsPerDay} b={data?.groupMembers} c={data?.allSalawats}/>
        </div>
    )
}

export default AdminPage
