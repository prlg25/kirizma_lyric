'use strict';

console.log("main.js loaded");

function dataLoad(inputid) {
    let text = document.getElementById(inputid);
    let textVal = text.value;
    // console.log(textVal);
    return textVal;

}

async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text)
      alert('コピーしました')
    } catch (error) {
      alert((error && error.message) || 'コピーに失敗しました')
    }
}

function main() {
    const lyricTexts = dataLoad("input1");
    const dos = dataLoad("input2");
    const lyricTextsArray = lyricTexts.split(/\r\n|\n/);
    const dosArray = dos.split(`|`)
    const lyricFadeFrame = 26
    console.log(lyricTextsArray[0]);
    console.log(dosArray[1]);
    // これをHTMLの入力から指定できるようにしたい
    const lyricTimingDataName = dataLoad("input3");
    // reg = new RegExp('[\\s\\w]+(' + strlist.join('|') + ')', 'i');
    const lyricTimingDataRegex = new RegExp(lyricTimingDataName + `[0-9]*_data`);
    console.log(dos.search(lyricTimingDataRegex));
    let lyricTimingDataFrames = dosArray.find(element => element.search(lyricTimingDataRegex) !== -1);
    console.log(lyricTimingDataFrames);
    lyricTimingDataFrames = lyricTimingDataFrames.split("=")[1].split(`,`);
    console.log(lyricTimingDataFrames);

    let outputArray = []
     
    for (let i = 0; i < lyricTextsArray.length; i++) {
        let lyricIn1Layer = 0
        let lyricIn2Layer = 1
        let lyricOutLayer = 2
        if (i === lyricTextsArray.length - 2) {
            lyricIn2Layer = 1
            lyricOutLayer = 1
        } else if (i === lyricTextsArray.length - 1) {
            lyricIn2Layer = 0
            lyricOutLayer = 0
        }
        outputArray.push(`${lyricTimingDataFrames[i]},${lyricIn1Layer},${lyricTextsArray[i]},lyric,100,37,,,0.5,lyricin1,27`)
        outputArray.push(`${lyricTimingDataFrames[i+1]},${lyricIn2Layer},${lyricTextsArray[i]},lyric,100,10,,,1,lyricin2,27`)
        outputArray.push(`${lyricTimingDataFrames[i+2]},${lyricOutLayer},${lyricTextsArray[i]},lyric,100,10,,,1,lyricout,27`)
        outputArray.push(`${Number(lyricTimingDataFrames[i+2]) + lyricFadeFrame},${lyricOutLayer}`)
    }
    let outputText = outputArray.join("\n")
    outputText = `|mask_data=
${outputText}
|`

    copyToClipboard(outputText)


}

