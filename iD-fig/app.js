function getWidth() {
    let screenWidth = screen.width

    if (screenWidth >= 666) {
        const detClass = document.querySelectorAll('.det')
        const whatClass = document.querySelectorAll('.what')
        const fontClass = document.querySelectorAll('.font')
        const wordClass = document.querySelectorAll('.word')
        const transparency = document.getElementById('trans')
        const support = document.getElementById('support')
        const imageClass = document.getElementById('imgc')
        const security = document.getElementById('security')

        whatClass.forEach((whatElement, index) => {
            whatElement.addEventListener('click', () => {
                const clickedDetElement = detClass[index];
                const clickedWhatElement = whatElement;

                if (clickedDetElement.style.display === 'none' || clickedDetElement.style.display === '') {
                     
                    detClass.forEach((detElement, i) => {
                        if (i !== index) {
                            detElement.style.display = 'none';
                                whatClass[i].querySelector('i').className = 'fa-solid fa-angle-down';
                                wordClass[i].classList.remove('active');
                                whatClass[i].classList.add('low'); // Add 'low' class to other elements
                                whatClass[i].classList.remove('bright');
                        }
                    });

                     // Open the clicked "det" element and update classes
                    clickedDetElement.style.display = 'block';
                    clickedWhatElement.querySelector('i').className = 'fa-solid fa-angle-up';
                    wordClass[index].classList.add('active');
                    clickedWhatElement.classList.remove('low');
                    clickedWhatElement.classList.add('bright');
                } else {
                     // Close the clicked "det" element and reset classes
                        clickedDetElement.style.display = 'none';
                        clickedWhatElement.querySelector('i').className = 'fa-solid fa-angle-down';
                        wordClass[index].classList.remove('active');
                        clickedWhatElement.classList.remove('bright');
                        clickedWhatElement.classList.add('low');
                }
            });
        });


        function changePics() {
           imageClass.innerHTML = '<img src="img/svg2.svg" alt="">'
        }

        transparency.addEventListener('click', changePics)

        function changeImage() {
           imageClass.innerHTML = '<img src="img/svg3.svg" alt="">'
        }

        support.addEventListener('click', changeImage)

        function changePix() {
           imageClass.innerHTML = '<img src="img/svg1.svg" alt="">'
        }

        security.addEventListener('click', changePix)
    }
}

getWidth()