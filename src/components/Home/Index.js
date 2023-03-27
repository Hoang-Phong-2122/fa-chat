import React, {useEffect, useState} from 'react';
import {Typography} from "antd";
import {get} from "../../services/firebaseServices";
import {onValue} from "firebase/database";

function Index() {
    const [data, setData] = useState(null);

    function getData(snapshot){
        setData(snapshot.val());
    }
    const loadData = async () => {
        await get('models', getData);
    }
    //useEffect
    useEffect(async () => {
        await loadData();
    }, []);

    return (
        <div>
            <Typography>Home</Typography>
            <Typography>{data}</Typography>
        </div>
    )
}

export default Index;
