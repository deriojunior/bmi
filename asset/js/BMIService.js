var BMIService = {

	getIndex: function(weight, height) {
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
	},
	
	getDescription: function (index) {
		var indice = " ";
		if(index < 17){
			indice = "Very Underweight";
			
		}
		else if((index >= 17) && (index < 18.49)){
			indice = "Under Weight";
			
		}
		
		else if((index >= 18.5) && (index <= 24.99 )){
			indice = "Normal Weight";
		}
		
		else if((index >= 25) && (index <= 29.99 )){
			indice = "Overweight";
		}
		else if((index >= 30) && (index <= 34.99 )){
			indice = "Obese";
		}
		else if((index >= 35) && (index <= 39.99 )){
			indice = "Severy Obesity";
		}
		
		else if((index > 40 )){
			indice = "Morbid Obesity";
		}
				return indice ;
	}
	
};