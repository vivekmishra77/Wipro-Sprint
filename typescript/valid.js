function validatePhone(phone) {
    if (phone.length < 1) {
        return -1;
    }
    else {
        if (phone.match(/^[0-9-]+$/) != null) {
            if ((phone.replace(/[-]/g, '')).length == 10) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    }
}
var input = prompt("Enter Phone no.");
console.log(validatePhone(input))
