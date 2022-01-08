// 문자열을 - 기준으로 split하고 모두 소문자로 리턴하기.

// Only change code below this line
function urlSlug(title) {
  let arr = title.split(/\W/g);
  arr = arr.filter(word => word.length > 0);
  
  return arr.join('-').toLowerCase();

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");