// 줄바꿈
document.getElementById('inputText').addEventListener('input', function() {
    const inputText = this.value;
    const lines = inputText.split('\n');
    const numberedLines = lines.map((line, index) => `${index + 1}: ${line}`);
    document.getElementById('outputText').textContent = numberedLines.join('\n');
});
