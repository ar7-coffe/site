*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    background:linear-gradient(180deg,#0a1225,#08101f);
    color:white;
    font-family:Arial,sans-serif;
}

/* TELA INICIAL */

.inicio{
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:20px;
}

.inicio h1{
    font-size:90px;
    color:#53b8ff;
    text-shadow:
        0 0 10px #53b8ff,
        0 0 20px #53b8ff;
}

.inicio p{
    margin-top:20px;
    font-size:28px;
    color:#d8ecff;
}

/* SEÇÃO PRODUTOS */

.versoes{
    min-height:100vh;
    padding:100px 50px;
}

.versoes h2{
    text-align:center;
    font-size:60px;
    color:#53b8ff;
    margin-bottom:60px;
}

.cards{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:40px;
}

.card{
    width:300px;
    background:#13203c;
    border:2px solid #1f4d8d;
    border-radius:20px;
    overflow:hidden;
    transition:0.3s;
    box-shadow:0 0 15px rgba(83,184,255,0.15);
}

.card:hover{
    transform:translateY(-12px);
    box-shadow:0 0 30px rgba(83,184,255,0.4);
}

.card img{
    width:100%;
    height:250px;
    object-fit:cover;
    display:block;
}

.card h3{
    text-align:center;
    padding:20px;
    font-size:28px;
    color:#53b8ff;
}

/* RESPONSIVO */

@media (max-width:768px){

    .inicio h1{
        font-size:55px;
    }

    .inicio p{
        font-size:20px;
    }

    .versoes h2{
        font-size:40px;
    }

    .card{
        width:90%;
    }

}
