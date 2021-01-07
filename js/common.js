$(function() {

  var MONDAI_LIST = [
    {quiz:'ラーメンには、塩、豚骨、みそ、醤油などの味のバリエーションが豊富である', ox:'o', kaisetu:'ラーメン食べたい。'},
    {quiz:'ラーメンは0kcal', ox:'x', kaisetu:'そんな...高カロリーだなんて...ラーメン食べたい...'},
    {quiz:'タピオカミルクティーとラーメンはカロリー量がほぼ一緒！！', ox:'x', kaisetu:'タピオカミルクティーのカロリーは約400kcalでこれはラーメン一杯分に相当する（どっちも食べたい!!!）'},
  ];  

  // 問題数のカウント
  var quiz_index = 0;
  var total_cnt = quiz_index +1;
  var correct_cnt = 0;

  // 問題リストから定義して格納 
  var quiz_text= MONDAI_LIST[quiz_index]['quiz'];
  var correct= MONDAI_LIST[quiz_index]['ox'];
  var kaisetu_text= MONDAI_LIST[quiz_index]['kaisetu'];
  var quiz_limit = (MONDAI_LIST.length -1);


  // htmlを書き換え
  $('#quiz').text(quiz_text);
  $('#kaisetu').text(kaisetu_text);  
  
  // マルバツボタンを押すと解説を表示
  $('.button').click(function(){
    $('#comment').fadeIn('slow');
    var answer = $(this).attr('data-ox');
    $('.button').addClass('click__none');
    if(answer == correct){
      $('#seikai').show();
      $('#matigai').hide();
      correct_cnt++; //正解カウント
    } else {
      $('#seikai').hide();
      $('#matigai').show();
    }
  })

  // 次の問題に進む処理
  $('#next').click(function(){
    quiz_index++;
    $('#comment').hide();
    // 終了処理
    if (quiz_limit < quiz_index) {
      finish();
     // 初期化 
      quiz_index =0;
      correct_cnt =0;
      changeQuestionWord();
      return;
     } else {
      changeQuestionWord();
     }
  })

  // 終了する関数
  function finish() {
    $('#correct-message').text('正解率：'+correct_cnt+'/'+total_cnt+'  ('+ Math.floor(correct_cnt/total_cnt * 100)+'%)');
    $('#finish-panel').removeClass('hidden');
    $('#quiz').hide();
    $('.button').hide();
    $('#kaisetu').hide();
  }

  // 変数とテキストを入れ替える関数
  function changeQuestionWord() {
    quiz_text= MONDAI_LIST[quiz_index]['quiz'];
    correct= MONDAI_LIST[quiz_index]['ox'];
    kaisetu_text= MONDAI_LIST[quiz_index]['kaisetu'];
    total_cnt = quiz_index +1; 
    $('#quiz').text(quiz_text);
    $('#kaisetu').text(kaisetu_text);
    $('.button').removeClass('click__none'); 
  }

  // やり直すボタン
  $('#start-button').click(function(){
    $('#finish-panel').addClass('hidden');
    $('#quiz').show();
    $('.button').show();
    $('#kaisetu').show();
  })
});
