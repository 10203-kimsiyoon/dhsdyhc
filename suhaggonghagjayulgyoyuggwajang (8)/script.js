const activities = [
    "영화 보기",
    "도서 읽기",
    "산책하기",
    "요리하기",
    "운동하기",
    "공부하기",
    "친구와 만나기",
    "음악 듣기",
    "그림 그리기",
    "쇼핑하기",
    "자전거 타기",
    "여행 가기",
    "게임하기",
    "방 청소하기",
    "피크닉 가기",
    "커피 마시기",
    "힐링하기",
    "바다 보기",
    "숲 속 산책"
];

function recommendActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomIndex];

    Swal.fire({
        title: '오늘 뭐 할까요?',
        text: randomActivity,
        icon: 'info',
        confirmButtonText: '다시 추천받기',
        showCancelButton: true,
        cancelButtonText: '닫기',
        customClass: {
            confirmButton: 'btn btn-primary mx-2',
            cancelButton: 'btn btn-secondary mx-2'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            recommendActivity(); // 다시 추천받기
        }
    });
}
