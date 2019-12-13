const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

copyBtn.onclick = function() {
    result.select();
    document.execCommand('Copy');
}