// 섹션 전환 함수
function showSection(sectionId) {
    // 모든 섹션 숨기기
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    
    // 선택한 섹션 보이기
    document.getElementById(sectionId).style.display = 'block';
}

// 각 링크에 이벤트 리스너 추가
document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    showSection('about');
});

document.getElementById('projectsLink').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    showSection('projects');
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 링크 동작 방지
    showSection('contact');
});

// "John Doe"에 클릭 이벤트 리스너 추가
document.getElementById('name').addEventListener('click', function() {
    // Welcome 섹션을 기본적으로 보이게 함
    document.getElementById('welcome').style.display = 'block';
    // 모든 다른 섹션 숨기기
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
});


// 페이지 로드 시 Welcome 섹션 보이기
window.onload = function() {
    document.getElementById('welcome').style.display = 'block';
};
