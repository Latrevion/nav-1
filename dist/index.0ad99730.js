(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $(".siteList");
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find("li.last");
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem("x");
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [{
    logo: "A",
    url: "https://www.aliyun.com"
  }, {
    logo: "B",
    url: "https://www.bootcss.com/"
  }, {
    logo: "C",
    url: "https://coding.net//"
  }, {
    logo: "D",
    url: "https://developer.mozilla.org/zh-CN/docs/Learn"
  }, {
    logo: "E",
    url: "https://efe.baidu.com/"
  }];
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = url => {
    return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(/\/.*/, "");
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find("li:not(.last)").remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index) => {
      const $li = $(`<li>
            <div class="site">
                <div class="logo">${node.logo}</div>
                <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>
                <div class='close'>
                    <svg class="icon">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </div>
            </div>
    </li>
        `).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
      $li.on("click", () => {
        window.open(node.url, "_self");
      });
      $li.on("click", ".close", e => {
        e.stopPropagation();
        console.log($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $(".addButton").on("click", () => {
    let url = window.prompt("请问您要添加的网址是啥？");
    if (url.indexOf("http") !== 0) {
      url = "https://" + url;
    }
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
      logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)[0].toUpperCase(),
      url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  });
  window.onbeforeunload = () => {
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem("x", string);
  };
  $("#input").keypress(function (e) {
    e.stopPropagation();
  });
  $(document).on("keypress", e => {
    const {key} = e;
    for (let i = 0; i < $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.length; i++) {
      if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].logo.toLowerCase() === key) {
        window.open($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].url, "_self");
      }
    }
  });
})();

//# sourceMappingURL=index.0ad99730.js.map
