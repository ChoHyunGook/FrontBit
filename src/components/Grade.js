import React,{useState} from "react";
import Layout from "../containers/Layout";

export default function Grade(){
    const[name,setName]=useState();
    const[kor,setKor]=useState(0);
    const[eng,setEng]=useState(0);
    const[math,setMath]=useState(0);
    const[so,setSo]=useState(0);
    const[si,setSi]=useState(0);
    const[res,setRes]=useState(0);
    const sum=()=>{
        let name=document.getElementById('name').value
        let kor=document.getElementById('kor').value
        let eng=document.getElementById('eng').value
        let math=document.getElementById('math').value
        let so=document.getElementById('so').value
        let si=document.getElementById('si').value
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setSo(so)
        setSi(si)
        setRes(5/(Number(kor)+Number(eng)+Number(math)
        +Number(so)+Number(si)))
    }
    return <Layout><h1>성적표</h1>
    <label htmlFor="">이름</label><br/>
    <input id="name" type=""></input><br/>
    <label htmlFor="">국어점수</label><br/>
    <input id="kor" type=""></input><br/>
    <label htmlFor="">영어점수</label><br/>
    <input id="eng" type=""></input><br/>
    <label htmlFor="">수학점수</label><br/>
    <input id="math" type=""></input><br/>
    <label htmlFor="">사회점수</label><br/>
    <input id="so" type=""></input><br/>
    <label htmlFor="">과학점수</label><br/>
    <input id="si" type=""></input><br/>
    <button onClick={()=>{sum()}}>입력</button>
    <>이름:{name}<br/>국어점수:{kor}<br/>영어점수:{eng}<br/>수학점수:{math}<br/>
    사회점수:{so}<br/>과학점수:{si}<br/>평균:{res}<br/>
    </>
    </Layout>
}