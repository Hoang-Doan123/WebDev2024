document.getElementById('colorInput').addEventListener('input', function() {
    var headingContainer = document.getElementById('headingContainer');
    headingContainer.style.backgroundColor = this.value;
});
