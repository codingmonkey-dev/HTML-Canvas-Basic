// ===== Canvas 실습용 JavaScript =====
// 이론 교재와 함께 단계별로 따라해보세요!

// 애니메이션 관련 변수
let animationId = null;

// ===== 실습 1: Canvas 기본 설정 및 컨텍스트 =====
function practice1() {
    

}

// ===== 실습 2: 기본 도형 그리기 =====
function practice2() {
}

// ===== 실습 3: 경로(Path) 시스템 =====
function practice3() {
}

// ===== 실습 4: 텍스트 처리 =====
function practice4() {

}

// ===== 실습 5: 변형(Transform) =====
function practice5() {
}

// ===== 실습 6: 애니메이션 기초 =====
let ballX = 50;
let ballY = 150;
let ballSpeedX = 3;
let ballSpeedY = 2;
const ballRadius = 20;

function animateBall() {
}

function startAnimation() {
    if (animationId === null) {
        animateBall();
    }
}

function stopAnimation() {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

// ===== 실습 7: 이벤트 처리 =====
function setupEventHandlers() {
    const canvas = document.getElementById('canvas7');
    const ctx = canvas.getContext('2d');
    
    // Canvas 좌표 변환 함수
    function getCanvasCoordinates(canvas, event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
}

// 페이지 로드 시 이벤트 핸들러 설정
window.addEventListener('load', setupEventHandlers);