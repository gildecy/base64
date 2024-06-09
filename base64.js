 <script>
        file.addEventListener('change',previewFile);
download.addEventListener('click',downloadFile);
output.addEventListener('input',previewText);


// abaixo são criada 3 funções 
//previewFile,downloaFile ,
//função para base64.


function previewFile({target}){

    const file = target.file[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload=()=> {
        output.value = reader.result;
        preview.src = reader.result;
    }

};

function downloadFile (){
    const link = document.createElement('a');
     link.href = output.value;
     link.download ='image.png';
     link.click();
}

// essa função busca a imagem da função downloadfile e converte na base64
function previewText({target}) {
    let base64 = target.value.replace(/^data:image\/[a-z]+;base64,/,"");
    preview.src = `data:image/png;base64,${base64}`;
}
    </script>
