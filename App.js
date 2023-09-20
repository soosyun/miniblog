import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '동숲좋아해?';
  let [글제목, 글제목변경] = useState(['동숲 주민작', '너굴씨한테 빚갚기', '부엉과 박물관탐방']);
  let [복숭아, 복숭아추가] = useState(0);
  // let [modal, setModal] = useState(true); 이거내가 처음에 짠 코드, 이게 이상해서 지금까지 작동안됨
  let [modal, setModal] = useState(false); // 초기 상태는 false


  return (
    <div className="App">
      <div className='yuntittle'>
        <h4>놀러와요 동물의 숲</h4>
      </div>

      {/* 버튼생성하고 온클릭 연결, 버튼누르면 가나다순으로 정렬 */}
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 복숭아추가(복숭아+1) }}>🍑</span> {복숭아} </h4>
        <p>2023.09.13 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2023.09.13 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=> { setModal(true) }}>{ 글제목[2] }</h4>
        <p>2023.09.13 발행</p>
      </div>

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}


function Modal(){
  return(
    <div className='modal'>
    <h4>사진</h4>
    <p>안녕 나는 누구다! 만나서 반갑다!</p>
    <p>블로그가기</p>
  </div>
  )
}


export default App;