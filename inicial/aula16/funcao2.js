var num = 120
var fator = function(n) {
            var res = 1
                for(var c = n; c >= 1; c--){
                    res = res*c
                }
                return res
            }

console.log(`O valor do fatorial de ${num} é ${fator(num)}`)