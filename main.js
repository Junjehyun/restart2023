// strict mode는 JavaScript 코드를 더 엄격한 구문 분석과 실행으로 강제하여, 
// 예기치 않은 동작을 방지하고 보안성을 높이는 데 도움을 준다.
'use strict';

// html에서 .navbar_toggleBtn클래스와 .navbar_menu 클래스를 가진 요소를 찾고, toggleBtn변수에 할당 하는 내용이다.

// document.querySelector('.navbar_toggleBtn')을 호출하여 HTML 문서에서 클래스 이름이 navbar_toggleBtn인 첫 번째 요소를 찾습니다. 
// 결과는 toggleBtn 변수에 할당됩니다.
const toggleBtn = document.querySelector('.navbar_toggleBtn');
// document.querySelector('.navbar_menu')을 호출하여 HTML 문서에서 클래스 이름이 navbar_menu인 첫 번째 요소를 찾습니다. 
// 결과는 menu 변수에 할당됩니다.
const menu = document.querySelector('.navbar_menu');
// toggleBtn변수에 'click'이라는 이벤트 리스너를 추가한다. 이 코드는 toggleBtn을 클릭할 때 마다 이벤트 핸들러가 호출되도록 설정하는것.
toggleBtn.addEventListener('click', () => {
// 이벤트 핸들러 내부이다.  밑에 보이듯 menu.classList.toggle('active')를 호출한다. 이 코드는 menu변수에서 
//  클래스 목록을 가져와서 'active' 클래스가 현재 포함되어 있으면 제거하고, 그렇지 않으면 추가한다. 
    menu.classList.toggle('active')
})

//  querySelector는 HTML문서에서 CSS선택자로 지정한 요소를 찾는 메소드이다.

