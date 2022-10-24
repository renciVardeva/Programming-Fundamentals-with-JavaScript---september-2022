function rounding (value, precision) {
    if (precision > 15){
        precision = 15;
    }
    console.log(parseFloat(value.toFixed(precision)));

}
rounding (10.5,3)