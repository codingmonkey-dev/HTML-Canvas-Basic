// ===== Canvas 완성 JavaScript =====
// 모든 실습의 완성된 코드입니다.

// 애니메이션 관련 변수
let animationId = null;

// ===== 실습 1: Canvas 기본 설정 및 컨텍스트 =====
function practice1() {
    // canvas1 요소를 가져오기
    const canvas = document.getElementById('canvas1');
    
    // 2D 렌더링 컨텍스트 가져오기
    const ctx = canvas.getContext('2d');
    
    // Canvas 전체를 밝은 파란색으로 채우기
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 좌표계 확인을 위한 점들 그리기
    // 왼쪽 위 (0, 0)에 빨간 점
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 10, 10);
    
    // 오른쪽 아래 모서리에 파란 점
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(canvas.width - 10, canvas.height - 10, 10, 10);
    
    // 중앙에 초록 점
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(canvas.width/2 - 5, canvas.height/2 - 5, 10, 10);
    
    // 좌표 정보 텍스트
    ctx.fillStyle = '#000000';
    ctx.font = '14px Arial';
    ctx.fillText('(0,0)', 15, 20);
    ctx.fillText(`(${canvas.width},${canvas.height})`, canvas.width - 80, canvas.height - 20);
    ctx.fillText('중앙', canvas.width/2 + 10, canvas.height/2);
}

// ===== 실습 2: 기본 도형 그리기 =====
function practice2() {
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');
    
    // 화면 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. 색칠된 사각형 그리기
    ctx.fillStyle = '#3498db';
    ctx.fillRect(50, 50, 100, 60);
    
    // 2. 테두리만 있는 사각형 그리기
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    ctx.strokeRect(200, 50, 100, 60);
    
    // 3. 완전한 원 그리기
    ctx.beginPath();
    ctx.arc(400, 80, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#2ecc71';
    ctx.fill();
    ctx.strokeStyle = '#27ae60';
    ctx.stroke();
    
    // 4. 반원(호) 그리기
    ctx.beginPath();
    ctx.arc(500, 80, 30, 0, Math.PI);
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // 5. 직선 그리기
    ctx.beginPath();
    ctx.moveTo(50, 180);
    ctx.lineTo(250, 220);
    ctx.strokeStyle = '#9b59b6';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 6. 곡선 그리기 (2차 베지어)
    ctx.beginPath();
    ctx.moveTo(300, 180);
    ctx.quadraticCurveTo(400, 150, 500, 200);
    ctx.strokeStyle = '#34495e';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 라벨 추가
    ctx.fillStyle = '#2c3e50';
    ctx.font = '12px Arial';
    ctx.fillText('fillRect', 50, 130);
    ctx.fillText('strokeRect', 200, 130);
    ctx.fillText('arc (원)', 360, 140);
    ctx.fillText('arc (반원)', 460, 140);
    ctx.fillText('직선', 50, 240);
    ctx.fillText('곡선', 350, 240);
}

// ===== 실습 3: 경로(Path) 시스템 =====
function practice3() {
    const canvas = document.getElementById('canvas3');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. 삼각형 그리기
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    ctx.fillStyle = '#3498db';
    ctx.fill();
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 2. 별 모양 그리기
    const centerX = 300;
    const centerY = 100;
    const outerRadius = 40;
    const innerRadius = 20;
    const points = 5;
    
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
        const angle = (i * Math.PI) / points;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = '#f1c40f';
    ctx.fill();
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 3. 하트 모양 그리기
    const heartX = 400;
    const heartY = 180;
    const heartSize = 30;
    
    ctx.beginPath();
    ctx.moveTo(heartX, heartY + heartSize / 4);
    ctx.bezierCurveTo(heartX, heartY, heartX - heartSize / 2, heartY, heartX - heartSize / 2, heartY + heartSize / 4);
    ctx.bezierCurveTo(heartX - heartSize / 2, heartY + heartSize / 2, heartX, heartY + heartSize, heartX, heartY + heartSize);
    ctx.bezierCurveTo(heartX, heartY + heartSize, heartX + heartSize / 2, heartY + heartSize / 2, heartX + heartSize / 2, heartY + heartSize / 4);
    ctx.bezierCurveTo(heartX + heartSize / 2, heartY, heartX, heartY, heartX, heartY + heartSize / 4);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    
    // 라벨 추가
    ctx.fillStyle = '#2c3e50';
    ctx.font = '14px Arial';
    ctx.fillText('삼각형', 70, 200);
    ctx.fillText('별', 270, 200);
    ctx.fillText('하트', 370, 250);
}

// ===== 실습 4: 텍스트 처리 =====
function practice4() {
    const canvas = document.getElementById('canvas4');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. 기본 텍스트 그리기
    ctx.font = '24px Arial';
    ctx.fillStyle = '#2c3e50';
    ctx.fillText('안녕하세요! Canvas입니다.', 50, 50);
    
    // 2. 테두리 텍스트와 색칠된 텍스트 함께
    ctx.font = '32px bold serif';
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 2;
    ctx.strokeText('Canvas', 50, 100);
    ctx.fillStyle = '#f39c12';
    ctx.fillText('Canvas', 50, 100);
    
    // 3. 텍스트 정렬
    ctx.font = '20px Arial';
    ctx.fillStyle = '#34495e';
    
    // 가이드 라인 그리기
    ctx.strokeStyle = '#bdc3c7';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 110);
    ctx.lineTo(300, 190);
    ctx.stroke();
    
    // 왼쪽 정렬 (기본값)
    ctx.textAlign = 'left';
    ctx.fillText('왼쪽 정렬', 300, 130);
    
    // 가운데 정렬
    ctx.textAlign = 'center';
    ctx.fillText('가운데 정렬', 300, 155);
    
    // 오른쪽 정렬
    ctx.textAlign = 'right';
    ctx.fillText('오른쪽 정렬', 300, 180);
    
    // 4. 텍스트 크기 측정하여 배경 박스 그리기
    ctx.font = '28px Arial';
    ctx.textAlign = 'left';
    const text = '배경이 있는 텍스트';
    const metrics = ctx.measureText(text);
    
    // 배경 박스
    const x = 50;
    const y = 220;
    const padding = 10;
    ctx.fillStyle = '#ecf0f1';
    ctx.fillRect(x - padding, y - 30 - padding, metrics.width + padding * 2, 40);
    
    // 텍스트
    ctx.fillStyle = '#2c3e50';
    ctx.fillText(text, x, y);
}

