document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    let uploadedFiles = [];

    ['dragover', 'dragleave', 'drop'].forEach(event => 
        dropZone.addEventListener(event, (e) => e.preventDefault())
    );

    dropZone.addEventListener('dragover', () => dropZone.classList.add('dragover'));
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', (e) => {
        dropZone.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
        console.log(e.dataTransfer.files);
    });

    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => handleFiles(fileInput.files));

    const handleFiles = (files) => {
        for (let file of files) {
            if (!uploadedFiles.some(f => f.name === file.name)) {
                uploadedFiles.push(file);
            }
        }
        renderFiles();
    };

    const renderFiles = () => {
        dropZone.innerHTML = '<p>Kéo thả file vào đây hoặc nhấn để chọn file</p>';
        uploadedFiles.forEach((file, index) => {
            const url = URL.createObjectURL(file);
            console.log("url"+ url);
            dropZone.innerHTML += `
                <div class="file-preview" style="background-image: url('${url}')">
                    <button class="remove-btn" onclick="removeFile(event,${index}, '${url}')">x</button>
                </div>`;
        });
    };

    window.removeFile = (event,index, url) => {
        event.stopPropagation();
        uploadedFiles.splice(index, 1);
        URL.revokeObjectURL(url); 
        renderFiles();
    };
});
