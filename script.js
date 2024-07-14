// 이미지 URL 또는 경로 (실제 사용할 이미지 경로로 변경해야 합니다)
const image1URL = 'image1.png';
const image2URL = 'image2.png';
const image3URL = 'image3.png';
const image4URL = 'image4.png';

let imagesShown = 1; // 1 for image1, image2 shown; 2 for image3, image4 shown

function toggleImages() {
  if (imagesShown === 1) {
    // Show image3 and image4
    document.getElementById('image1').src = image3URL;
    document.getElementById('image2').src = image4URL;
    // Clear image1 and image2
    // document.getElementById('image3').src = ''; // No need to clear here
    // document.getElementById('image4').src = ''; // No need to clear here
    imagesShown = 2;
  } else {
    // Show image1 and image2
    document.getElementById('image1').src = image1URL;
    document.getElementById('image2').src = image2URL;
    // Clear image3 and image4
    // document.getElementById('image1').src = ''; // No need to clear here
    // document.getElementById('image2').src = ''; // No need to clear here
    imagesShown = 1;
  }
}

function showBeforeImage() {
  if (imagesShown === 1) {
    document.getElementById('image1').src = image1URL;
    document.getElementById('image2').src = ''; // Image 2 clear
  } else {
    document.getElementById('image1').src = image3URL;
    document.getElementById('image2').src = ''; // Image 2 clear
  }
}

function showAfterImage() {
  if (imagesShown === 1) {
    document.getElementById('image1').src = ''; // Image 1 clear
    document.getElementById('image2').src = image2URL;
  } else {
    document.getElementById('image1').src = ''; // Image 1 clear
    document.getElementById('image2').src = image4URL;
  }
}

function compareImages() {
  if (imagesShown === 1) {
    document.getElementById('image1').src = image1URL;
    document.getElementById('image2').src = image2URL;
  } else {
    document.getElementById('image1').src = image3URL;
    document.getElementById('image2').src = image4URL;
  }
}
