import PocketBase from 'pocketbase';
import UpdateData from "./UpdateData";
const pb = new PocketBase('http://127.0.0.1:8090');

const getData = async () => {
    return await pb.collection('numbers').getOne('au4s1dq2cdczppi') as any
}

const AdminPage = async () => {
    const data = await getData()

    return (
        <div>
            <h1>Admin PAge</h1>
            <UpdateData a={data?.salawatsPerDay} b={data?.groupMembers} c={data?.allSalawats}/>
        </div>
    )
}

export default AdminPage
