import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

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

    return (
        <div>
            <h1>HOme page</h1>
            <h3>{data?.allSalawats}</h3>
            <h3>{data?.salawatsPerDay}</h3>
            <h3>{data?.groupMembers}</h3>
        </div>
    )
}

export default HomePage
