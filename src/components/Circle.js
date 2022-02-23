import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Circle(){
    const [pi,setPi]=useState(0.0);
    const[half,setHalf]=useState(0.0);
    const[res,setRes]=useState(0.0);
    const sum=()=>{
        let pi=document.getElementById('pi').value
        let half=document.getElementById('half').value
        setPi(pi)
        setHalf(half)
        setRes(Number(pi)*Number(half)*Number(half))
    }

    return <Layout><h1>원넓이 계산기</h1>
    <label htmlFor="">원주율</label><br/>
    <input id="pi" type=""></input><br/>
    <label htmlFor="">반지름</label><br/>
    <input id="half" type=""></input><br/>
    <button onClick={()=>{sum()}}></button><br/>
    <>반지름{half}와 원주율{pi}의<br/>원넓이는 {res}입니다. </>
    </Layout>
}