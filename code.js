
function banco(){
    const bd = [
                {id:1,login:"john",senha:"1234",nome:"John",email:"jogn@email.com"},
                {id:2,login:"ringo",senha:"1234@",nome:"Ringo",email:"rubgi@email.com"},
                {id:3,login:"matheus",senha:"12345",nome:"Matheus",email:"matheus@email.com"},
    ]
    let dados = JSON.stringify(bd)

    localStorage.setItem("baco", dados)

    console.log(dados)
}

banco()