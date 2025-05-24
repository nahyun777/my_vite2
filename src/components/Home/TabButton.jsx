import './TabButton.css';


//props : 소괄호를 통해서 바깥에 있는 데이터를 받아오고 싶을때 (매개변수 역할)
export default function TabButton(props){
    // function handleClick(){
    //     alert(props.버튼명)
    // }
    return(
        <div>
            <li>
                <button onClick={props.탭클릭}>
                    {props.버튼명}
                </button>
            </li>
        </div>
    )
}