// ===== 실습 5: 변형(Transform) =====
function practice5() {
    const canvas = document.getElementById('canvas5');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. 기본 사각형 (변형 없음)
    ctx.fillStyle = '#3498db';
    ctx.fillRect(50, 50, 80, 50);
    
    // 2. 이동 변형
    ctx.save();
    ctx.translate(100, 0);
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(50, 50, 80, 50);
    ctx.restore();
    
    // 3. 회전 변형
    ctx.save();
    ctx.translate(200, 75);  // 회전 중심점으로 이동
    ctx.rotate(Math.PI / 6); // 30도 회전
    ctx.fillStyle = '#2ecc71';
    ctx.fillRect(-40, -25, 80, 50);
    ctx.restore();
    
    // 4. 크기 변형
    ctx.save();
    ctx.translate(350, 75);
    ctx.scale(1.5, 0.8);     // x축 1.5배, y축 0.8배
    ctx.fillStyle = '#f39c12';
    ctx.fillRect(-40, -25, 80, 50);
    ctx.restore();
    
    // 5. 복합 변형 - 여러 사각형을 원형으로 배치
    const numRects = 8;
    ctx.save();
    ctx.translate(250, 250);  // 중심점으로 이동
    
    for (let i = 0; i < numRects; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / numRects);
        ctx.fillStyle = `hsl(${i * 45}, 70%, 60%)`;
        ctx.fillRect(60, -15, 40, 30);
        ctx.restore();
    }
    ctx.restore();
    
    // 라벨 추가
    ctx.fillStyle = '#2c3e50';
    ctx.font = '12px Arial';
    ctx.fillText('원본', 50, 110);
    ctx.fillText('이동', 130, 110);
    ctx.fillText('회전', 180, 140);
    ctx.fillText('크기변형', 320, 140);
    ctx.fillText('복합변형', 200, 320);
}

