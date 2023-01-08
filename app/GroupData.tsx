"use client"
import './global.css'
import CountUp from "react-countup";
import Stack from '@mui/material/Stack';


const GroupData = ({data} : {data: any}) => {

    return (
        <div id={'numbersDiv'}>
            <div id={'data'}>
                <Stack style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <h3 id={'text'}>Broj proučenih salavata do danas.</h3>
                    <div id={'bigNumber'}>
                        <CountUp end={data?.allSalawats} duration={2} />
                    </div>
                </Stack>
                <Stack style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <h3 id={'text'}>Broj članova.</h3>
                    <div id={'mediumNumber'}>
                        <CountUp end={data?.groupMembers} duration={2} />
                    </div>
                </Stack>
                <Stack style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <h3 id={'text'}>Broj proučenih salavata na danas.</h3>
                    <div id={'mediumNumber'}>
                        <CountUp end={data?.salawatsPerDay} duration={2} />
                    </div>
                </Stack>
            </div>
            <div></div>
        </div>
    )
}

export default GroupData
