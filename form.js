document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('kontaktni-formular');
    const status = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const data = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        })
        .then(() => {
            status.textContent = 'Děkuji za zprávu! Ozvu se vám co nejdříve.';
            status.style.color = 'green';
            status.style.display = 'block';
            form.reset();
        })
        .catch((error) => {
            status.textContent = 'Něco se pokazilo. Zkuste to prosím znovu, nebo mi napište přímo na e-mail.';
            status.style.color = 'red';
            status.style.display = 'block';
            console.error(error);
        });
    });
});