import intervalToDuration from "date-fns/intervalToDuration";

/**
 * Get the difference between the two dates
 * @createdTime: created time,
 * @completedTime: completed time
 * */
export const getAmountOfTime = (createdTime: string, completedTime: string): string => {
    const reg = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{7}Z/;
    if (!reg.test(createdTime) || !reg.test(completedTime)) return "";

    let amountOfTime = "";

    try {
        const createdJsTime = new Date(createdTime);
        const completedJsTime = new Date(completedTime);

        const amountOfTimeSec = completedJsTime.getTime() - createdJsTime.getTime();
        const amountOfTimeDate = new Date(amountOfTimeSec);

        const dateInterval = intervalToDuration({start: createdJsTime, end: completedJsTime});
        amountOfTime = `${dateInterval.years}-${dateInterval.months}-${dateInterval.days}T${dateInterval.hours}:${dateInterval.minutes}:${dateInterval.seconds}.${amountOfTimeDate.getMilliseconds()}`;
    }
    catch (err) {
        console.error(err);
        throw Error("The getAmountOfTime function did not count the time!");
    }
    return amountOfTime;
}

export const parseJsonToObj = (jsonData: string): object => {
    if (!jsonData) return {file: "Not json file"};
    let result = {file: "Json file is note parse"};

    try {
        const parsedObj = JSON.parse(jsonData);
        result = parsedObj;
    }
    catch (err) {
        console.log(err)
        throw Error("Json file is note parse");
    }
    return result;
}