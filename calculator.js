outerLoop:

while (true){
    while (true){
        var operation = prompt('What would you like to perform today: \r\n \r\n1: Addition \r\n2: Subtraction \r\n3: Multiplication \r\n4: Division \r\n \r\nEnter the number beside the operation you wish to perform');
        if (operation === null){
            break outerLoop
        }
        var num = /\b[1234]\b/.test(operation);
        var symbol = /[^a-zA-Z0-9]/g.test(operation);
        var whitespace = /[ ]/g.test(operation);
        var letter = /[a-zA-Z]/g.test(operation);
        function round(num, decimalPlaces = 0){
        var p = Math.pow(10, decimalPlaces);
        var n = (num * p) * (1 + Number.EPSILON);
        return Math.round(n)/p;
        }
        try {
            if (operation == '') throw "an empty operator. Please try again"
            if (letter == true) throw "a letter. Please try again"
            if (whitespace == true) throw "whitespace"
            if (!(num == true)) throw "a value outside the options. Please try again"
            if (symbol == true) throw "a symbol. Please try again."
            if (num == true) break
        } catch (error) {
            alert('You entered' + ' ' + error)
        }
        continue
    
        
    }
    
    while (true){
        var no_one = prompt('Enter first number: ');
        if (no_one === null){
            break outerLoop
        }
        try {
            if (no_one == '') throw "nothing. Please try again";
            if (isNaN(no_one)) throw "a letter/symbol. Please try again";
            else break;
        } catch (error) {
            alert('You entered' + ' ' + error);
        }
        continue;
    }
    
    while (true){
        switch(operation){
            case '1':
                operationVal = '+'
                break
            case '2':
                operationVal = '-'
                break
            case '3':
                operationVal = '*'
                break
            case '4':
                operationVal = '/'
                break

        }
        var no_two = prompt(no_one +' '+ operationVal + '\n \nEnter second number: ');
        if (no_two === null){
            break outerLoop
        }
        try {
            if (no_two == '') throw "nothing. Please try again";
            if (isNaN(no_two)) throw "a letter/symbol. Please try again";
            else break;
        } catch (error) {
            alert('You entered' + ' ' + error);
        }
        continue;
    }
    
    
    
    if (operation == 1){
        var sum = parseFloat(no_one) + parseFloat(no_two);
        sum_round = round(sum, 2);
        alert(no_one + ' '+ '+'+ ' ' + no_two + ' ' + '=' + ' ' + sum_round + '\n' + '\n' + 'Unrounded Answer is' + ' '+ sum);  
    }else if (operation == 2){
        var minus = parseFloat(no_one) - parseFloat(no_two);
        var minus_round = round(minus, 2);
        alert(no_one + ' '+ '-'+ ' ' + no_two + ' ' + '=' + ' ' + minus_round + '\n' + '\n' + 'Unrounded Answer is' + ' '+ minus);
    }else if(operation == 3){
        var times = parseFloat(no_one) * parseFloat(no_two);
        var times_round = round(times, 2);
        alert(no_one + ' '+ '*'+ ' ' + no_two + ' ' + '=' + ' ' + times_round + '\n' + '\n' + 'Unrounded Answer is' + ' '+ times);
    }else if (operation == 4){
        var divide = parseFloat(no_one) / parseFloat(no_two);
        var divide_round = round(divide, 2);
        alert(no_one + ' '+ '/'+ ' ' + no_two + ' ' + '=' + ' ' + divide_round + '\n' + '\n' + 'Unrounded Answer is' + ' '+ divide);
    } 
    
}





