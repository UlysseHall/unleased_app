$(function() {
    user = {
        getUser: function() {
            if(localStorage.token == null) {
                this.connected = false;
                return false;
            } else {
                this.connected = true;
                return true;
            }
        }
    }
});