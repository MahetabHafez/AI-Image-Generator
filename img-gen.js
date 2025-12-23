const images = document.querySelector('.images');
const button = document.querySelector('button');
const inp = document.getElementById('inp');

const getImages = async () => {
    const text = inp.value.trim();
    if (text === "") return alert("Please enter a prompt!");

    button.textContent = "Generating...";
    button.disabled = true;
    images.innerHTML = ""; 

    for (let i = 0; i < 3; i++) {
        const container = document.createElement('div');
        const img = document.createElement('img');
        
        // Esta3demna encodeURIComponent 3shan el masafat mat-vavezsh el link
        const cleanPrompt = encodeURIComponent(text);
        const randomSeed = Math.floor(Math.random() * 99999);
        
        // Link el sora el mobasher
        const imageUrl = `https://image.pollinations.ai/prompt/${cleanPrompt}?seed=${randomSeed}&width=512&height=512&nologo=true`;
        
        img.src = imageUrl;
        img.alt = text;

        img.onload = () => {
            // El button hy-erga3 lama awel sora te-7amel 3shan el user may-zeh-2sh
            button.textContent = "Generate";
            button.disabled = false;
        };

        img.onerror = () => {
            console.error("Image failed to load");
            button.textContent = "Generate";
            button.disabled = false;
        };

        container.appendChild(img);
        images.appendChild(container);
    }
};