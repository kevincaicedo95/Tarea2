const status = document.getElementById('status');
const output = document.getElementById('output');
if (window.FileList && window.File && window.FileReader) {
  document.getElementById('imagen').addEventListener('change', event => {
    output.src = '';
    status.textContent = '';
    const file = event.target.files[0];
    console.log(file)
    if (!file.type) {
      status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
      return;
    }
    if (!file.type.match('image.*')) {
      status.textContent = 'Error: The selected file does not appear to be an image.'
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      output.src = event.target.result;
      console.log(output.src)
    });
    reader.readAsDataURL(file);
  }); 
}