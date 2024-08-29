document.addEventListener('DOMContentLoaded', function() {
  const generateButton = document.getElementById('generate');
  const uuidDisplay = document.getElementById('uuid');
  const versionSelect = document.getElementById('version');

  generateButton.addEventListener('click', function() {
    const selectedVersion = versionSelect.value;
    const uuid = generateUUID(selectedVersion);
    uuidDisplay.textContent = uuid;
  });

  function generateUUID(version) {
    switch(version) {
      case 'v1':
        return generateUUIDv1();
      case 'v4':
        return generateUUIDv4();
      default:
        return 'Unsupported UUID version';
    }
  }

  function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  function generateUUIDv1() {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now(); // use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-1xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
  }
});