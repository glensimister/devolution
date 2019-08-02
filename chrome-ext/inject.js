// this is the code which will be injected into a given page...

(function () {

    // just place a div at top right
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = 0;
    div.style.width = '100%';
    div.style.height = '100px';
    div.style.right = 0;
    div.textContent = 'Injected!';
    div.innerHTML = `<tool-bar></tool-bar>`;
    document.body.appendChild(div);

    alert('inserted self... giggity');

})();
