let mode = 'textToBinary';

document.getElementById('switchBtn').addEventListener('click', function() {
  if (mode === 'textToBinary') {
    mode = 'binaryToText';
    document.getElementById('switchBtn').textContent = 'Biner ke Teks';
    document.getElementById('textInput').placeholder = 'Masukkan biner';
    document.getElementById('output').placeholder = 'Hasil';
  } else {
    mode = 'textToBinary';
    document.getElementById('switchBtn').textContent = 'Teks ke Biner';
    document.getElementById('textInput').placeholder = 'Masukkan teks';
    document.getElementById('output').placeholder = 'Hasil biner';
  }
});

document.getElementById('translateBtn').addEventListener('click', function() {
  const inputText = document.getElementById('textInput').value;
  let outputText = '';

  if (mode === 'textToBinary') {
    outputText = stringToBinary(inputText);
  } else {
    outputText = binaryToString(inputText);
  }

  document.getElementById('output').value = outputText;
});

function stringToBinary(input) {
  return input.split('').map(function(char) {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

function binaryToString(input) {
  return input.split(' ').map(function(bin) {
    return String.fromCharCode(parseInt(bin, 2));
  }).join('');
}
