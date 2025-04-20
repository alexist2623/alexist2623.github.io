// Get the current page URL
let currentLocation = location.href.replace(/\/index\.html(#.*)?$/, '');
if (currentLocation.endsWith("/")) {
    currentLocation = currentLocation.slice(0, -1); // 마지막 슬래시 제거
}
console.log(currentLocation);

// Select all navigation buttons (or links)
const menuItems = document.querySelectorAll('.button');

// Loop through the buttons and check if href matches the current URL
menuItems.forEach(item => {
    let newitem = item.href.replace(/\/index\.html(#.*)?$/, '')
    if (newitem.endsWith("/")) {
        newitem = newitem.slice(0, -1); // 마지막 슬래시 제거
    }
    console.log(newitem);
    if (newitem === currentLocation) {
        item.classList.add('active');
    }
});

// 슬라이더 초기 세팅
document.querySelectorAll('.slider-container').forEach((sliderContainer, index) => {
  
    // 이 슬라이더 컨테이너 안에서만 요소 찾기
    const slideTrack = sliderContainer.querySelector('.slide-track');
    const slides = sliderContainer.querySelectorAll('.slide');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
    const nextBtn = sliderContainer.querySelector('.next-btn');
    
    // 만약 컨테이너 구조가 잘못되어 있어 요소를 못 찾는다면 무시
    if (!slideTrack || !slides.length || !prevBtn || !nextBtn) {
      console.warn(`Slider #${index} has missing elements. Check HTML structure.`);
      return;
    }
  
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
  
    // 다음 슬라이드
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      updateSlidePosition();
    }
    // 이전 슬라이드
    function prevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }
  
    // 실제로 트랙을 옮겨주는 함수
    function updateSlidePosition() {
      const offset = -(currentSlideIndex * 100) + '%';
      slideTrack.style.transform = `translateX(${offset})`;
    }
  
    // 버튼 클릭으로 슬라이드 이동
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  
    // 필요하면 자동 슬라이드도 컨테이너별로 설정
    let autoSlideInterval = setInterval(nextSlide, 3000);
  
    // 마우스 호버 시 멈춤
    sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });
    // 마우스 떠나면 재시작
    sliderContainer.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 3000);
    });
  
}); 
