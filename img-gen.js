const imagesContainer = document.querySelector('.images');
const button = document.querySelector('button');
const inp = document.getElementById('inp');

button.addEventListener('click', () => {
    const text = inp.value.trim();
    if (text === "") return alert("Please enter a word!");

    // 1. UI Feedback
    button.textContent = "Loading...";
    button.disabled = true;
    imagesContainer.innerHTML = "<p style='color: white;'>Searching for " + text + "...</p>"; 

    // 2. Dynamic Image Link
    const img = new Image();
    
    // Hesta3dem link "Flickr" - da bey-shouf el-kelma f-el-URL w y-geeb sora la-ye2a
    // We add a random number (seed) to make sure it changes every time
    const randomSeed = Math.floor(Math.random() * 1000);
    const imageUrl = `https://loremflickr.com/500/500/${encodeURIComponent(text)}?random=${randomSeed}`;

    img.onload = () => {
        imagesContainer.innerHTML = ""; // Clear el-text
        img.style.width = "100%";
        img.style.borderRadius = "15px";
        img.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
        imagesContainer.appendChild(img);
        
        button.textContent = "Find Image";
        button.disabled = false;
    };

    img.onerror = () => {
        imagesContainer.innerHTML = "<p style='color: red;'>Not found. Try another word!</p>";
        button.textContent = "Find Image";
        button.disabled = false;
    };

    // 3. Start Loading
    img.src = imageUrl;
});
