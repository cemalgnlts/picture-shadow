(function() {
    // Wait for the DOM to be ready.
    document.addEventListener("DOMContentLoaded", function () {
        // Find all the images you want to be shaded.
        const pictures = document.querySelectorAll("img.picture-shadow");

        // Apply the required css properties to turn the image into shadow.
        function imageToShadow(img) {
            img.style.zIndex = "-1";
            img.style.position = "absolute";
            img.style.left = img.dataset.left || "0px";
            img.style.top = img.dataset.top || "30px";
            img.style.transform = "scale(" + (img.dataset.scale || "1") + ")";
            img.style.filter = "blur(" + (img.dataset.blur || "20px") + ")";
            return img;
        }

        // Insert the found image inside a div.
        function wrapper(el) {
            const wrapperDiv = document.createElement("div");
            wrapperDiv.className = "picture-shadow-wrapper";
            el.parentElement.insertBefore(wrapperDiv, el);
            wrapperDiv.appendChild(el);
            return wrapperDiv;
        }

        // Insert each found image inside a div, 
        // duplicate it and apply the required styles.
        pictures.forEach(function (img) {
            img.style.borderRadius = img.dataset.radius || "8px";
            
            const div = wrapper(img);
            div.style.position = "relative";
            
            const shadowImg = img.cloneNode(true);
            imageToShadow(shadowImg);
            div.appendChild(shadowImg);
        });
    });
})();
