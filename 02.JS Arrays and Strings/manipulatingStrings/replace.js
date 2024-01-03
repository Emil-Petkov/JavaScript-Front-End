let randomText =
  'To learn more about the cultural heritage of Bulgaria, visit the virtual museum at museum.bg. The latest technology news and innovations can be found at technews.bg. Travel enthusiasts can find inspiration and useful information at travelguide.bg.';

let replaceText = randomText.replace('.bg', '.com'); //by default it changes only the first one it encounters
//To learn more about the cultural heritage of Bulgaria, visit the virtual museum at museum.com. The latest technology news and innovations can be found at technews.bg. Travel enthusi...

console.log(replaceText);

////////////////////////////////////////////////////////////////

let soemText =
  'To learn more about the cultural heritage of Bulgaria, visit the virtual museum at museum.bg. The latest technology news and innovations can be found at technews.bg. Travel enthusiasts can find inspiration and useful information at travelguide.bg.';

let replaceTxt = soemText.replace(/.bg/g, '.com'); //this way replace of all places

//To learn more about the cultural heritage of Bulgaria, visit the virtual museum at museum.com. ... can be found at technews.com. ... useful information at travelguide.com.
console.log(replaceTxt);
