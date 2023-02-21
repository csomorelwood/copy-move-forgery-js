let Module = {
    onRuntimeInitialized() {
        let imgElement = document.getElementById('imageSrc');
        let inputElement = document.getElementById('fileInput');

        inputElement.addEventListener('change', (e) => {
            imgElement.src = URL.createObjectURL(e.target.files[0]);
        }, false);
        
        imgElement.onload = () => {
            const img = cv.imread(imgElement);
            
            // to gray scale
            const imgGray = new cv.Mat();
            cv.cvtColor(img, imgGray, cv.COLOR_BGR2GRAY);
            cv.imshow('canvasOutput', imgGray);
            
            // clear memory
            img.delete();
            imgGray.delete();
        };
    }
};