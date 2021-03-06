let html = document.querySelector("#html");
let style = document.querySelector("#style");
let divWrapper = document.querySelector("#div1Wrapper");
let div = document.querySelector("#div1");
let string2 = "";
let n = 0;
let string = `
/*你好,我叫小天
 *是一个前端开发学习者
 *接下来我演示一下我的前端功底
 *首先我们来画一个div
 */
#div1{
    border:1px  solid red;
    width:200px;
    height:200px;
}
/*接下来，将div改造成一个八卦图
 *注意看好了
 *首先将div变成一个圆
*/
#div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/* 八卦是阴阳形成的
*  一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*接下来赋阴阳图以双鱼*/
#div1::before{
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}




`;

//string = string.replace(/\n/g, "<br>");
let step = () => {
  setTimeout(() => {
    //如果是回车，就不照搬
    //如果不是回车，就照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 999999);
    document.body.clientWidth >= 800
      ? (divWrapper.style.height = document.body.clientWidth / 2)
      : (divWrapper.style.height = 50 + "vh");

    if (n < string.length - 1) {
      //如果n不是最后一个，就继续
      // step(); //setInterval
      n += 1;
      step();

      //console.log(html.innerHTML);
    }
  }, 10);
};
step();
