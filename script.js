function clicar() {
    fetch("http://127.0.0.1:5000/api")
        .then(res => res.json())
        .then(data => {
            alert(data.mensagem);
        });
}