// ===== 실습 6: 애니메이션 기초 =====
let ballX = 50;
let ballY = 150;
let ballSpeedX = 3;
let ballSpeedY = 2;
const ballRadius = 20;

function animateBall() {
    const canvas = document.getElementById('canvas6');
    const ctx = canvas.getContext('2d');
    
    // 1. 화면 지우기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. 공의 위치 업데이트
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    // 3. 벽과의 충돌 처리
    if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    }
    
    // 경계 안에 공을 유지
    ballX = Math.max(ballRadius, Math.min(canvas.width - ballRadius, ballX));
    ballY = Math.max(ballRadius, Math.min(canvas.height - ballRadius, ballY));
    
    // 4. 공 그리기
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#3498db';
    ctx.fill();
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 그림자 효과
    ctx.beginPath();
    ctx.arc(ballX + 2, ballY + 2, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fill();
    
    // 5. 다음 프레임 요청
    animationId = requestAnimationFrame(animateBall);
}

function startAnimation() {
    if (animationId === null) {
        // 공 위치 초기화
        ballX = 50;
        ballY = 150;
        ballSpeedX = Math.abs(ballSpeedX);
        ballSpeedY = Math.abs(ballSpeedY);
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
    
    let clickedCircles = [];
    
    // Canvas 좌표 변환 함수
    function getCanvasCoordinates(canvas, event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    
    // 1. 클릭 이벤트 처리
    canvas.addEventListener('click', function(event) {
        const coords = getCanvasCoordinates(canvas, event);
        
        // 클릭 위치 저장
        clickedCircles.push({
            x: coords.x,
            y: coords.y,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            time: Date.now()
        });
        
        // 오래된 원들 제거 (5초 후)
        const now = Date.now();
        clickedCircles = clickedCircles.filter(circle => now - circle.time < 5000);
        
        // 클릭된 원들 다시 그리기
        redrawClickedCircles();
    });
    
    function redrawClickedCircles() {
        // 이전 원들만 지우지 않고 전체를 다시 그리기 위해
        // 마우스 이벤트에서 처리하도록 플래그 설정
        canvas.dispatchEvent(new MouseEvent('mousemove', {
            clientX: canvas.getBoundingClientRect().left + canvas.width / 2,
            clientY: canvas.getBoundingClientRect().top + canvas.height / 2
        }));
    }
    
    // 2. 마우스 움직임 이벤트 처리
    canvas.addEventListener('mousemove', function(event) {
        const coords = getCanvasCoordinates(canvas, event);
        
        // 화면 지우기
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 클릭된 원들 다시 그리기
        clickedCircles.forEach(circle => {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, 15, 0, Math.PI * 2);
            ctx.fillStyle = circle.color;
            ctx.fill();
            ctx.strokeStyle = '#2c3e50';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
        
        // 마우스 따라다니는 원
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, 30, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
        ctx.fill();
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 중심에서 마우스까지 선 그리기
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(coords.x, coords.y);
        ctx.strokeStyle = '#34495e';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 중심점 표시
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#e74c3c';
        ctx.fill();
        
        // 좌표 정보 표시
        ctx.fillStyle = '#2c3e50';
        ctx.font = '14px Arial';
        ctx.fillText(`마우스: (${Math.round(coords.x)}, ${Math.round(coords.y)})`, 10, 20);
        ctx.fillText(`거리: ${Math.round(Math.sqrt(Math.pow(coords.x - canvas.width/2, 2) + Math.pow(coords.y - canvas.height/2, 2)))}px`, 10, 40);
        
        if (clickedCircles.length > 0) {
            ctx.fillText(`클릭한 원의 개수: ${clickedCircles.length}`, 10, 280);
        }
    });
    
    // 3. 더블클릭으로 화면 초기화
    canvas.addEventListener('dblclick', function() {
        clickedCircles = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#95a5a6';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('화면이 초기화되었습니다', canvas.width / 2, canvas.height / 2);
        ctx.textAlign = 'left';
        
        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 1000);
    });
}

// 페이지 로드 시 이벤트 핸들러 설정
window.addEventListener('load', setupEventHandlers);