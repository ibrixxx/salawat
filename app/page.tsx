import PocketBase from 'pocketbase';
import GroupData from "./GroupData";
const pb = new PocketBase('http://127.0.0.1:8090');
import './global.css'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const getData = async () => {
    return await pb.collection('numbers').getOne('au4s1dq2cdczppi') as any
}

const HomePage = async () => {
    const data = await getData()
    const imageUrl = '../public/saBack.jpg'

    return (
        <div className={'boxing'}>
            <GroupData data={data} />
        </div>
    )
}

export default HomePage
