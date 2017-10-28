<!--new-->
<!--弹出框 词语解释-->
<mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">

  <!-- fullWidth-->
  <mu-raised-button class="close-button"
                    label="关闭弹框" @click="close('right')" primary/>

  <mu-content-block @click="close('right')">
    <!--{{clik}}-->

    <p>
    <p>
      属于： {{}} &nbsp |&nbsp
      发音：<a href="">  {{}} </a> <br>
      原形：  <a href="">  {{}}  </a>  &nbsp |&nbsp
      该句：<a href="">  {{}} </a> <br>
      词性： <a href="">
      <!--{{sentenceWordInfo.tags}}-->
    </a>
    </p>
    释义： <br>
    <p class="bg-info"  style="padding: 1%">
      {{ WordMeaning }}
    </p>


    更多词典查询：<br>
    <p>
      <a :href="['http://dict.hjenglish.com/jp/jc/' + sentenceWordInfo.raw_word]"> 沪江  </a>
      &nbsp |&nbsp
      <a :href="['http://jisho.org/search/' + sentenceWordInfo.raw_word]"> jisho  </a>  <br>
      <a :href="['http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/sortprefix:accent/narabi1:kata_asc/narabi2:accent_asc/narabi3:mola_asc/yure:visible/curve:fujisaki/details:invisible/limit:20/word:' + sentenceWordInfo.raw_word]"> 音调及变形  </a>
      &nbsp |&nbsp
      <a :href="['http://tangorin.com/examples/' + sentenceWordInfo.raw_word]"> 例句  </a>  <br>
    </p>
    </p>

  </mu-content-block>

</mu-popup>







<!--old-->
<mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">

  <!-- fullWidth-->
  <mu-raised-button class="close-button"
                    label="关闭弹框" @click="close('right')" primary/>

  <mu-content-block @click="close('right')">
    <!--{{clik}}-->

    <p>
    <p>
      属于： {{sentenceWordInfo.Nx}} &nbsp |&nbsp
      发音：<a href="">  {{sentenceWordInfo.speak}} </a> <br>
      原形：  <a href="">  {{sentenceWordInfo.raw_word}}  </a>  &nbsp |&nbsp
      该句：<a href="">  {{sentenceWordInfo.this_word}} </a> <br>
      词性： <a href="">
      {{sentenceWordInfo.tags}}
    </a>
    </p>
    <!--<textarea>-->
    <!--<mu-float-button icon="add" mini class="demo-float-button"/>-->
    <!--</textarea>-->
    释义： <br>
    <p class="bg-info"  style="padding: 1%">
      {{ sentenceWordInfo.meaning }}
    </p>


    更多词典查询：<br>
    <p>
      <a :href="['http://dict.hjenglish.com/jp/jc/' + sentenceWordInfo.raw_word]"> 沪江  </a>
      &nbsp |&nbsp
      <a :href="['http://jisho.org/search/' + sentenceWordInfo.raw_word]"> jisho  </a>  <br>
      <a :href="['http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/sortprefix:accent/narabi1:kata_asc/narabi2:accent_asc/narabi3:mola_asc/yure:visible/curve:fujisaki/details:invisible/limit:20/word:' + sentenceWordInfo.raw_word]"> 音调及变形  </a>
      &nbsp |&nbsp
      <a :href="['http://tangorin.com/examples/' + sentenceWordInfo.raw_word]"> 例句  </a>  <br>
    </p>
    </p>

  </mu-content-block>

</mu-popup>
