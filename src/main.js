import convert from './convert'

window.onload = () => {
    var km = window.km = new kityminder.Minder()
    km.renderTo('#minder-view');
    km.disable()
    km.execCommand('hand')
    document.querySelector('#generate-btn').onclick = generate;
    document.querySelector('#save-btn').onclick     = save;

    // Start from the skill set in docs/skill-set.json, copied next to the page by `npm run build`
    fetch('skill-set.json')
        .then((res) => res.ok ? res.text() : Promise.reject(new Error(res.status)))
        .then((json) => {
            document.querySelector('#skillset-input').value = json;
            generate();
        })
        .catch((err) => console.error('Could not load skill-set.json', err))
}

function generate() {
    km.importData('json', convert(document.querySelector('#skillset-input').value))
}

function save() {
    km.exportData('png').then((url)=> {
        let download      = document.createElement('a');
        download.href     = url;
        download.download = 'skill-set.png';
        download.click();
        document.querySelector('canvas').remove()
    })
}
