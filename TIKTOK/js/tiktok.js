//tik tok magic algorithm 

function likecommentRatio(likeCount, numComments) {
    let lcRatio = (likeCount / numComments);
    if (lcRatio >= 100) {
        lcRatio = 1;
    } else if (lcRatio >= 50) {
        lcRatio = 2;
    } else {
        lcRatio = 3;
    }

    return lcRatio;

}



function magicAlgorithm(numLikes, comment, numComments, lcRatio) {
    let rank = 0;
    if (numLikes >= 10000 && comment.includes("dog") && numComments >= 100 && lcRatio === 3) {
        rank = 1;
    } else if (numLikes >= 1000 && comment.includes("cat") && numComments >= 50 && (lcRatio >= 2)) {
        rank = 100;
    } else {
        rank = 1000;
    }

    return rank;

}


alert("Welcome to TikTok! Pretend that you are watching a video right now");
let likeCount = Number(prompt("How many likes did this video get?"));
let comment = prompt("What is the top comment on the video?");
let numComments = prompt("How many comments did the video get?");

let lcRatio = likecommentRatio(likeCount, numComments);

console.log(lcRatio);

let rank = magicAlgorithm(likeCount, comment, numComments, lcRatio)

alert("This video's rank is #" + rank)