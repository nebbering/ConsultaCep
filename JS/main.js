function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);

            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#ibge").html(response.ibge);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ddd").html(response.ddd);
            $("#siafi").html(response.siafi);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
        }
    })

}