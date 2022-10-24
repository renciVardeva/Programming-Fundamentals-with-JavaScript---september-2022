function vacation(volume, kind, day) {
    let sum = 0;
 
    if (day === "Friday") {
        switch (kind) {
            case "Students":
                sum = volume * 8.45;
                if (volume >= 30) {
                    sum *= 0.85;
                }
                break;
 
            case "Business":
                if (volume >= 100) {
                    volume -= 10;
                }
                sum = volume * 10.9;
                break;
 
            case "Regular":
                sum = volume * 15;
                if (volume >= 10 && volume <= 20) {
                    sum *= 0.95;
                }
                break;
        }
 
    } else if (day === "Saturday") {
        switch (kind) {
            case "Students":
                sum = volume * 9.8;
                if (volume >= 30) {
                    sum *= 0.85;
                }
                break;
 
            case "Business":
                ;
                if (volume >= 100) {
                    volume -= 10;
                }
                sum = volume * 15.6;
                break;
 
            case "Regular":
                sum = volume * 20;
                if (volume >= 10 && volume <= 20) {
                    sum *= 0.95;
                }
                break;
        }
    } else if (day === "Sunday") {
        switch (kind) {
            case "Students":
                sum = volume * 10.46;
                if (volume >= 30) {
                    sum *= 0.85;
                }
                break;
 
            case "Business":
 
                if (volume >= 100) {
                    volume -= 10;
                }
                sum = volume * 16;
                break;
 
            case "Regular":
                sum = volume * 22.5;
                if (volume >= 10 && volume <= 20) {
                    sum *= 0.95;
                }
                break;
        }
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
 
}
vacation (30,

    "Students",
    
    "Sunday")