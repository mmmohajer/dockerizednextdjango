export const textAnimator = (arrayOfStrings, setString, count = 0) => {
  let curText = arrayOfStrings?.[count];
  let curString = '';
  let curTextIndex = 1;
  let writeTexttimer = setInterval(() => {
    curString = curText.slice(0, curTextIndex);
    setString(curString);
    curTextIndex += 1;
    if (curString === curText) {
      clearInterval(writeTexttimer);
      setTimeout(() => {
        let removeTexttimer = setInterval(() => {
          curTextIndex -= 1;
          curString = curText.slice(0, curTextIndex);
          setString(curString);
          if (curString.length === 0) {
            clearInterval(removeTexttimer);
            if (count < arrayOfStrings.length - 1) {
              setTimeout(() => {
                textAnimator(arrayOfStrings, setString, count + 1);
              }, 1000);
            } else {
              setTimeout(() => {
                textAnimator(arrayOfStrings, setString, 0);
              }, 1000);
            }
          }
        }, 200);
      }, 1000);
    }
  }, 200);
};
