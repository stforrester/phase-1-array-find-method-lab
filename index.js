// code your solution here

/*function superbowlWin(array) {
    const callBack = function (element) {
        return element.result === "W";
    }
    
    const responseVar = array.find(callBack);

    if (responseVar === undefined) {
        return responseVar;
    }
    else {
        return responseVar.year;
    }
};*/

function superbowlWin(array) {
    const response = array.find((element) => {
        return element.result === "W";
    });

    if (response === undefined) {
        return response;
    }
    else {
        return response.year;
    }
}