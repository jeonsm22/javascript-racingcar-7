import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export function splitComma(string){
    let commaSplitList = string.split(",");
    isCorrectList(commaSplitList);
    return commaSplitList;
}

function isCorrectList(list){
    list.forEach((carName) => {
        isFiveLengthOver(carName);
        isExistGap(carName);
    })
}

function isFiveLengthOver(carName){
    if(carName.length > 5){
        throw new Error("[ERROR] 차 이름 길이가 5를 초과했습니다.")
    }
}

function isExistGap(carName){
    if(/\s/.test(carName)){
        throw new Error("[ERROR] 차 이름에 공백이 있습니다.")
    }
}

export function isSameCar(carList){
    let carSet = new Set(carList);
    if(carList.length !== carSet.size){
        throw new Error("[ERROR] 동일한 차 이름이 있습니다.")
    }
}

export function makeCarClassList(carList){
    let carClassList = [];
    carList.forEach((car)=>{
        let carClass = new Car(car);
        carClassList.push(carClass);
    })
    return carClassList;
}