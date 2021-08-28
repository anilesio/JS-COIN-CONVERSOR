# JS-COIN-CONVERSOR
This project aims to convert numerical values ​​into currency formats. The AKZ (Angola), BRL (Brazil), EUR (Europe) and (USD) United States of America currency format was used as a base using the conversion of values ​​od JavaScript itself «currency» The project was built for learning purposes, so it must have a lot of workarounds (hhhh), but the object was achieved.

### CONVERSOR DE MOEDAS JAVASCRIPT

###Instalação/Execução
1 - Clone este repositório
2 - Dentre da pasta raiz, execute o ficheiro index.html
3 - E pronto.

##DESCRIÇÃO DO PROJECTO

Este projecto tem como objectivo converter valores numéricos, em formatos de moeda.
Usou-se como base o formato das moedas do AKZ (Angola), BRL (Brasil), EUR (Europa) e (USD) Estados Unidos da América usando a conversão
de valores od próprio JavaScript «currency»
O projecto foi contruído por fins de aprendizagem, então deve ter muitas gambiarras (hhhh), mas o objecto foi alcançado.

##COMO USAR

1 - O usuário deve preencher o valor desejado no campo de texto. O campo de texto é do tipo «number», então, aceita apenas números,
facilitando assim na filtragem dos valores.
2 - A seguir deve seleccionar a localidade que lhe será devolvido o valor formatado.

English

#PROJECT COMPOSITION

This project aims to convert numerical values ​​into currency formats.
The AKZ (Angola), BRL (Brazil), EUR (Europe) and (USD) United States of America currency format was used as a base using the conversion
of values ​​od JavaScript itself «currency»
The project was built for learning purposes, so it must have a lot of workarounds (hhhh), but the object was achieved.

##How to use

1 - The user must fill in the desired value in the text field. The text field is of type «number», so it accepts only numbers,
thus facilitating the filtering of values.
2 - Next, select the location where the formatted value will be returned.

##COMPOSIÇÃO DO PROJECTO

style:
	.fullBody{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            /* text-align: center; */
            max-width: 50%;
            margin: auto;
            justify-self: center;
            padding-top: 50px;
        }
        p{
            padding: 10px;
            color: #a9a9a9;
        }
        .resultBox{
            border: 1px solid #dedede;
            border-radius: 10px;
            width: 100%;
            font-size: 1rem;
            background-color: #fafafa;
            padding: 1em;
            margin: 10px;

        }

        .styleInput{
            border: 1px solid #dedede;
            display: block;
            width: 100%;
            padding: 20px;
            font-size: 20pt;
            border-radius: 10px;
            margin: 10px;
        }
        .styleButton{
            font-size: 20pt;
            padding: 10px;
            outline: none;
            max-width:100% ;
            border-radius: 10px;
            border: 1px solid #013042;
            background-color: #1854c4;
            color: #dedede;
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
            font-weight: bold;
            text-transform: initial;
            transition: 0.1s all ease-in-out;
            vertical-align: middle;
            cursor: pointer;
        }

        .styleButton:hover{
            background-color: #244480;
        }

        .styleButton:active{
            background-color: #122241;
        }

        .center{
             display: block;
            margin-left: auto;
            margin-right: auto;
        }
        
        
#html

	<div class="fullBody">
        <h1>Formatar Moeda</h1>

        <div class="form">
            <form action="" class="center">
                <p>Informe o valor</p>
                <input type="number" class="styleInput" id="txtNumber" placeholder="0">
                <p>Seleccione o país</p>
                <select name="" id="selectCountry" class="styleInput">
                    <optgroup>
                        <option selected>Escolha uma opção</option>
                        <option value="AKZ">Angola</option>
                        <option value="BRL">Brasil</option>
                        <option value="USD">Estados Unidos da América</option>
                    </optgroup>
                </select>
                <!-- <button type="button" id="btnForm" class="styleButton">Formatar</button> -->
            </form>
        </div>

        <div class="resultBox">
            <h3 id="area">RESULTADO AQUI</h3>
        </div>
    </div>
    
    
#javascript
	var selectValue = document.getElementById('selectCountry')
        selectValue.addEventListener('click', clicar)

        var selectValue = document.getElementById('selectCountry')
        selectValue.addEventListener('click', clicar)

        function clicar() {
        var txtNumber = document.getElementById('txtNumber')
        
        var numberInput = Number(txtNumber.value)
        var h3valueNumber = document.getElementById('area')
        
        
        valueNumber = numberInput
        
		    if (selectValue.value == "AKZ"){
                var formatter = new Intl.NumberFormat('pt-ao', { style: 'currency', currency: 'AKZ', });
	    	    h3valueNumber.innerText = formatter.format(valueNumber)
            }

            if (selectValue.value == "BRL"){
                var formatter = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL', });
	    	    h3valueNumber.innerText = formatter.format(valueNumber)
            }

            if (selectValue.value == "USD"){
                var formatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', });
	    	    h3valueNumber.innerText = formatter.format(valueNumber)
            }
        }
