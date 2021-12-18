// list 태그를 셀렉터함. 셀렉터All은 배열을 가진다. 
const list = document.querySelectorAll('.list');
//함수를 만든다. 
function activeLink(){
    // list는 배열이기에 forEach로 값을 줄수있다 
    //forEach는 각 value를 넘긴다. 따라서 li 태그의 내용들을 차례로 실행함.
    // 첫번째 ~ 다섯번째 li 태그에 active가 있으면 삭제한다.
    list.forEach((item) => item.classList.remove('active'));
    //this는 addEventlistener로 넘어온 값을 말한다. 
    //가져온 태그에 active클래스를 추가한다. 
    this.classList.add('active')
    console.log(this)
}
//list는 배열이기 때문에 forEach가 사용가능하다.
//item은 배열의 값들이다.
//item을 클릭하면 activeLink를 실행한다. 
list.forEach((item)=> {
    item.addEventListener('click', activeLink)
    console.log(item)
});

