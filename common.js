$(function() {
  //ページを表示させる箇所の設定
  var $content = $('#content');
  //ボタンをクリックした時の処理
  $(".floorselect").on('click', function(e) {
    e.preventDefault();
    //.gnavi aのhrefにあるリンク先を保存
    var link = $(this).attr("href");
    //ページを取得してくる
    $.ajax({
      type: 'GET',
      url: link,
      dataType: 'html',
      success: function(data) {
        $content.html(data);
      },
      error: function() {
        alert('問題がありました。');
      }
    });
  });
});
