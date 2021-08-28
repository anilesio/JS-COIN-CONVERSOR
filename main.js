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

            if (selectValue.value == "EUR"){
                var formatter = new Intl.NumberFormat('eur', { style: 'currency', currency: 'EUR', });
	    	    h3valueNumber.innerText = formatter.format(valueNumber)
            }
        }