<template>
  <div>
    <MyBar></MyBar>

    <mu-list>
      <mu-list-item disabled :title="user_name" describeText="N1 60%"/>
    </mu-list>
    <mu-divider />
    <mu-list>
      <mu-sub-header>你的私人订制</mu-sub-header>

      <mu-list-item title="选择你的级别" toggleNested open=false>

        <mu-list-item title="N1" slot="nested">
          <mu-switch v-model="messages" slot="right"/>
        </mu-list-item>
        <mu-list-item title="N2" slot="nested">
          <mu-switch v-model="messages" slot="right"/>
        </mu-list-item>
        <mu-list-item title="N3" slot="nested">
          <mu-switch v-model="messages" slot="right"/>
        </mu-list-item>
        <mu-list-item title="N4" slot="nested">
          <mu-switch v-model="messages" slot="right"/>
        </mu-list-item>
        <mu-list-item title="N5" slot="nested">
          <mu-switch v-model="messages" slot="right"/>
        </mu-list-item>

      </mu-list-item>



      <mu-list-item disableRipple @click="handleToggle('events')" title="夜间模式">
        <mu-switch v-model="events"  slot="right"/>
      </mu-list-item>




      </mu-list-item>

    </mu-list>

    <mu-list>
      <mu-sub-header>视频音频的语速(0.5~1.2)</mu-sub-header>
      <mu-list-item>
       <mu-slider v-model="value1" :step="5" class="demo-slider"/>
      </mu-list-item>
    </mu-list>

    <mu-list>
      <mu-sub-header>通知设置</mu-sub-header>
      <mu-list-item disableRipple @click="handleToggle('notifications')"  title="关注我">
        <mu-checkbox v-model="notifications" slot="left"/>
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('sounds')"  title="支持我">
        <mu-checkbox v-model="sounds" slot="left"/>
      </mu-list-item>
      <mu-list-item disableRipple @click="handleToggle('videoSounds')" title="意见或建议">
        <mu-checkbox v-model="videoSounds" slot="left"/>
      </mu-list-item>


    </mu-list>
  </div>
</template>

<script>
  import MyBar from '../mybar'

  export default {
    data () {
      return {
        user_name: 'you get your ',

        events: false,
        calls: false,
        messages: false,
        notifications: false,
        sounds: false,
        videoSounds: false
      }
    },
    methods: {
      handleToggle (key) {
        this[key] = !this[key]
      }
    },
    components: {
      MyBar,
    }
  }
</script>
