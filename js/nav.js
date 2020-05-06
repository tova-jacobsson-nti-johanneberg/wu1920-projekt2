document.querySelector('#kategorier').addEventListener('click', function () {
    document.querySelector('#dropdown-content').classList.toggle('active');
});

document.querySelector('#skicka').addEventListener('click', function () {
    document.querySelector('#tack').classList.toggle('active');
});

document.querySelector('#skicka').addEventListener('click', function () {
    document.querySelector('#tips').classList.toggle('active');
});

document.querySelector('#skicka').addEventListener('click', function () {
    document.querySelector('#skicka').classList.toggle('active');
});




/**
 * Function to toggle the given class (className) on the given element (element)
 * From: http://jsfiddle.net/4MBQa/
*/
function toggleClass(element, className) {
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString; 
    }