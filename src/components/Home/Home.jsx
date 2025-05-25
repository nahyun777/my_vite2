import { useStat } from 'react'
import './Home.css';
import TabButton from './TabButton';

export default function Home() {

  //state를 만들어 변수와 화면을 연동(데이터바인딩)
  const [count, setCount] = useState(0);
  //대문자 쓰는이유 띄어쓰기 표시
  const [selectedIndex, setSelectedIndex] = useState(0);
  let arrButtonName = ['탭버튼1', '탭버튼2', '탭버튼3', '탭버튼4']
  const [isSelected, setSelected] = useStat([true, false, false, false])


  const tabContents = {
    0: (
      <p style={{ color: 'yellow', backgroundColor: 'red' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    1: (
      <p style={{ color: 'white', backgroundColor: 'black' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    2: (
      <p style={{ color: 'black', backgroundColor: 'white' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    ),
    3: (
      <p style={{ color: 'violet', backgroundColor: 'blueviolet' }}>
        Edit <code>src/App.jsx</code> and save {selectedIndex}
      </p>
    )
  }


  function handleClick() {
    setCount(count + 1) //사용은 첫번째, 변경은 두번째
  }

  function hTabClick(tabIndex) {
    alert(tabIndex + '탭 눌림')
    //변수에 넣어줌 (state변수)
    setSelectedIndex(tabIndex)
  }

  //ex.Home({count, setCount}){}
  // const [count, setCount] = useState(0)
  //function App(const [count, setCount] = useState(0)){}의 가져온다


  return (
    <div>
      <div className="home_card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <div>
          {
            //{}는 자바스크립트 코드 사용하기위한
            arrButtonName.map((item, index) => {
              return (
                <TabButton key={item} isSelected={isSelected[index]} 버튼명={item} 탭클릭={() => { hTabClick(index) }} />
              )

            })

          }
        </div>


        {tabContents[selectedIndex]}
      </div>
    </div>
  )
}