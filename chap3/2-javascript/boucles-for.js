function bouclesFor() {
    externe: for (var i = 0; i < 3; i++) {
        console.log("i=" + i);
        for (var j = 0; j < 3; j++) {
            if (j === i) {
                continue externe;
            }
            console.log("j=" + j);
        }
    }
}

bouclesFor();
