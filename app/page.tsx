import PocketBase from 'pocketbase';
import GroupData from "./GroupData";
const pb = new PocketBase('https://joja.fly.dev');
import './global.css'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const getData = async () => {
    return await pb.collection('numbers').getOne('36e28qg9qkda4ws') as any
}

const HomePage = async () => {
    const data = await getData()

    return (
        <div className={'boxing'}>
            <GroupData data={data} />
        </div>
    )
}

export default HomePage
