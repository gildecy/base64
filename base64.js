 <script>
 const fileInput = document.getElementById('file');
        const output = document.getElementById('output');
        const preview = document.getElementById('preview');
        const downloadButton = document.getElementById('download');

        fileInput.addEventListener('change', previewFile);
        downloadButton.addEventListener('click', downloadFile);
        output.addEventListener('input', previewText);

        function previewFile(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                output.value = reader.result;
                preview.src = reader.result;
            };
        }

        function downloadFile() {
            const link = document.createElement('a');
            link.href = output.value;
            link.download = 'image.png';
            link.click();
        }

        function previewText(event) {
            const base64 = event.target.value.replace(/^data:image\/[a-z]+;base64,/, "");
            preview.src = `data:image/png;base64,${base64}`;
    </script>
