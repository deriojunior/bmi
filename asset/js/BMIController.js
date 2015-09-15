var BMIController = {
	
	init: function() {
		BMIController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			BMIController.calculateBMI(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateBMI: function(form) {
		var 
			weight = parseFloat(form.weight.value),
			height = parseFloat(form.height.value),
			result = 0,
			result2 = " ";
		
		result = BMIService.getIndex(weight, height);
		result2 = BMIService.getDescription(result);
		
		BMIController.showResult(result);
		BMIController.indexResult(result2);
	
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
	},
	
	indexResult: function(result2){
		
		var resultado = document.querySelector('.result2');
		resultado.innerHTML = result2;
		
	}
	
	

	
};

//initialization
BMIController.init();
